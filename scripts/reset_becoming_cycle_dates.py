#!/usr/bin/env python3

from __future__ import annotations

from datetime import date, timedelta
from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]

WEEKS_DIR = ROOT / "_becoming" / "weeks"
CYCLES_FILE = ROOT / "_data" / "becoming" / "cycles.yml"

CYCLE_ID = "foundations-01"
NEW_START = date(2026, 9, 21)
NUMBER_OF_WEEKS = 12


def replace_week_dates(
    path: Path,
    start_date: date,
) -> None:
    end_date = (
        start_date +
        timedelta(days=6)
    )

    text = path.read_text(
        encoding="utf-8"
    )

    existing_start = re.search(
        r"^start_date:\s*(\d{4}-\d{2}-\d{2})",
        text,
        re.MULTILINE,
    )

    if (
        not existing_start
        or date.fromisoformat(
            existing_start.group(1)
        ) != start_date
    ):
        raise RuntimeError(
            "Date-only reset refused: update daily dates, "
            "weekdays, reading deadlines and the fixed "
            "November 7 Exam P schedule together."
        )

    text, start_count = re.subn(
        r"^start_date:\s*\d{4}-\d{2}-\d{2}\s*$",
        f"start_date: {start_date.isoformat()}",
        text,
        count=1,
        flags=re.MULTILINE,
    )

    text, end_count = re.subn(
        r"^end_date:\s*\d{4}-\d{2}-\d{2}\s*$",
        f"end_date: {end_date.isoformat()}",
        text,
        count=1,
        flags=re.MULTILINE,
    )

    if start_count != 1:
        raise RuntimeError(
            f"Could not replace start_date in {path}"
        )

    if end_count != 1:
        raise RuntimeError(
            f"Could not replace end_date in {path}"
        )

    path.write_text(
        text,
        encoding="utf-8"
    )


def replace_cycle_dates() -> None:
    text = CYCLES_FILE.read_text(
        encoding="utf-8"
    )

    lines = text.splitlines()

    inside_cycle = False

    cycle_end = (
        NEW_START +
        timedelta(
            days=NUMBER_OF_WEEKS * 7 - 1
        )
    )

    start_changed = False
    end_changed = False

    for index, line in enumerate(lines):
        stripped = line.strip()

        if stripped.startswith("- id:"):
            current_id = (
                stripped
                .removeprefix("- id:")
                .strip()
            )

            inside_cycle = (
                current_id ==
                CYCLE_ID
            )

        if not inside_cycle:
            continue

        if stripped.startswith(
            "start_date:"
        ):
            indent = (
                line[
                    : len(line) -
                    len(line.lstrip())
                ]
            )

            lines[index] = (
                f"{indent}"
                f"start_date: "
                f"{NEW_START.isoformat()}"
            )

            start_changed = True

        elif stripped.startswith(
            "end_date:"
        ):
            indent = (
                line[
                    : len(line) -
                    len(line.lstrip())
                ]
            )

            lines[index] = (
                f"{indent}"
                f"end_date: "
                f"{cycle_end.isoformat()}"
            )

            end_changed = True

    if not start_changed:
        raise RuntimeError(
            "Cycle start_date was not found."
        )

    if not end_changed:
        raise RuntimeError(
            "Cycle end_date was not found."
        )

    CYCLES_FILE.write_text(
        "\n".join(lines) + "\n",
        encoding="utf-8"
    )


def main() -> None:
    for week_number in range(
        1,
        NUMBER_OF_WEEKS + 1,
    ):
        path = (
            WEEKS_DIR /
            f"week-{week_number:02d}.md"
        )

        if not path.exists():
            raise FileNotFoundError(
                path
            )

        start_date = (
            NEW_START +
            timedelta(
                days=(
                    week_number - 1
                ) * 7
            )
        )

        replace_week_dates(
            path,
            start_date,
        )

        print(
            f"Week {week_number:02d}: "
            f"{start_date} → "
            f"{start_date + timedelta(days=6)}"
        )

    replace_cycle_dates()

    print()
    print(
        "Cycle foundations-01 reset "
        "successfully."
    )


if __name__ == "__main__":
    main()
