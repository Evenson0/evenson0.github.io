#!/usr/bin/env python3
"""Create the next Sunday–Saturday Becoming week."""

from datetime import date, timedelta
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
WEEKS = ROOT / "_becoming" / "weeks"
CYCLES = ROOT / "_data" / "becoming" / "cycles.yml"


def current_cycle_id() -> str:
    text = CYCLES.read_text(encoding="utf-8")
    match = re.search(r"^current_cycle:\s*(\S+)", text, re.M)
    if not match:
        raise RuntimeError("current_cycle not found in cycles.yml")
    return match.group(1)


def existing_records():
    records = []

    for path in WEEKS.glob("week-*.md"):
        text = path.read_text(encoding="utf-8")

        start = re.search(
            r"^start_date:\s*(\d{4}-\d{2}-\d{2})",
            text,
            re.M,
        )

        number = re.search(
            r"^cycle_week:\s*(\d+)",
            text,
            re.M,
        )

        if start and number:
            records.append(
                (
                    date.fromisoformat(start.group(1)),
                    int(number.group(1)),
                    path,
                )
            )

    return sorted(records)


def main() -> int:
    records = existing_records()

    if records:
        start = records[-1][0] + timedelta(days=7)
        cycle_week = records[-1][1] + 1
    else:
        today = date.today()
        start = today + timedelta(days=(6 - today.weekday()) % 7)
        cycle_week = 1

    end = start + timedelta(days=6)
    cycle = current_cycle_id()

    destination = WEEKS / f"week-{cycle_week:02d}.md"

    if destination.exists():
        print(
            f"Not created: {destination.relative_to(ROOT)} already exists.",
            file=sys.stderr,
        )
        return 1

    if "--dry-run" in sys.argv:
        print(
            f"Would create {destination.relative_to(ROOT)}: "
            f"{start.isoformat()} through {end.isoformat()}"
        )
        return 0

    destination.parent.mkdir(parents=True, exist_ok=True)

    destination.write_text(
        TEMPLATE.format(
            cycle=cycle,
            cycle_week=cycle_week,
            start=start.isoformat(),
            end=end.isoformat(),
        ),
        encoding="utf-8",
    )

    print(destination.relative_to(ROOT))
    return 0


TEMPLATE = """---
title: Week {cycle_week:02d}
title_fr: Semaine {cycle_week:02d}

cycle: {cycle}
cycle_week: {cycle_week}

start_date: {start}
end_date: {end}

status: planned

active: []
maintenance: []

quests: []

completed: []
---

## Weekly Review

### Progress

### Bottleneck

### Discovery

### Adjustment

### Roadmap Change
"""


if __name__ == "__main__":
    raise SystemExit(main())
