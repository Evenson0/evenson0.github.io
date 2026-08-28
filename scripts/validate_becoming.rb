#!/usr/bin/env ruby
# frozen_string_literal: true

require "yaml"
require "date"
require "set"

ROOT = File.expand_path("..", __dir__)
DATA = File.join(ROOT, "_data", "becoming")
VALID_STATUSES = %w[locked available in_progress awaiting_result maintenance completed paused dormant planned].freeze
errors = []

def load_yaml(path, errors)
  YAML.safe_load(File.read(path, encoding: "UTF-8"), permitted_classes: [Date], aliases: true) || {}
rescue Psych::SyntaxError => e
  errors << "#{path.delete_prefix(ROOT + "/")}: invalid YAML (#{e.message.lines.first.strip})"
  {}
end

nodes = []
Dir[File.join(DATA, "trees", "*.yml")].sort.each do |path|
  data = load_yaml(path, errors)
  tree = data["tree"]
  errors << "#{path}: missing tree" if tree.to_s.empty?
  Array(data["nodes"]).each do |node|
    node = node.merge("tree" => tree, "_file" => path)
    nodes << node
  end
end
nodes.concat(Array(load_yaml(File.join(DATA, "achievements.yml"), errors)).map { |node| node.merge("tree" => "legendary", "_file" => "achievements.yml") })

ids = Hash.new { |hash, key| hash[key] = [] }
nodes.each do |node|
  id = node["id"].to_s
  errors << "#{node["_file"]}: node missing id" if id.empty?
  errors << "#{id}: missing title" if node["title"].to_s.empty?
  errors << "#{id}: missing type" if node["type"].to_s.empty?
  ids[id] << node
  status = node["status"]
  errors << "#{id}: invalid status #{status.inspect}" if status && !VALID_STATUSES.include?(status)
  progress = node["progress"]
  if progress
    current, target = progress.values_at("current", "target")
    errors << "#{id}: progress current/target must be numeric" unless current.is_a?(Numeric) && target.is_a?(Numeric)
    errors << "#{id}: progress target must be positive" if target.is_a?(Numeric) && target <= 0
    errors << "#{id}: progress current cannot exceed target" if current.is_a?(Numeric) && target.is_a?(Numeric) && current > target
  end
  errors << "#{id}: completed requires completed_at" if status == "completed" && node["completed_at"].to_s.empty?
  if status == "completed" && node["evidence_required"] && Array(node["evidence"]).empty?
    errors << "#{id}: completed evidence-required node has no evidence"
  end
  if node["completed_at"]
    completed_at = Date.parse(node["completed_at"].to_s) rescue nil
    errors << "#{id}: invalid completed_at" unless completed_at
    errors << "#{id}: future node cannot be completed" if completed_at && completed_at > Date.today
  end
end
ids.each { |id, records| errors << "duplicate node id: #{id}" if !id.empty? && records.length > 1 }

known = ids.keys.to_set
nodes.each do |node|
  Array(node["requires"]).each { |required| errors << "#{node["id"]}: unknown prerequisite #{required}" unless known.include?(required) }
end

graph = nodes.to_h { |node| [node["id"], Array(node["requires"])] }
visiting = Set.new
visited = Set.new
visit = lambda do |id, path|
  if visiting.include?(id)
    errors << "circular dependency: #{(path + [id]).join(" -> ")}"
    next
  end
  next if visited.include?(id)
  visiting.add(id)
  Array(graph[id]).each { |required| visit.call(required, path + [id]) }
  visiting.delete(id)
  visited.add(id)
end
graph.keys.each { |id| visit.call(id, []) }

cycle_data = load_yaml(File.join(DATA, "cycles.yml"), errors)
cycles = Array(cycle_data["cycles"])
cycle_ids = cycles.map { |cycle| cycle["id"] }.to_set
errors << "current_cycle is unknown" unless cycle_ids.include?(cycle_data["current_cycle"])

week_ids = Set.new
cycle_week_ids = Set.new
Dir[File.join(ROOT, "_becoming", "weeks", "*.md")].sort.each do |path|
  front_matter = File.read(path, encoding: "UTF-8").split(/^---\s*$\n?/, 3)[1]
  week = front_matter ? YAML.safe_load(front_matter, permitted_classes: [Date], aliases: true) : nil
  unless week.is_a?(Hash) && week["cycle_week"] && week["start_date"] && week["end_date"]
    errors << "#{path.delete_prefix(ROOT + "/")}: missing cycle_week/start_date/end_date"
    next
  end
  key = "#{week["cycle"]}:#{week["cycle_week"]}"
  errors << "duplicate cycle week: #{key}" if cycle_week_ids.include?(key)
  cycle_week_ids.add(key)
  week_ids.add(key)
  errors << "#{key}: unknown cycle #{week["cycle"]}" unless cycle_ids.include?(week["cycle"])
  start_date = Date.parse(week["start_date"].to_s) rescue nil
  end_date = Date.parse(week["end_date"].to_s) rescue nil
  errors << "#{key}: invalid dates" unless start_date && end_date
  errors << "#{key}: start_date must be Sunday" if start_date && start_date.wday != 0
  errors << "#{key}: end_date must be Saturday" if end_date && end_date.wday != 6
  errors << "#{key}: week must span exactly seven days" if start_date && end_date && end_date != start_date + 6
  Array(week["active"]).each { |id| errors << "#{key}: unknown active node #{id}" unless known.include?(id) }
  Array(week["maintenance"]).each { |id| errors << "#{key}: unknown maintenance node #{id}" unless known.include?(id) }
  Array(week["quests"]).each do |quest|
    next unless quest.is_a?(Hash) && quest["node"]
    errors << "#{key}: quest links unknown node #{quest["node"]}" unless known.include?(quest["node"])
  end
end

current = load_yaml(File.join(DATA, "current.yml"), errors)
errors << "current.yml: unknown cycle #{current["cycle"]}" unless cycle_ids.include?(current["cycle"])
Array(current["quests"]).each do |quest|
  errors << "current.yml: quest #{quest["id"]} links unknown node #{quest["node"]}" unless known.include?(quest["node"])
end

if errors.empty?
  puts "Becoming data valid: #{nodes.length} nodes, #{week_ids.length} weekly review(s), #{cycles.length} cycle(s), no dependency cycles."
  exit 0
end
warn errors.map { |error| "ERROR: #{error}" }.join("\n")
exit 1
