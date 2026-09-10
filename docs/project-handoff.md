# Project handoff
## Purpose and users
A readable Fluent UI 2 learning example for Power Apps makers. Exactly three fictional projects keep attention on components.

## Architecture and implementation
React 19 + TypeScript + Vite from the official Microsoft Code Apps template. Fluent React 9.74.7 provides FluentProvider, Switch, Button, DataGrid and Table. App owns page/theme state; DataGrid owns transient selection. Shared static data lives in src/data/projects.ts. CSS uses Fluent theme tokens. No data connectors or persistence.

## Decisions
Use direct, clearly named components instead of abstractions. Navigation uses standard Fluent buttons within a nav landmark to minimize dependencies. Light/dark themes come directly from FluentProvider. Three rows and no remote data keep copying and experimentation simple.

## Environment
SPDEV-Dev2: 543d442f-0b4a-e67b-89eb-1e32c0622907.
Use the existing authorized Microsoft account and official pa CLI. power.config.json holds app/environment identifiers, never credentials. Tenant access and applicable Power Apps licensing are required for hosted play.

## Run and validate
npm.cmd ci; npm.cmd run dev. npm.cmd run lint and npm.cmd run build.
Manual browser acceptance: select one row (1 selected), select all (3 selected), sort Project ascending (Customer guide, Team onboarding, Website refresh), switch dark theme, navigate Table (three rows), and return to Data grid. Confirm keyboard accessibility through Fluent controls.

## Delivery
Repository: https://github.com/darsoohoo/FluentUICodeApp
Board: https://github.com/users/darsoohoo/projects/42
Issue: #1. Publication and final delivery status recorded below.

## Risks and next steps
Sample only; no data mutations or business workflow. Selection resets when leaving the grid. Narrow views horizontally scroll the table. Next useful step is user walkthrough and copying a component into a real app; add a connector only when a concrete data source is requested.

## Session log
2026-09-10: Initialized official template and GitHub repository/board; implemented requested components. Build and lint pass; npm reported zero vulnerabilities. Browser verified ascending sorting, single/all selection, light Table and dark DataGrid rendering. No scheduled automation added.


Published app: https://apps.powerapps.com/play/e/543d442f-0b4a-e67b-89eb-1e32c0622907/app/2096dd0e-1ec2-450f-8153-3ca8eef824b0?tenantId=0c4d55e1-462f-44ae-a026-1370f04eb511
2026-09-10 deployment verification: pa app push succeeded. Authenticated hosted browser displayed the real app, three rows, sorting, 1 selected after row selection, dark/light switching, and Table navigation. Updated local CLI to latest to resolve its transitive audit advisories; final npm audit reports zero vulnerabilities. Delivery PR: #2 (consult GitHub for merge status).

2026-09-10 Stack update: Added src/components/Stack.tsx with typed children, direction (column default), gap (Fluent spacingVerticalM default), and align (stretch default). Vertical navigation and horizontal header demonstrate composition; README includes copyable examples. No new dependency or Fluent v8 package. PR #2 is merged; main was clean before this slice. Build and lint passed, then republished to the same app. Hosted runtime version 20260910t202134z4ae395c8ee verified with three rows, navigation to Table, and dark theme rendering. If Power Apps shows an old-version banner, use its Refresh button. Next: copy Stack and one example into the intended app; no remaining implementation blocker.
