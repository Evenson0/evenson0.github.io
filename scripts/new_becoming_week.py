#!/usr/bin/env python3
"""Create the next Monday-Sunday Becoming week inside the current cycle."""

from datetime import date, timedelta
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
WEEKS = ROOT / "_becoming" / "weeks"
CYCLES = ROOT / "_data" / "becoming" / "cycles.yml"


def current_cycle() -> tuple[str, date, date]:
    text = CYCLES.read_text(encoding="utf-8")

    current_match = re.search(
        r"^current_cycle:\s*(\S+)",
        text,
        re.M,
    )

    if not current_match:
        raise RuntimeError(
            "current_cycle not found in cycles.yml"
        )

    cycle_id = current_match.group(1)

    block_match = re.search(
        rf"(?ms)^\s*-\s+id:\s*{re.escape(cycle_id)}\s*$"
        rf"(.*?)(?=^\s*-\s+id:\s*\S+\s*$|\Z)",
        text,
    )

    if not block_match:
        raise RuntimeError(
            f"Cycle {cycle_id!r} not found in cycles.yml"
        )

    block = block_match.group(0)

    start_match = re.search(
        r"^\s*start_date:\s*(\d{4}-\d{2}-\d{2})",
        block,
        re.M,
    )

    end_match = re.search(
        r"^\s*end_date:\s*(\d{4}-\d{2}-\d{2})",
        block,
        re.M,
    )

    if not start_match or not end_match:
        raise RuntimeError(
            f"Cycle {cycle_id!r} must define "
            "start_date and end_date"
        )

    return (
        cycle_id,
        date.fromisoformat(
            start_match.group(1)
        ),
        date.fromisoformat(
            end_match.group(1)
        ),
    )


def existing_records(
    cycle_id: str,
):
    records = []

    for path in WEEKS.glob(
        "week-*.md"
    ):
        text = path.read_text(
            encoding="utf-8"
        )

        cycle = re.search(
            r"^cycle:\s*(\S+)",
            text,
            re.M,
        )

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

        if (
            cycle
            and cycle.group(1) == cycle_id
            and start
            and number
        ):
            records.append(
                (
                    date.fromisoformat(
                        start.group(1)
                    ),
                    int(
                        number.group(1)
                    ),
                    path,
                )
            )

    return sorted(records)


def next_file_number() -> int:
    numbers = []

    for path in WEEKS.glob(
        "week-*.md"
    ):
        match = re.fullmatch(
            r"week-(\d+)\.md",
            path.name,
        )

        if match:
            numbers.append(
                int(
                    match.group(1)
                )
            )

    return (
        max(
            numbers,
            default=0,
        )
        + 1
    )


def build_days(
    start: date,
) -> str:
    weekday_names = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
    ]

    blocks = []

    for (
        offset,
        weekday,
    ) in enumerate(
        weekday_names
    ):
        day = (
            start
            + timedelta(
                days=offset
            )
        )

        blocks.append(
            f"""  - date: {day.isoformat()}
    weekday: {weekday}
    title: Plan the day
    title_fr: Planifier la journée
    tasks: []"""
        )

    return "\n\n".join(
        blocks
    )


def main() -> int:
    (
        cycle_id,
        cycle_start,
        cycle_end,
    ) = current_cycle()

    records = existing_records(
        cycle_id
    )

    if records:
        start = (
            records[-1][0]
            + timedelta(
                days=7
            )
        )

        cycle_week = (
            records[-1][1]
            + 1
        )

    else:
        start = cycle_start
        cycle_week = 1

    end = (
        start
        + timedelta(
            days=6
        )
    )

    if start < cycle_start:
        raise RuntimeError(
            (
                "Next week starts before "
                f"current cycle {cycle_id!r}."
            )
        )

    if end > cycle_end:
        print(
            (
                "Not created: current cycle "
                f"{cycle_id!r} ends "
                f"{cycle_end.isoformat()}. "
                "Update cycles.yml and set "
                "the next current_cycle before "
                "creating another week."
            ),
            file=sys.stderr,
        )

        return 1

    file_number = (
        next_file_number()
    )

    destination = (
        WEEKS
        / f"week-{file_number:02d}.md"
    )

    if destination.exists():
        print(
            (
                "Not created: "
                f"{destination.relative_to(ROOT)} "
                "already exists."
            ),
            file=sys.stderr,
        )

        return 1

    content = TEMPLATE.format(
        cycle=cycle_id,
        cycle_week=cycle_week,
        start=start.isoformat(),
        end=end.isoformat(),
        days=build_days(
            start
        ),
    )

    if "--dry-run" in sys.argv:
        print(
            (
                "Would create "
                f"{destination.relative_to(ROOT)}: "
                f"{start.isoformat()} "
                f"through {end.isoformat()}"
            )
        )

        print()
        print(content)

        return 0

    destination.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    destination.write_text(
        content,
        encoding="utf-8",
    )

    print(
        destination.relative_to(
            ROOT
        )
    )

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

days:

{days}

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
    raise SystemExit(
        main()
    )
