# Activities — mentoring and history

Activities (`/activities/`) connects concrete challenges to Becoming and List 100. It is a personal record of choices, attempts and lessons, not a second achievement validator. The section is hidden from the header menu but remains accessible through its direct URL, like List 100 and Memories.

## Files

- `_data/activities/config.yml`: six horizons, proposal quotas, current mentor note and goal references.
- `_data/activities/challenges.yml`: permanent IDs, dates, challenge variants, effort, success criteria and parent goals.
- `_data/activities/events.yml`: append-only public history. The last event gives the published status.
- `_pages/activities.md`, `assets/css/activities.css`, `assets/js/activities.js`: page and interface.

Read `BECOMING_HANDOFF.md`, then `BECOMING.md`, the current Becoming week, List 100 and these three data files before creating a new batch. Work on the current remote head and preserve unrelated changes. Do not restart or shift Becoming as part of this routine.

## Cadence and capacity

Default: up to 3 weekly proposals, 2 per month, 1 per rolling three-month period, 1 per meteorological season in Montréal (Mar–May, Jun–Aug, Sep–Nov, Dec–Feb), 1 per rolling six months and 1 per rolling year. First rolling periods begin November 3, 2026. These are proposal ceilings, not mandatory workloads.

A single weekly Sunday-evening review handles all horizons; propose the next weekly batch and any longer period beginning before the following review. Review longer horizons at their actual end dates. Do not replace a long project every week. Period IDs distinguish batches; each challenge ID is permanent. Repeated runs must not duplicate a batch.

Do not accumulate weekly proposals indefinitely when there is no reply. If a previous weekly batch is still unanswered, invite a check-in and offer one small next action in the conversation instead of creating three more records. Keep accepted/in-progress weekly work to at most three unless Evenson expressly chooses otherwise. Reuse existing Becoming sessions; report additional workload honestly. Before P on January 16, 2027, avoid competing new study programs and do not reintroduce FM. November 7, 2026 is optional; do not publish its personal context.

Challenges must span intellectual/professional progress and lived experience: learning, writing, speaking, exploration, relationships or contribution as appropriate to the user's goals. Vary difficulty while keeping steps feasible. Define a short version, a more ambitious version and a concrete outcome within the user's control. Do not promise acceptance by a university, journal, employer, audience or third party. Verify current opportunities and dates with primary sources before proposing specific external events.

A weekly challenge may contribute to a monthly or longer one through `parents`. Keep the graph acyclic. Do not add up the effort of a shared step multiple times. Adjust dates through an explicit user decision, preserving the original event trail.

## Replies and publication

The user may accept, start, complete, decline, defer or stop a challenge. Append an event with a new stable ID, challenge ID, ISO local date, status, source `user`, and a concise bilingual `note`. The user's own report is sufficient; never demand external proof. Do not infer failure from silence or completion from a deadline. Status values: `proposed`, `accepted`, `in_progress`, `completed`, `declined`, `deferred`, `stopped`. The first event is always a mentor `proposed` event.

Preserve prior events and all finished, declined or stopped challenges. Log a correction explicitly rather than rewriting history. If dates change, append the reason at an appropriate public level and update the challenge's `due`; never erase the original proposal. Do not mark a Becoming node or List 100 goal complete automatically from an Activities milestone.

The repository is public. Publish only challenge decisions and a short, appropriate summary of lessons. Do not copy sensitive personal circumstances, confidential employer information, recordings or full private notes. If a report contains such details, retain only its non-sensitive status and a neutral summary. No emails or messages to other people are sent by this workflow.

Browser controls save drafts on the current device under `evenson.activities.drafts.v1`. They never write public history or mark published counters complete. The user copies the report to the conversation; update the repository from that report. A draft is not a confirmed report until the user transmits it. Keep this distinction clear in the interface.

## Weekly delivery

Read actual history, ask briefly about unresolved choices, provide a candid observation and a small next step, and publish appropriate new proposals to this section. Include IDs, effort and the Activities link in the conversational check-in. Update `config.mentor_note` so the public page reflects the latest review rather than permanently saying “first week.” For a quiet week, maintain the current proposals and ask for a short report; do not invent outcomes or reset the calendar.

All new content has French and English text. Use dated records, stable IDs and concrete wording. Check before publishing:

```bash
python3 scripts/validate_activities.py
node --check assets/js/activities.js
node --test tests/activities.test.cjs
git diff --check
```

Check the GitHub Pages build. For interface edits, also check filtering, history, draft persistence, report copying, deep links, French/English, dark/light and a narrow viewport. JavaScript stays in external files to preserve it through the existing HTML compressor.
