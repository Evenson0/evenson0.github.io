# Becoming

`/becoming/` is a long-term, evidence-based progression system.

It connects three levels of planning:

1. what should I do today?
2. what should I accomplish this week?
3. where does this work lead over the long term?

The Roadmap gives direction. The weekly files define priorities. The daily plan turns those priorities into concrete actions.

Git-tracked YAML and Markdown remain the source of truth. JavaScript renders and navigates the data, but it does not define the progression model.

Before changing Becoming, read `BECOMING_HANDOFF.md` first.

---

## Core principles

Becoming is not a generic habit tracker.

Daily routines may be tracked, but they serve larger trajectories in actuarial work, research, mathematics, writing, English, physical development, career, capital, and software building.

Important rules:

- Do not mark an important milestone complete without real evidence.
- Do not infer exam results, publications, contributions, certifications, or other achievements.
- Plans are not accomplishments.
- A checked daily task does not automatically complete a Roadmap node.
- Do not change the architecture simply to modernize it.
- A valid maintenance review may conclude that no important change is needed.

The general rule is:

> No evidence -> no permanent unlock.

This principle prevents the assistant from inventing achievements. Becoming
is also Evenson's personal journal and to-do list: he decides what he has
completed. Do not require public evidence, add mandatory proof validation,
or interpret an empty repository review as evidence that no work occurred.

---

## Visible pages

Becoming has two main visible pages:

```text
/becoming/
/becoming/roadmap/
```

### `/becoming/`

The weekly page contains:

- the current cycle;
- week navigation;
- weekly objectives;
- a daily plan for the selected week;
- locally checkable daily tasks;
- the current permanent physical protocol.

### `/becoming/roadmap/`

The Roadmap contains:

- progression domains;
- nodes and milestones;
- prerequisites;
- statuses;
- completion criteria;
- unlock relationships;
- long-term achievements.

The Roadmap is not a daily task list.

---

## Architecture

### Domains

Registered in:

```text
_data/becoming/domains.yml
```

Current domains include:

```text
research
actuarial
mathematics
lean
writing
career
building
english
capital
physical
```

A domain may be active, in maintenance, or dormant. The system is intentionally designed so that not every domain must be actively pursued at the same time.

---

### Progression trees

Each domain has a tree in:

```text
_data/becoming/trees/
```

Important examples:

```text
_data/becoming/trees/actuarial.yml
_data/becoming/trees/research.yml
_data/becoming/trees/physical.yml
_data/becoming/trees/english.yml
_data/becoming/trees/lean.yml
```

A typical node may contain:

```yaml
- id: example-node
  title: Example Node
  title_fr: Exemple
  type: skill
  status: in_progress
  requires:
    - prerequisite-node
  description: What this node represents.
  description_fr: Ce que représente ce nœud.
  unlock_requirements:
    - Concrete completion condition
```

Only use explicit states when they represent real workflow state. Availability and locking should normally follow prerequisites.

---

## Node status and unlock logic

Supported statuses include:

```text
locked
available
in_progress
awaiting_result
maintenance
completed
paused
dormant
planned
```

`requires` contains node IDs and may reference nodes in other trees.

General behavior:

- A node with no prerequisites is available unless explicitly placed in another workflow state.
- A node with prerequisites becomes available only when all required nodes are completed.
- `completed` is intentional and should not be inferred from a daily checkbox.
- A completed node should have a valid `completed_at` date when the schema requires it.
- `in_progress`, `maintenance`, `paused`, `dormant`, and `awaiting_result` are explicit workflow states.

---

## Cycles

Cycles are defined in:

```text
_data/becoming/cycles.yml
```

The current cycle is:

```text
foundations-01
```

Current dates:

```text
2026-11-02 -> 2027-01-24
```

Its principal active domains are:

```text
actuarial
research
physical
```

Other domains may remain in maintenance.

A twelve-week cycle is a planning window, not the lifetime of Becoming.

At the end of a cycle:

1. review what actually happened;
2. identify what worked and what failed;
3. decide the next priorities;
4. create or update the next cycle;
5. update `current_cycle`;
6. then create the next weekly records.

Do not mechanically extend `foundations-01` beyond its end date.

---

## Weekly files

Weekly records live in:

```text
_becoming/weeks/
```

The current cycle uses:

```text
week-01.md
week-02.md
week-03.md
week-04.md
week-05.md
week-06.md
week-07.md
week-08.md
week-09.md
week-10.md
week-11.md
week-12.md
```

Each week runs exactly Monday through Sunday.

General front matter:

```yaml
---
title:
title_fr:

cycle:
cycle_week:

start_date:
end_date:

status:

active:
maintenance:

quests:

days:

completed:
---
```

The weekly file contains both strategic objectives and the daily execution plan.

Do not create seven separate files for seven days.

---

## Weekly objectives

`quests:` contains the main weekly objectives.

Example:

```yaml
quests:

  - domain: actuarial
    node: actuarial-example
    task: Complete one substantial actuarial objective.
    task_fr: Compléter un objectif actuariel substantiel.

    completion:
      - First concrete criterion
      - Second concrete criterion
```

A quest should be connected to a valid node whenever it represents Roadmap progress.

Keep weekly objectives concrete. Prefer actions, quantities, deliverables, or clearly defined study outcomes over grandiose labels.

---

## Daily plan

Each weekly file includes a `days:` list.

Example:

```yaml
days:

  - date: 2026-10-04
    weekday: sunday
    title: Example Day
    title_fr: Journée exemple

    tasks:

      - domain: actuarial
        node: actuarial-example
        time: 90 min
        text: Complete a focused problem set.
        text_fr: Compléter une série ciblée d'exercices.
```

Each week should contain exactly seven dates matching the Monday-to-Sunday range.

Daily tasks may contain:

```yaml
domain:
node:
time:
text:
text_fr:
```

Tasks may also be general Becoming actions without a domain or node when appropriate, such as the weekly review.

---

## Daily interface

The daily interface is implemented by:

```text
_includes/becoming/daily.html
assets/js/becoming-daily.js
assets/css/becoming-daily.scss
```

It uses:

```text
site.becoming
site.data.becoming.domains
site.data.becoming.physical_protocol
```

The daily section follows the week selected in the main weekly interface.

It must not maintain an independent week selection model.

---

## Daily checkboxes

Daily tasks are checkable in the browser.

Completion state is stored locally with `localStorage`.

The daily system uses keys based on the date and task identity.

This local state means only:

> this daily action was checked as done in this browser.

It does not:

- edit GitHub;
- change the YAML source;
- complete a Roadmap node;
- prove that a permanent milestone was achieved.

This distinction must remain intact.

---

## Physical protocol

The permanent physical baseline is defined separately in:

```text
_data/becoming/physical_protocol.yml
```

This avoids repeating the same permanent routine inside every day of every weekly file.

The current protocol contains:

```text
morning
strength
movement
evening
```

The daily baseline includes the morning routine, daily movement, and evening routine.

The strength session is selected according to the weekday.

The current strength program is based on:

```text
Arnold Volume Training - Variation 2
```

The protocol is the current operating system, not a permanent law. Change it when evidence suggests the system should change, not merely to create novelty.

Current protocol images are stored in:

```text
assets/images/becoming/physical/routine-du-matin.png
assets/images/becoming/physical/routine-du-soir.png
```

---

## Current actuarial planning logic

P is the sole actuarial study priority. The appointment is **January 16, 2027**, as provided by Evenson. FM is removed from this cycle’s weekly schedule and current quests; its long-term nodes remain, without a target date.

Weeks 1–5: diagnostic and foundations. Weeks 6–10: cumulative practice, timed sets and mocks. Week 11: light final review and the January 16 exam. Week 12: debrief without assuming a result or automatically restarting FM.

November 7 is optional, with no catch-up debt. Secondary tasks on exam day are optional too. The physical protocol is unchanged and should be adapted to actual availability.

---

## Current research direction

The active research program is centered on P&C pricing.

The current progression includes:

```text
GLM foundations
GLM workflow
model form
refinement
validation
reproduction
flexible alternatives
ANAM
interpretability
fairness and calibration
research-question formulation
```

The source is primarily:

```text
_data/becoming/trees/research.yml
```

Research should not become a reading checklist.

Serious reading should progressively lead to some combination of:

- understanding;
- structured notes;
- reproduction;
- criticism;
- comparison;
- experiment;
- code;
- research questions;
- synthesis;
- project;
- article.

Future major research questions should emerge from previous work instead of being invented years in advance.

---

## Language support

The interface supports:

```text
FR
EN
```

The shared language preference is stored under:

```text
becoming.language
```

Common bilingual fields include:

```yaml
title / title_fr
description / description_fr
task / task_fr
text / text_fr
```

The main interface and daily interface must stay synchronized.

Official bibliographic titles may remain in their original language.

---

## Current-week pointers

The small current-state record is:

```text
_data/becoming/current.yml
```

It should remain a concise pointer to the current cycle and current areas of focus.

Do not duplicate the entire weekly plan inside `current.yml`.

The detailed plan belongs in `_becoming/weeks/`.

---

## Main rendering files

### Pages

```text
_pages/becoming.md
_pages/becoming-roadmap.md
```

### Includes

```text
_includes/becoming/app.html
_includes/becoming/daily.html
```

### JavaScript

```text
assets/js/becoming.js
assets/js/becoming-daily.js
```

### CSS

```text
assets/css/becoming.scss
assets/css/becoming-daily.scss
```

### Data

```text
_data/becoming/domains.yml
_data/becoming/cycles.yml
_data/becoming/current.yml
_data/becoming/achievements.yml
_data/becoming/physical_protocol.yml
_data/becoming/trees/
```

### Weekly records

```text
_becoming/weeks/
```

### Maintenance scripts

```text
scripts/new_becoming_week.py
scripts/validate_becoming.rb
```

---

## Creating future weeks

Run:

```bash
python3 scripts/new_becoming_week.py
```

The generator creates the next week inside the current cycle and includes seven day records.

Use dry-run when useful:

```bash
python3 scripts/new_becoming_week.py --dry-run
```

The generator should refuse to create a week that extends beyond the current cycle.

When the cycle is over, define the next cycle before generating another week.

---

## Weekly review

Each weekly file ends with:

```markdown
## Weekly Review

### Progress

### Bottleneck

### Discovery

### Adjustment

### Roadmap Change
```

Use this review to decide whether:

- the workload was realistic;
- priorities should move;
- an assumption was wrong;
- a task should be postponed;
- a node status should change;
- the Roadmap genuinely needs adjustment.

Do not change the Roadmap every week merely to create visible movement.

---

## Validation

Run:

```bash
ruby scripts/validate_becoming.rb
```

The validator checks the Becoming data model, including:

- domains;
- tree IDs;
- duplicate node IDs;
- statuses;
- prerequisites;
- dependency cycles;
- cycle dates;
- weekly dates;
- active and maintenance node references;
- quest references;
- daily plans;
- exactly seven days per week;
- weekday/date consistency;
- daily node and domain references;
- continuity between weeks;
- cycle boundaries;
- physical protocol references.

Also validate JavaScript syntax when JavaScript changes:

```bash
node --check assets/js/becoming.js
node --check assets/js/becoming-daily.js
```

A successful Jekyll build is necessary but does not prove that browser interactions work correctly.

---

## Browser verification

After interface changes, verify `/becoming/` manually:

- correct selected week;
- week navigation;
- weekly titles and dates;
- quests;
- daily day navigation;
- daily tasks;
- checkbox behavior;
- checkbox persistence after refresh;
- physical protocol;
- physical images;
- FR / EN synchronization;
- mobile layout.

Verify `/becoming/roadmap/`:

- domain selection;
- node rendering;
- states;
- prerequisites;
- detail panel;
- FR / EN;
- mobile layout.

---

## Privacy

The repository may be public.

An unpublished page is not private.

Do not commit unnecessary private information such as:

- detailed current personal measurements;
- exact private financial values;
- private journals;
- confidential exam information;
- private career notes;
- other sensitive records.

A public progression structure does not require every current measurement to be public.

Never invent missing private data.

---

## Visual direction

The intended feel is:

- academic laboratory;
- serious strategy interface;
- personal progression map;
- modern but not gimmicky;
- dense but readable;
- mobile-friendly.

Avoid:

- artificial XP;
- confetti;
- mascots;
- sounds;
- pointless badges;
- excessive animation;
- infantilizing gamification.

Preserve:

- strong information hierarchy;
- restrained motion;
- dark-mode support;
- `prefers-reduced-motion`;
- good touch interaction;
- clear distinction between daily action and long-term progression.

---

## Anti-churn rule

Before changing Becoming, ask:

1. What concrete problem exists?
2. Does this change solve it?
3. Is there already a mechanism that solves it?
4. Will the system become clearer or merely different?
5. How many additional files must change only to support this idea?

If there is no strong reason to change something, leave it alone.

---

## Recommended maintenance workflow

1. Read `BECOMING_HANDOFF.md`.
2. Read this file.
3. Inspect the actual current implementation.
4. Identify real problems.
5. Change the smallest reasonable number of files.
6. Run validation.
7. Check the deployed site.
8. Document structural changes.

For GitHub Web editing, complete-file replacements are often safer than fragmented patches.

Do not modify the repository automatically unless explicitly asked.

---

## Current state summary

Becoming currently includes:

- a long-term Roadmap;
- one active twelve-week cycle;
- twelve weekly records;
- a seven-day plan inside each week;
- browser-checkable daily tasks;
- a separate permanent physical protocol;
- a P-focused plan through January 16, 2027;
- an active P&C pricing research path;
- bilingual FR / EN rendering;
- a structural validator;
- a future-week generator.

The current cycle ends on:

```text
2027-01-24
```

The next cycle should be designed from actual evidence gathered during this one.

## Calendar and reading update — 2026-11-02

The twelve-week cycle runs November 2, 2026–January 24, 2027. Sunday reviews remain. Exam P is January 16, 2027; FM is removed from this cycle. No completion or result is inferred.

The existing activities and reading sequence are preserved: Week 1 Adieu (November 2–8), Week 2 J’irai cracher sur vos tombes (November 9–15), Week 3 Facino Cane (November 16–22). Later reading choices remain as already planned. The Intelligent Investor keeps its 31 portions, November 2–December 2, including the intended commentary and appendices. These are planning targets, not claims of completed reading. Resume from the actual reading position when needed, without catch-up debt.
