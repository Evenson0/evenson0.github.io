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
    inspirations = yaml.safe_load((DATA / 'inspirations.yml').read_text())
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
    inspiration_ids = {i['id'] for i in inspirations}
    assert len(inspiration_ids) == len(inspirations), 'Duplicate source inspiration'
    for i in inspirations:
        assert i['name'].strip(), 'Empty inspiration name'
        bilingual(i['archetype'])
        bilingual(i['lesson'])
        assert i['url'].startswith('https://'), 'Inspiration URL must be HTTPS'
    ids = {c['id'] for c in challenges}
    assert len(ids) == len(challenges), 'Duplicate challenge ID'
    counts = Counter()
    for c in challenges:
        assert c['horizon'] in horizons
        assert c['category'] in categories, 'Unknown Activities category'
        assert c.get('inspiration') is None or c['inspiration'] in inspiration_ids, 'Unknown inspiration'
        assert c['difficulty'] in {'easy', 'focused', 'stretch', 'ambitious'}
        assert date.fromisoformat(c['issued']) <= date.fromisoformat(c['due']) and date.fromisoformat(c['period_start']) <= date.fromisoformat(c['due']), 'Invalid challenge timing'
        for key in ('title', 'effort', 'action', 'why', 'done_when', 'minimum', 'stretch'):
            bilingual(c[key])
        assert c['targets'] and all(t in targets for t in c['targets'])
        assert all(p in ids and p != c['id'] for p in c['parents'])
        counts[c['horizon'], c['period']] += 1
        if c.get('series') == 'odyssee':
            assert c['horizon'] == 'week' and c['difficulty'] == 'ambitious'
            assert isinstance(c.get('level'), int) and 1 <= c['level'] <= 12
            assert c.get('axis') in {'precision', 'fabrication', 'expression', 'creation', 'endurance', 'terrain'}
            bilingual(c['measure'])
            assert c['id'].startswith('ACT-OD26-'), 'Invalid Odyssey ID'
            if c.get('boss'):
                assert c['axis'] == 'terrain', 'A boss must be a real-world trial'
    odyssey = [c for c in challenges if c.get('series') == 'odyssee']
    assert len(odyssey) == 71, 'Twelve-week Odyssey must contain 60 skill trials and 11 bosses'
    for level in range(1, 13):
        batch = [c for c in odyssey if c['level'] == level]
        skills = [c for c in batch if not c.get('boss')]
        assert len(skills) == 5, f'Level {level} needs five skill trials'
        assert {c['axis'] for c in skills} == {'precision', 'fabrication', 'expression', 'creation', 'endurance'}
        boss = [c for c in batch if c.get('boss')]
        assert len(boss) == (0 if level == 10 else 1), f'Incorrect boss count at level {level}'
        assert len({c['period'] for c in batch}) == 1, 'Level must use one week'
        assert len({c['period_start'] for c in batch}) == 1
    assert all(n <= horizons[h]['quota'] for (h, _), n in counts.items()), 'Period quota exceeded'
    for inspiration in inspirations:
        assert inspiration['connects'] and all(ref in ids for ref in inspiration['connects']), 'Invalid inspiration challenge reference'
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
    print(f'Activities valid: {len(challenges)} challenges, {len(events)} events, {len(odyssey)} measurable Odyssey trials, {len(inspirations)} sources; references present.')

if __name__ == '__main__': main()
