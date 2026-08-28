#!/usr/bin/env ruby
# frozen_string_literal: true

require "yaml"
require "date"
require "set"

ROOT = File.expand_path("..", __dir__)
DATA = File.join(ROOT, "_data", "becoming")

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

errors = []

def load_yaml(path, errors)
  YAML.safe_load(
    File.read(path, encoding: "UTF-8"),
    permitted_classes: [Date],
    aliases: true
  ) || {}
rescue Psych::SyntaxError => e
  errors << "#{path.delete_prefix(ROOT + "/")}: invalid YAML (#{e.message.lines.first.strip})"
  {}
end

# ============================================================
# LOAD TREE NODES
# ============================================================

nodes = []

Dir[File.join(DATA, "trees", "*.yml")].sort.each do |path|
  data = load_yaml(path, errors)
  tree = data["tree"]

  errors << "#{path}: missing tree" if tree.to_s.empty?

  Array(data["nodes"]).each do |node|
    unless node.is_a?(Hash)
      errors << "#{path}: invalid node record"
      next
    end

    nodes << node.merge(
      "tree" => tree,
      "_file" => path
    )
  end
end

achievements_path = File.join(DATA, "achievements.yml")
achievements = load_yaml(achievements_path, errors)

Array(achievements).each do |node|
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

ids = Hash.new { |hash, key| hash[key] = [] }

nodes.each do |node|
  id = node["id"].to_s

  errors << "#{node["_file"]}: node missing id" if id.empty?
  errors << "#{id}: missing title" if node["title"].to_s.empty?
  errors << "#{id}: missing type" if node["type"].to_s.empty?

  ids[id] << node

  status = node["status"]

  if status && !VALID_STATUSES.include?(status)
    errors << "#{id}: invalid status #{status.inspect}"
  end

  progress = node["progress"]

  if progress
    current, target = progress.values_at("current", "target")

    unless current.is_a?(Numeric) && target.is_a?(Numeric)
      errors << "#{id}: progress current/target must be numeric"
    end

    if target.is_a?(Numeric) && target <= 0
      errors << "#{id}: progress target must be positive"
    end

    if current.is_a?(Numeric) &&
       target.is_a?(Numeric) &&
       current > target
      errors << "#{id}: progress current cannot exceed target"
    end
  end

  if status == "completed" && node["completed_at"].to_s.empty?
    errors << "#{id}: completed requires completed_at"
  end

  if node["completed_at"]
    completed_at =
      begin
        Date.parse(node["completed_at"].to_s)
      rescue StandardError
        nil
      end

    errors << "#{id}: invalid completed_at" unless completed_at

    if completed_at && completed_at > Date.today
      errors << "#{id}: future node cannot be completed"
    end
  end
end

ids.each do |id, records|
  if !id.empty? && records.length > 1
    files = records.map { |record| record["_file"] }.uniq
    errors << "duplicate node id: #{id} (#{files.join(", ")})"
  end
end

# ============================================================
# PREREQUISITES
# ============================================================

known = ids.keys.to_set

nodes.each do |node|
  Array(node["requires"]).each do |required|
    unless known.include?(required)
      errors << "#{node["id"]}: unknown prerequisite #{required}"
    end
  end
end

# ============================================================
# CIRCULAR DEPENDENCIES
# ============================================================

graph = nodes.to_h do |node|
  [node["id"], Array(node["requires"])]
end

visiting = Set.new
visited = Set.new

visit = lambda do |id, path|
  if visiting.include?(id)
    errors << "circular dependency: #{(path + [id]).join(" -> ")}"
    next
  end

  next if visited.include?(id)

  visiting.add(id)

  Array(graph[id]).each do |required|
    visit.call(required, path + [id])
  end

  visiting.delete(id)
  visited.add(id)
end

graph.keys.each do |id|
  visit.call(id, [])
end

# ============================================================
# CYCLES
# ============================================================

cycle_data = load_yaml(File.join(DATA, "cycles.yml"), errors)
cycles = Array(cycle_data["cycles"])
cycle_ids = cycles.map { |cycle| cycle["id"] }.to_set

unless cycle_ids.include?(cycle_data["current_cycle"])
  errors << "current_cycle is unknown"
end

# ============================================================
# WEEKS
# ============================================================

week_ids = Set.new
cycle_week_ids = Set.new

Dir[File.join(ROOT, "_becoming", "weeks", "*.md")].sort.each do |path|
  content = File.read(path, encoding: "UTF-8")
  front_matter = content.split(/^---\s*$\n?/, 3)[1]

  week =
    if front_matter
      YAML.safe_load(
        front_matter,
        permitted_classes: [Date],
        aliases: true
      )
    end

  unless week.is_a?(Hash) &&
         week["cycle_week"] &&
         week["start_date"] &&
         week["end_date"]

    errors << "#{path.delete_prefix(ROOT + "/")}: missing cycle_week/start_date/end_date"
    next
  end

  key = "#{week["cycle"]}:#{week["cycle_week"]}"

  if cycle_week_ids.include?(key)
    errors << "duplicate cycle week: #{key}"
  end

  cycle_week_ids.add(key)
  week_ids.add(key)

  unless cycle_ids.include?(week["cycle"])
    errors << "#{key}: unknown cycle #{week["cycle"]}"
  end

  start_date =
    begin
      Date.parse(week["start_date"].to_s)
    rescue StandardError
      nil
    end

  end_date =
    begin
      Date.parse(week["end_date"].to_s)
    rescue StandardError
      nil
    end

  errors << "#{key}: invalid dates" unless start_date && end_date

  if start_date && start_date.wday != 0
    errors << "#{key}: start_date must be Sunday"
  end

  if end_date && end_date.wday != 6
    errors << "#{key}: end_date must be Saturday"
  end

  if start_date && end_date && end_date != start_date + 6
    errors << "#{key}: week must span exactly seven days"
  end

  Array(week["active"]).each do |id|
    errors << "#{key}: unknown active node #{id}" unless known.include?(id)
  end

  Array(week["maintenance"]).each do |id|
    errors << "#{key}: unknown maintenance node #{id}" unless known.include?(id)
  end

  Array(week["quests"]).each do |quest|
    next unless quest.is_a?(Hash) && quest["node"]

    unless known.include?(quest["node"])
      errors << "#{key}: quest links unknown node #{quest["node"]}"
    end
  end
end

# ============================================================
# CURRENT WEEK
# ============================================================

current = load_yaml(File.join(DATA, "current.yml"), errors)

unless cycle_ids.include?(current["cycle"])
  errors << "current.yml: unknown cycle #{current["cycle"]}"
end

Array(current["quests"]).each do |quest|
  next unless quest.is_a?(Hash)

  unless known.include?(quest["node"])
    errors << "current.yml: quest #{quest["id"]} links unknown node #{quest["node"]}"
  end
end

# ============================================================
# RESULT
# ============================================================

if errors.empty?
  puts(
    "Becoming data valid: " \
    "#{nodes.length} nodes, " \
    "#{week_ids.length} weekly review(s), " \
    "#{cycles.length} cycle(s), " \
    "no dependency cycles."
  )

  exit 0
end

warn errors.map { |error| "ERROR: #{error}" }.join("\n")
exit 1
