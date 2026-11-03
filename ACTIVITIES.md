# Activities — mentoring and history

Activities (`/activities/`) connects concrete challenges to Becoming and List 100. It is a personal record of choices, attempts and lessons, not a second achievement validator. The section is hidden from the header menu but remains accessible through its direct URL, like List 100 and Memories.

## Files

- `_data/activities/config.yml`: six horizons, proposal quotas, current mentor note and goal references.
- `_data/activities/challenges.yml`: permanent IDs, dates, challenge variants, effort, success criteria and parent goals.
- `_data/activities/events.yml`: append-only public history. The last event gives the published status.
- `_pages/activities.md`, `assets/css/activities.css`, `assets/js/activities.js`: page and interface.

Read `BECOMING_HANDOFF.md`, then `BECOMING.md`, the current Becoming week, List 100 and these three data files before creating a new batch. Work on the current remote head and preserve unrelated changes. Do not restart or shift Becoming as part of this routine.

## Cadence and capacity

Current proposal ceilings: up to **3 per week, 4 per month, 3 per rolling quarter, 1 per meteorological season in Montréal (Mar–May, Jun–Aug, Sep–Nov, Dec–Feb), 2 per rolling six months, and 1 per rolling year**. These are capacity limits for varied choices, not a workload to complete. First rolling periods begin November 3, 2026. These are proposal ceilings, not mandatory workloads.

A single weekly Sunday-evening review handles all horizons; propose the next weekly batch and any longer period beginning before the following review. Review longer horizons at their actual end dates. Do not replace a long project every week. Period IDs distinguish batches; each challenge ID is permanent. Repeated runs must not duplicate a batch.

Do not accumulate weekly proposals indefinitely when there is no reply. If a previous weekly batch is still unanswered, invite a check-in and offer one small next action in the conversation instead of creating three more records. Recommend **one meaningful weekly challenge** at a time, and do not stack new obligations unless Evenson explicitly elects them. Reuse existing Becoming sessions; report additional workload honestly. Before P on January 16, 2027, avoid competing new study programs and do not reintroduce FM. November 7, 2026 is optional; do not publish its personal context.

Challenges must rotate across **math/actuarial practice, research, mobile/web building, original writing without generative AI when specified, communication/English, X audience growth, ethical read-only analytics, progressive running and fitness, hiking and nature, travel and new experiences**. A measurable output may be 100 carefully solved SOA sample questions, a tested mobile app, a 5 km run/walk, a technical talk, a signed essay, a non-spam X analytics tool or a trip. Do not force all these into the same week; choose horizons by scope. Vary difficulty while keeping steps feasible. Define a short version, a more ambitious version and a concrete outcome within the user's control. Do not promise acceptance by a university, journal, employer, audience or third party. Verify current opportunities and dates with primary sources before proposing specific external events.

A weekly challenge may contribute to a monthly or longer one through `parents`. Keep the graph acyclic. Do not add up the effort of a shared step multiple times. Adjust dates through an explicit user decision, preserving the original event trail.

## Replies and publication

The user may accept, start, complete, decline, defer or stop a challenge. Append an event with a new stable ID, challenge ID, ISO local date, status, source `user`, and a concise bilingual `note`. The user's own report is sufficient; never demand external proof. Do not infer failure from silence or completion from a deadline. Status values: `proposed`, `accepted`, `in_progress`, `completed`, `declined`, `deferred`, `stopped`. The first event is always a mentor `proposed` event.

Preserve prior events and all finished, declined or stopped challenges. Log a correction explicitly rather than rewriting history. If dates change, append the reason at an appropriate public level and update the challenge's `due`; never erase the original proposal. Do not mark a Becoming node or List 100 goal complete automatically from an Activities milestone.

The repository is public. Publish only challenge decisions and a short, appropriate summary of lessons. Do not copy sensitive personal circumstances, confidential employer information, recordings or full private notes. If a report contains such details, retain only its non-sensitive status and a neutral summary. No emails or messages to other people are sent by this workflow.

Browser controls save current drafts on the device under `evenson.activities.drafts.v2` (the v1 key remains untouched, preventing notes on superseded proposals from being mislabeled as responses to revised challenges). They never write public history or mark published counters complete. The user copies the report to the conversation; update the repository from that report. A draft is not a confirmed report until the user transmits it. Keep this distinction clear in the interface.

## Ambition rule (2026-11-03)

Activities is not an exam drill or habit tracker. Offer challenging and memorable achievements: original work subject to critique, real public speaking, a meaningful new experience or a contribution that builds lasting pride. Avoid trivial quantity targets. Keep challenges realistic, voluntary and respectful of current commitments.

## 2026-11-03 mentoring revision

Evenson requested a more intuitive page and more exciting **real-world and project-oriented** challenge catalog. Current records now deliberately include P sample solutions, mobile P practice, an original no-AI essay, ethical X analysis and content experiments, 1/5/10 km running, a Mont-Saint-Bruno hike, a US experience, public speaking, open-source building and a research manuscript. Those are **proposals**, not commitments or achievements. The linked progression should re-use work when possible and never imply progress from silence.

## Weekly delivery

Read actual history, ask briefly about unresolved choices, provide a candid observation and a small next step, and publish appropriate new proposals to this section. Include IDs, effort and the Activities link in the conversational check-in. Update `config.mentor_note` so the public page reflects the latest review rather than permanently saying “first week.” For a quiet week, maintain the current proposals and ask for a short report; do not invent outcomes or reset the calendar.

All new content has French and English text plus a category chosen from `config.categories`. The simple UI has **Cette semaine**, **Explorer les défis** (horizon and category filtering) and **Mon carnet** (decisions by default, proposals in extended history). Each card has a one-click **Je le tente** that saves a local draft but never publishes a status; the copy-and-send step remains explicit. Keep the page welcoming and usable with keyboard, narrow screens, dark/light themes, and no unsolicited notifications.

SOA-specific content must link to permitted official materials, with original explanations; do not republish copyrighted sample question texts or solutions without permission. Unofficial tools must not imply Society of Actuaries endorsement. X monitoring must be read-only and use authorized data exports or permitted API access; never auto-post, auto-follow, auto-reply, scrape unlawfully or expose tokens. Running challenges must allow gradual and appropriate progression with walking intervals and safe weather alternatives. Travel challenges depend on budget, documentation and real user choice.

All new content has French and English text. Use dated records, stable IDs and concrete wording. Check before publishing:

```bash
python3 scripts/validate_activities.py
node --check assets/js/activities.js
node --test tests/activities.test.cjs
git diff --check
```

Check the GitHub Pages build. For interface edits, also check filtering, history, draft persistence, report copying, deep links, French/English, dark/light and a narrow viewport. JavaScript stays in external files to preserve it through the existing HTML compressor.
