#!/usr/bin/env ruby
# frozen_string_literal: true

require "yaml"
require "date"
require "set"

ROOT = File.expand_path("..", __dir__)
DATA = File.join(ROOT, "_data", "becoming")
WEEKS_DIR = File.join(ROOT, "_becoming", "weeks")

VALID_STATUSES = %w[
  locked
  available
  in_progress
  awaiting_result
  maintenance
  completed
  paused
  dormant
  planned
].freeze

# Ruby Date#wday uses Sunday = 0 through Saturday = 6.
# Keep this lookup in that order even though weeks start on Monday.
VALID_WEEKDAYS = %w[
  sunday
  monday
  tuesday
  wednesday
  thursday
  friday
  saturday
].freeze

errors = []


def relative(path)
  path.to_s.delete_prefix(ROOT + "/")
end


def load_yaml(path, errors)
  YAML.safe_load(
    File.read(path, encoding: "UTF-8"),
    permitted_classes: [Date],
    aliases: true
  ) || {}

rescue Errno::ENOENT
  errors << "#{relative(path)}: missing file"
  {}

rescue Psych::SyntaxError => e
  errors << "#{relative(path)}: invalid YAML (#{e.message.lines.first.strip})"
  {}
end


def parse_date(value)
  return value if value.is_a?(Date)

  return nil if value.nil? || value.to_s.strip.empty?

  Date.parse(value.to_s)

rescue StandardError
  nil
end


def load_front_matter(path, errors)
  content = File.read(
    path,
    encoding: "UTF-8"
  )

  parts = content.split(
    /^---\s*$\n?/,
    3
  )

  unless parts.length >= 3
    errors << "#{relative(path)}: missing YAML front matter"
    return nil
  end

  YAML.safe_load(
    parts[1],
    permitted_classes: [Date],
    aliases: true
  ) || {}

rescue Psych::SyntaxError => e
  errors << "#{relative(path)}: invalid front matter (#{e.message.lines.first.strip})"
  nil
end


# ============================================================
# DOMAINS
# ============================================================

domains_path = File.join(
  DATA,
  "domains.yml"
)

domains = load_yaml(
  domains_path,
  errors
)

domain_records =
  if domains.is_a?(Array)
    domains
  else
    errors << "domains.yml: expected a top-level list"
    []
  end

domain_ids = Set.new

domain_records.each do |domain|
  unless domain.is_a?(Hash)
    errors << "domains.yml: invalid domain record"
    next
  end

  id = domain["id"].to_s

  if id.empty?
    errors << "domains.yml: domain missing id"
    next
  end

  if domain_ids.include?(id)
    errors << "domains.yml: duplicate domain id #{id}"
  end

  domain_ids.add(id)

  if domain["title"].to_s.empty?
    errors << "#{id}: domain missing title"
  end
end


# ============================================================
# LOAD TREE NODES
# ============================================================

nodes = []
tree_ids = Set.new

Dir[
  File.join(
    DATA,
    "trees",
    "*.yml"
  )
].sort.each do |path|

  data = load_yaml(
    path,
    errors
  )

  tree = data["tree"].to_s

  if tree.empty?
    errors << "#{relative(path)}: missing tree"
  else
    tree_ids.add(tree)

    unless domain_ids.include?(tree)
      errors << "#{relative(path)}: tree #{tree} is missing from domains.yml"
    end
  end

  Array(
    data["nodes"]
  ).each do |node|

    unless node.is_a?(Hash)
      errors << "#{relative(path)}: invalid node record"
      next
    end

    nodes << node.merge(
      "tree" => tree,
      "_file" => relative(path)
    )
  end
end


achievements_path = File.join(
  DATA,
  "achievements.yml"
)

achievements = load_yaml(
  achievements_path,
  errors
)

Array(
  achievements
).each do |node|

  unless node.is_a?(Hash)
    errors << "achievements.yml: invalid node record"
    next
  end

  nodes << node.merge(
    "tree" => "legendary",
    "_file" => "achievements.yml"
  )
end


# ============================================================
# NODE VALIDATION
# ============================================================

ids = Hash.new do |hash, key|
  hash[key] = []
end

node_tree = {}

nodes.each do |node|
  id = node["id"].to_s

  if id.empty?
    errors << "#{node["_file"]}: node missing id"
    next
  end

  if node["title"].to_s.empty?
    errors << "#{id}: missing title"
  end

  if node["type"].to_s.empty?
    errors << "#{id}: missing type"
  end

  ids[id] << node
  node_tree[id] = node["tree"]

  status = node["status"]

  if status &&
     !VALID_STATUSES.include?(status)

    errors << "#{id}: invalid status #{status.inspect}"
  end

  progress = node["progress"]

  if progress

    unless progress.is_a?(Hash)
      errors << "#{id}: progress must be a mapping"

    else
      current, target =
        progress.values_at(
          "current",
          "target"
        )

      unless current.is_a?(Numeric) &&
             target.is_a?(Numeric)

        errors << "#{id}: progress current/target must be numeric"
      end

      if target.is_a?(Numeric) &&
         target <= 0

        errors << "#{id}: progress target must be positive"
      end

      if current.is_a?(Numeric) &&
         target.is_a?(Numeric) &&
         current > target

        errors << "#{id}: progress current cannot exceed target"
      end
    end
  end

  if status == "completed" &&
     node["completed_at"].to_s.empty?

    errors << "#{id}: completed requires completed_at"
  end

  if node["completed_at"]

    completed_at = parse_date(
      node["completed_at"]
    )

    unless completed_at
      errors << "#{id}: invalid completed_at"
    end

    if completed_at &&
       completed_at > Date.today

      errors << "#{id}: future node cannot be completed"
    end
  end
end


ids.each do |id, records|
  next if id.empty?
  next if records.length <= 1

  files =
    records
      .map do |record|
        record["_file"]
      end
      .uniq

  errors << (
    "duplicate node id: " \
    "#{id} " \
    "(#{files.join(", ")})"
  )
end


known =
  ids
    .keys
    .reject(&:empty?)
    .to_set


# ============================================================
# PREREQUISITES
# ============================================================

nodes.each do |node|
  id = node["id"].to_s

  next if id.empty?

  Array(
    node["requires"]
  ).each do |required|

    unless known.include?(required)
      errors << "#{id}: unknown prerequisite #{required}"
    end
  end
end


# ============================================================
# CIRCULAR DEPENDENCIES
# ============================================================

graph =
  nodes.each_with_object({}) do |node, result|

    id = node["id"].to_s

    next if id.empty?

    result[id] =
      Array(
        node["requires"]
      )
  end


visiting = Set.new
visited = Set.new

visit = lambda do |id, path|

  if visiting.include?(id)
    errors << (
      "circular dependency: " \
      "#{(path + [id]).join(" -> ")}"
    )

    return
  end

  return if visited.include?(id)

  visiting.add(id)

  Array(
    graph[id]
  ).each do |required|

    if graph.key?(required)
      visit.call(
        required,
        path + [id]
      )
    end
  end

  visiting.delete(id)
  visited.add(id)
end


graph.keys.each do |id|
  visit.call(
    id,
    []
  )
end


# ============================================================
# CYCLES
# ============================================================

cycle_data = load_yaml(
  File.join(
    DATA,
    "cycles.yml"
  ),
  errors
)

cycles =
  Array(
    cycle_data["cycles"]
  )

cycle_ids = Set.new
cycle_by_id = {}


cycles.each do |cycle|

  unless cycle.is_a?(Hash)
    errors << "cycles.yml: invalid cycle record"
    next
  end

  id = cycle["id"].to_s

  if id.empty?
    errors << "cycles.yml: cycle missing id"
    next
  end

  if cycle_ids.include?(id)
    errors << "cycles.yml: duplicate cycle id #{id}"
  end

  cycle_ids.add(id)
  cycle_by_id[id] = cycle

  start_date = parse_date(
    cycle["start_date"]
  )

  end_date = parse_date(
    cycle["end_date"]
  )

  unless start_date
    errors << "#{id}: invalid cycle start_date"
  end

  unless end_date
    errors << "#{id}: invalid cycle end_date"
  end

  if start_date &&
     start_date.wday != 1

    errors << "#{id}: cycle start_date must be Monday"
  end

  if end_date &&
     end_date.wday != 0

    errors << "#{id}: cycle end_date must be Sunday"
  end

  if start_date &&
     end_date &&
     end_date < start_date

    errors << "#{id}: cycle end_date cannot precede start_date"
  end

  Array(
    cycle["active_domains"]
  ).each do |domain|

    unless domain_ids.include?(domain)
      errors << "#{id}: unknown active domain #{domain}"
    end
  end

  Array(
    cycle["maintenance_domains"]
  ).each do |domain|

    unless domain_ids.include?(domain)
      errors << "#{id}: unknown maintenance domain #{domain}"
    end
  end

  Array(
    cycle["dormant_domains"]
  ).each do |domain|

    unless domain_ids.include?(domain)
      errors << "#{id}: unknown dormant domain #{domain}"
    end
  end
end


unless cycle_ids.include?(
  cycle_data["current_cycle"]
)
  errors << "current_cycle is unknown"
end


# ============================================================
# WEEKS AND DAILY PLANS
# ============================================================

week_ids = Set.new
cycle_week_ids = Set.new

weeks_by_cycle =
  Hash.new do |hash, key|
    hash[key] = []
  end


Dir[
  File.join(
    WEEKS_DIR,
    "*.md"
  )
].sort.each do |path|

  week = load_front_matter(
    path,
    errors
  )

  next unless week.is_a?(Hash)

  unless week["cycle_week"] &&
         week["start_date"] &&
         week["end_date"]

    errors << (
      "#{relative(path)}: " \
      "missing cycle_week/start_date/end_date"
    )

    next
  end

  cycle_id =
    week["cycle"].to_s

  cycle_week =
    week["cycle_week"]

  key =
    "#{cycle_id}:#{cycle_week}"


  if cycle_id.empty?
    errors << "#{relative(path)}: missing cycle"

  elsif !cycle_ids.include?(cycle_id)
    errors << "#{key}: unknown cycle #{cycle_id}"
  end


  if cycle_week_ids.include?(key)
    errors << "duplicate cycle week: #{key}"
  end

  cycle_week_ids.add(key)
  week_ids.add(key)


  start_date = parse_date(
    week["start_date"]
  )

  end_date = parse_date(
    week["end_date"]
  )


  unless start_date
    errors << "#{key}: invalid start_date"
  end

  unless end_date
    errors << "#{key}: invalid end_date"
  end


  if start_date &&
     start_date.wday != 1

    errors << "#{key}: start_date must be Monday"
  end


  if end_date &&
     end_date.wday != 0

    errors << "#{key}: end_date must be Sunday"
  end


  if start_date &&
     end_date &&
     end_date != start_date + 6

    errors << "#{key}: week must span exactly seven days"
  end


  if cycle_by_id[cycle_id] &&
     start_date &&
     end_date

    cycle_start =
      parse_date(
        cycle_by_id[cycle_id]["start_date"]
      )

    cycle_end =
      parse_date(
        cycle_by_id[cycle_id]["end_date"]
      )

    if cycle_start &&
       start_date < cycle_start

      errors << "#{key}: starts before cycle #{cycle_id}"
    end

    if cycle_end &&
       end_date > cycle_end

      errors << "#{key}: ends after cycle #{cycle_id}"
    end
  end


  if start_date
    weeks_by_cycle[cycle_id] << [
      cycle_week.to_i,
      start_date,
      key
    ]
  end


  active =
    Array(
      week["active"]
    )

  maintenance =
    Array(
      week["maintenance"]
    )


  active.each do |id|
    unless known.include?(id)
      errors << "#{key}: unknown active node #{id}"
    end
  end


  maintenance.each do |id|
    unless known.include?(id)
      errors << "#{key}: unknown maintenance node #{id}"
    end
  end


  (
    active &
    maintenance
  ).each do |id|

    errors << (
      "#{key}: node #{id} " \
      "cannot be both active and maintenance"
    )
  end


  Array(
    week["quests"]
  ).each_with_index do |quest, index|

    unless quest.is_a?(Hash)
      errors << "#{key}: quest #{index + 1} must be a mapping"
      next
    end

    node_id =
      quest["node"]

    domain =
      quest["domain"]


    if node_id &&
       !known.include?(node_id)

      errors << "#{key}: quest links unknown node #{node_id}"
    end


    if domain &&
       !domain_ids.include?(domain)

      errors << "#{key}: quest uses unknown domain #{domain}"
    end


    if node_id &&
       domain &&
       known.include?(node_id) &&
       node_tree[node_id] != domain

      errors << (
        "#{key}: quest node #{node_id} " \
        "belongs to #{node_tree[node_id]}, " \
        "not #{domain}"
      )
    end


    if quest["task"].to_s.empty? &&
       quest["task_fr"].to_s.empty?

      errors << (
        "#{key}: quest #{index + 1} " \
        "needs task or task_fr"
      )
    end
  end


  # ============================================================
  # DAILY PLAN
  # ============================================================

  days =
    week["days"]


  unless days.is_a?(Array)
    errors << "#{key}: days must be a list"
    next
  end


  if days.length != 7
    errors << (
      "#{key}: daily plan must contain exactly seven days"
    )
  end


  seen_dates = Set.new


  days.each_with_index do |day, day_index|

    unless day.is_a?(Hash)
      errors << (
        "#{key}: day #{day_index + 1} must be a mapping"
      )

      next
    end


    day_date =
      parse_date(
        day["date"]
      )

    weekday =
      day["weekday"]
        .to_s
        .downcase


    unless day_date
      errors << (
        "#{key}: day #{day_index + 1} has invalid date"
      )

      next
    end


    if seen_dates.include?(day_date)
      errors << (
        "#{key}: duplicate daily date #{day_date}"
      )
    end

    seen_dates.add(day_date)


    if start_date &&
       end_date &&
       !(start_date..end_date).cover?(day_date)

      errors << (
        "#{key}: daily date #{day_date} " \
        "falls outside the week"
      )
    end


    expected_weekday =
      VALID_WEEKDAYS[
        day_date.wday
      ]


    if weekday.empty?
      errors << (
        "#{key}: #{day_date} missing weekday"
      )

    elsif !VALID_WEEKDAYS.include?(weekday)

      errors << (
        "#{key}: #{day_date} " \
        "invalid weekday #{weekday.inspect}"
      )

    elsif weekday != expected_weekday

      errors << (
        "#{key}: #{day_date} " \
        "should be #{expected_weekday}, " \
        "not #{weekday}"
      )
    end


    tasks =
      day["tasks"]


    unless tasks.is_a?(Array)
      errors << (
        "#{key}: #{day_date} tasks must be a list"
      )

      next
    end


    tasks.each_with_index do |task, task_index|

      unless task.is_a?(Hash)
        errors << (
          "#{key}: #{day_date} " \
          "task #{task_index + 1} must be a mapping"
        )

        next
      end


      node_id =
        task["node"]

      domain =
        task["domain"]


      if node_id &&
         !known.include?(node_id)

        errors << (
          "#{key}: #{day_date} " \
          "task #{task_index + 1} " \
          "links unknown node #{node_id}"
        )
      end


      if domain &&
         !domain_ids.include?(domain)

        errors << (
          "#{key}: #{day_date} " \
          "task #{task_index + 1} " \
          "uses unknown domain #{domain}"
        )
      end


      if node_id &&
         domain &&
         known.include?(node_id) &&
         node_tree[node_id] != domain

        errors << (
          "#{key}: #{day_date} " \
          "task #{task_index + 1} " \
          "node #{node_id} belongs to " \
          "#{node_tree[node_id]}, not #{domain}"
        )
      end


      if task["text"].to_s.empty? &&
         task["text_fr"].to_s.empty?

        errors << (
          "#{key}: #{day_date} " \
          "task #{task_index + 1} " \
          "needs text or text_fr"
        )
      end
    end
  end


  if start_date &&
     end_date

    expected_dates =
      (start_date..end_date)
        .to_set

    missing_dates =
      expected_dates -
      seen_dates

    extra_dates =
      seen_dates -
      expected_dates


    missing_dates
      .to_a
      .sort
      .each do |missing|

        errors << (
          "#{key}: daily plan missing #{missing}"
        )
      end


    extra_dates
      .to_a
      .sort
      .each do |extra|

        errors << (
          "#{key}: daily plan contains extra date #{extra}"
        )
      end
  end


  Array(
    week["completed"]
  ).each do |id|

    unless known.include?(id)
      errors << (
        "#{key}: completed links unknown node #{id}"
      )
    end
  end
end


# ============================================================
# WEEK SEQUENCE
# ============================================================

weeks_by_cycle.each do |cycle_id, records|

  sorted =
    records.sort_by do |cycle_week, start_date, _key|
      [
        cycle_week,
        start_date
      ]
    end


  sorted.each_cons(2) do |previous, current|

    previous_number,
    previous_start,
    previous_key = previous

    current_number,
    current_start,
    current_key = current


    if current_number !=
       previous_number + 1

      errors << (
        "#{cycle_id}: cycle_week gap between " \
        "#{previous_key} and #{current_key}"
      )
    end


    if current_start !=
       previous_start + 7

      errors << (
        "#{cycle_id}: date gap or overlap between " \
        "#{previous_key} and #{current_key}"
      )
    end
  end
end


# ============================================================
# PHYSICAL PROTOCOL
# ============================================================

protocol_path = File.join(
  DATA,
  "physical_protocol.yml"
)

protocol = load_yaml(
  protocol_path,
  errors
)


if protocol.is_a?(Hash) &&
   !protocol.empty?

  cards =
    Array(
      protocol["cards"]
    )

  card_ids = Set.new


  cards.each do |card|

    unless card.is_a?(Hash)
      errors << (
        "physical_protocol.yml: invalid card record"
      )

      next
    end


    id =
      card["id"].to_s


    if id.empty?
      errors << (
        "physical_protocol.yml: card missing id"
      )

      next
    end


    if card_ids.include?(id)
      errors << (
        "physical_protocol.yml: duplicate card id #{id}"
      )
    end


    card_ids.add(id)
  end


  Array(
    protocol["daily_baseline"]
  ).each do |entry|

    card_id =
      if entry.is_a?(Hash)
        entry["card"]
      end


    if card_id.to_s.empty?

      errors << (
        "physical_protocol.yml: " \
        "daily_baseline entry missing card"
      )

    elsif !card_ids.include?(card_id)

      errors << (
        "physical_protocol.yml: " \
        "daily_baseline references " \
        "unknown card #{card_id}"
      )
    end
  end
end


# ============================================================
# CURRENT WEEK POINTERS
# ============================================================

current = load_yaml(
  File.join(
    DATA,
    "current.yml"
  ),
  errors
)


unless cycle_ids.include?(
  current["cycle"]
)
  errors << (
    "current.yml: unknown cycle #{current["cycle"]}"
  )
end


Array(
  current["quests"]
).each do |quest|

  next unless quest.is_a?(Hash)

  node_id =
    quest["node"]


  if node_id &&
     !known.include?(node_id)

    errors << (
      "current.yml: quest #{quest["id"]} " \
      "links unknown node #{node_id}"
    )
  end
end


# ============================================================
# RESULT
# ============================================================

if errors.empty?

  puts(
    "Becoming data valid: " \
    "#{nodes.length} nodes, " \
    "#{week_ids.length} week(s), " \
    "#{cycles.length} cycle(s), " \
    "daily plans validated, " \
    "no dependency cycles."
  )

  exit 0
end


warn(
  errors
    .map do |error|
      "ERROR: #{error}"
    end
    .join("\n")
)

exit 1
