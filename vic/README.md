# VIC — Virtual Insurance Company (v0.1)

Standalone browser prototype served by GitHub Pages at https://evenson0.github.io/vic/.

This directory is isolated from the main Jekyll site. No backend, authentication, package installation, or build step is needed. Source uses native ES modules for this hosted preview. The earlier React/TypeScript/Vite archive is a separate development prototype, not the code served by this URL.

## Architecture

- index.html / style.css: console shell and responsive design.
- app.js: rendering, forms, navigation and creator inputs.
- engine.js: pure annual portfolio and financial simulation, with injected scenario.
- scenario.json: 20-year fictional market, loss frequency/severity/inflation/shocks, competitors and starting configurations.
- i18n.js: EN/FR dictionary; event records store keys and numerical values.
- storage.js: versioned local save adapter with companyId and reserved userId.

## Model notes

Starting equity excludes debt. Initial liquid assets equal equity plus loan. The balance sheet is simplified to liquid assets and debt; there are no insurance reserves, taxes, or investments yet. Equity = assets - debt. Repayment of principal reduces both assets and debt, and interest reduces profit. Solvency is a fictional capital requirement based on written premium, not a regulatory MCT. Written premium approximates end-of-year in-force annualized premium; earned premium uses midpoint exposure. Actual scenario loss count scales with exposure unless an absolute manual override is provided. Average severity accumulates external inflation and catastrophe shock unless overridden by a final average claim size. Underwriting strictness influences acquisition and retention only at this stage; no risk segmentation yet. Objectives measure results and do not create automatic business. A 1% share is a milestone, not a survival condition.

Scenario files are visible in client-side code. They are not secure or secret; creator-only controls and authoritative scenarios require a future backend. Import a scenario before closing the first year. Manual experience overrides may be set in Claims Experience. The local save is browser-specific; export JSON provides a backup (import of save files is not yet implemented).

## Future

GLM, PRR, segmented pricing, reserving, investments, reinsurance, regulatory filing, database persistence and accounts remain future modules.

## Validation

Engine smoke tested on both starting modes; exposure and equity reconciliation checked. Twenty-year survival is achievable with active price management in both starting modes; unchanged rates can lead to insolvency. This is a fictional simulation, not actuarial advice.
