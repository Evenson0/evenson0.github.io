#!/usr/bin/env python3
"""Validate Activities records, translations, references and append-only event semantics."""
from collections import Counter
from datetime import date
from pathlib import Path
import yaml

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / '_data' / 'activities'
STATES = {'proposed', 'accepted', 'in_progress', 'completed', 'declined', 'deferred', 'stopped'}

def main():
    config = yaml.safe_load((DATA / 'config.yml').read_text())
    challenges = yaml.safe_load((DATA / 'challenges.yml').read_text())
    events = yaml.safe_load((DATA / 'events.yml').read_text())
    nodes = {n['id'] for p in (ROOT / '_data/becoming/trees').glob('*.yml')
             for n in yaml.safe_load(p.read_text())['nodes']}
    horizons = {h['id']: h for h in config['horizons']}
    assert len(horizons) == 6
    categories = {c['id']: c for c in config['categories']}
    assert len(categories) == len(config['categories'])
    targets = {t['id']: t for t in config['targets']}
    assert len(targets) == len(config['targets'])
    def bilingual(value):
        assert isinstance(value, dict) and all(isinstance(value.get(k), str) and value[k].strip() for k in ('fr', 'en'))
    for category in categories.values():
        bilingual(category['label'])
    for target in targets.values():
        bilingual(target['label'])
        assert target['url'].startswith('/') and not target['url'].startswith('//')
        assert target['node'] is None or target['node'] in nodes
    ids = {c['id'] for c in challenges}
    assert len(ids) == len(challenges), 'Duplicate challenge ID'
    counts = Counter()
    for c in challenges:
        assert c['horizon'] in horizons
        assert c['category'] in categories, 'Unknown Activities category'
        assert c['difficulty'] in {'easy', 'focused', 'stretch', 'ambitious'}
        assert date.fromisoformat(c['period_start']) <= date.fromisoformat(c['issued']) <= date.fromisoformat(c['due'])
        for key in ('title', 'effort', 'action', 'why', 'done_when', 'minimum', 'stretch'):
            bilingual(c[key])
        assert c['targets'] and all(t in targets for t in c['targets'])
        assert all(p in ids and p != c['id'] for p in c['parents'])
        counts[c['horizon'], c['period']] += 1
    assert all(n <= horizons[h]['quota'] for (h, _), n in counts.items()), 'Period quota exceeded'
    mapping = {c['id']: c for c in challenges}
    def visit(id, path):
        assert id not in path, 'Cyclic challenge relationship'
        for parent in mapping[id]['parents']: visit(parent, path | {id})
    for id in ids: visit(id, set())
    event_ids, last_dates, proposed = set(), {}, set()
    for event in events:
        assert event['id'] not in event_ids; event_ids.add(event['id'])
        id = event['challenge']; assert id in ids
        when = date.fromisoformat(event['date'])
        assert when >= date.fromisoformat(mapping[id]['issued'])
        assert when >= last_dates.get(id, when), 'Event history out of order'
        last_dates[id] = when
        assert event['status'] in STATES
        bilingual(event['note'])
        if id not in proposed:
            assert event['status'] == 'proposed' and event['source'] == 'mentor'
            proposed.add(id)
        elif event['status'] != 'proposed':
            assert event['source'] == 'user', 'Decisions and outcomes must come from the user'
    assert proposed == ids, 'Every challenge needs a proposal event'
    print(f'Activities valid: {len(challenges)} challenges, {len(events)} events, 6 horizons; all translations and references present.')

if __name__ == '__main__': main()
