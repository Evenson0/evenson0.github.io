#!/usr/bin/env python3
"""Create the next Sunday–Saturday Becoming week without dependencies."""
from datetime import date, timedelta
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
WEEKS = ROOT / "_becoming" / "weeks"
CYCLE_ID = "foundations-01"
CYCLE_START = date(2026, 8, 30)


def existing_records():
    records = []
    for path in WEEKS.glob("*.md"):
        text = path.read_text(encoding="utf-8")
        start = re.search(r"^start_date:\s*(\d{4}-\d{2}-\d{2})", text, re.M)
        number = re.search(r"^cycle_week:\s*(\d+)", text, re.M)
        if start and number:
            records.append((date.fromisoformat(start.group(1)), int(number.group(1)), path))
    return sorted(records)


def main() -> int:
    records = existing_records()
    if records:
        start = records[-1][0] + timedelta(days=7)
        cycle_week = records[-1][1] + 1
    else:
        today = date.today()
        start = today + timedelta(days=(6 - today.weekday()) % 7)
        cycle_week = ((start - CYCLE_START).days // 7) + 1
    end = start + timedelta(days=6)
    iso_year, iso_number, _ = start.isocalendar()
    destination = WEEKS / f"week-{cycle_week:02d}.md"
    if destination.exists():
        print(f"Not created: {destination.relative_to(ROOT)} already exists.", file=sys.stderr)
        return 1
    if "--dry-run" in sys.argv:
        print(f"Would create {destination.relative_to(ROOT)}: {start.isoformat()} through {end.isoformat()} (Sunday–Saturday)")
        return 0
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(TEMPLATE.format(
        cycle=CYCLE_ID, cycle_week=cycle_week, start=start.isoformat(), end=end.isoformat(),
        iso_week=f"{iso_year}-W{iso_number:02d}"
    ), encoding="utf-8")
    print(destination.relative_to(ROOT))
    return 0


TEMPLATE = """---
title: Week {cycle_week:02d}
title_fr: Semaine {cycle_week:02d}
cycle: {cycle}
cycle_week: {cycle_week}
start_date: {start}
end_date: {end}
iso_week: {iso_week}
status: planned
active: []
maintenance: []
quests: []
completed: []
evidence: []
---

## Weekly Review
### Progress
### Evidence
### Bottleneck
### Discovery
### Adjustment
### Roadmap change (optional)
"""

if __name__ == "__main__":
    raise SystemExit(main())
