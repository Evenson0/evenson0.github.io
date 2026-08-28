# Becoming

`/becoming` is a long-term, evidence-based progression system. It answers three questions: what am I trying to become, what must I prove, and what should I work on this week? Git-tracked YAML and Markdown are the record; JavaScript only renders and navigates it.

## Architecture

- `_pages/becoming.md` controls publication and the `/becoming/` permalink.
- `_data/becoming/domains.yml` registers domains and their ACTIVE / MAINTENANCE / DORMANT strategy.
- `_data/becoming/trees/*.yml` defines nodes. Rendering is generic; a new tree does not require HTML or JavaScript changes.
- `_data/becoming/achievements.yml` contains rare cross-tree achievements.
- `_data/becoming/current.yml` is the small current-week command-center record.
- `_becoming/weeks/*.md` is the chronological weekly journal collection.
- `_includes/becoming/app.html`, `assets/css/becoming.scss`, and `assets/js/becoming.js` render the interface.
- `scripts/validate_becoming.rb` validates IDs, fields, prerequisites, cycles, statuses, progress, and weekly records.
- `scripts/new_becoming_week.py` creates the current ISO-week review without overwriting one.

The page uses the site's existing Jekyll build, typography, theme variables, masthead, footer, and `relative_url` handling. Its graph is dependency-free SVG; the complete HTML list is the mobile and screen-reader representation.

## Weekly workflow

1. During Cycle 01, edit the already-created `week-01.md` through `week-12.md`. For a later missing week, run `python3 scripts/new_becoming_week.py`; it creates the next Sunday–Saturday record.
2. Edit the created `_becoming/weeks/YYYY-Www.md`: choose a few concrete quests, record evidence, and answer only the useful reflection prompts.
3. Keep the short overview synchronized in `_data/becoming/current.yml`.
4. Change a node's explicit `status` only when needed. Availability and locking normally follow prerequisites automatically.
5. Run `ruby scripts/validate_becoming.rb` and preview with `bundle exec jekyll serve --unpublished`.

The planning principle is approximately three major ACTIVE domains, not a technical limit.

## Node schema

Only `id`, `title`, and `type` are required. Common optional fields are:

```yaml
- id: research-example
  title: Example investigation
  short_title: Example
  type: project
  status: in_progress
  priority: high
  description: What completion means.
  why: Why this work matters.
  requires: [research-foundations]
  unlock_requirements:
    - Reproducible result
    - Technical note
  progress: { mode: count, current: 2, target: 5, unit: results }
  target_date: 2027-03
  started_at: 2026-08-27
  completed_at:
  next_actions: [Run the robustness check]
  evidence: []
  resources: []
  tags: [interpretability]
  notes:
```

Valid statuses are `locked`, `available`, `in_progress`, `maintenance`, `completed`, `paused`, and `dormant`. Avoid explicit `locked`/`available` where dependency computation can decide. A completed node requires `completed_at`.

## Unlock logic

`requires` contains node IDs and may cross trees. A node with no prerequisites is available unless explicitly set otherwise. A node becomes available only when every prerequisite is completed. Explicit workflow states (`in_progress`, `maintenance`, `paused`, `dormant`) are respected. `completed` is never inferred: it requires an intentional record and completion date. This enforces “No evidence → no unlock.”

Example completion:

```yaml
- id: actuarial-fm
  title: Exam 2 / Financial Mathematics
  type: exam
  status: completed
  completed_at: 2026-10-31
  evidence:
    - type: exam_result
      title: Official FM result
      date: 2026-10-31
      visibility: private
```

For private evidence, put the status and evidence override in `private.yml`, not the tracked tree.

## Evidence

Evidence belongs on the node it supports:

```yaml
evidence:
  - type: repository
    title: Reproducible interpretability study
    date: 2026-09-12
    url: https://github.com/example/project
    visibility: public
  - type: external_review
    title: Reviewer report
    date: 2026-10-02
    visibility: private
```

Research outputs should distinguish `draft`, `working_paper`, `preprint`, `submitted`, `accepted`, `published`, and `peer_reviewed`. Do not call a draft published.

## Add a research paper

Add a node to `_data/becoming/trees/research.yml`, connect it with `requires`, define quality criteria, and attach the canonical output as evidence. Future research topics should remain “topic to emerge” until prior work produces a serious question.

## Add a node or tree

To add a node, append it to the relevant tree file and run validation. To add a tree:

1. Add its registry entry to `domains.yml`.
2. Create `_data/becoming/trees/<id>.yml` with `tree: <id>` and a `nodes` list.
3. Run validation. No rendering edit is required.

Nodes can be archived without deletion by using `status: dormant` and an `archived` tag or note. Target dates and branches are ordinary editable data.

## Privacy

An unlinked or `noindex` page is not private. This repository may be public.

Copy `_data/becoming/private.example.yml` to `_data/becoming/private.yml`. The destination is ignored by Git and is merged into the browser data only in local builds. Put exact assets, body measurements, private reflections, sensitive career notes, and private evidence there. Never deploy a build created with that local file present: generated HTML would contain its data. Jekyll offers no authentication or server-side privacy.

Check before publishing:

```bash
git check-ignore _data/becoming/private.yml
git status --short
```

## Publication

The page is initially absent from normal builds because `_pages/becoming.md` has `published: false`; it is also absent from navigation and has `noindex`. For local preview use `--unpublished`.

To publish later:

1. Ensure `_data/becoming/private.yml` is absent from the deployment environment.
2. Set `published: true` in `_pages/becoming.md`.
3. Set `enabled: true` and, when indexing is wanted, `noindex: false` in `_data/becoming/settings.yml`.
4. Optionally add `/becoming/` to `_data/navigation.yml`.
5. Build and validate before pushing.

Remember that all committed source data remains visible on GitHub even if the page is unpublished.

## Validation and preview

```bash
ruby scripts/validate_becoming.rb
bundle exec jekyll build --unpublished
bundle exec jekyll serve --unpublished
```

The credential source date is stored with the Actuarial tree. Recheck the official CAS pathway when requirements change. Lean contribution notes link to current mathlib guidance; understand all submitted formalizations and follow the community's current AI disclosure rules.
