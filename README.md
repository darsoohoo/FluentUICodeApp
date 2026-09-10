# Fluent UI 2 Examples
A small Power Apps Code App for makers who want readable, copyable Fluent UI examples. Uses actual Fluent UI React v9 (9.74.7), React, TypeScript, and Microsoft's Vite template.

## Run
Use Node.js LTS and PowerShell:
```powershell
npm.cmd ci
npm.cmd run dev
npm.cmd run lint
npm.cmd run build
```
Open the Local URL printed by Vite to try the sample without a connector. Use Local Play for the Power Apps host.

## Read or copy the source
- `src/App.tsx`: FluentProvider, light/dark themes, and page layout.
- `src/components/LeftNavigation.tsx`: two Fluent buttons in a semantic navigation landmark.
- `src/components/ProjectsDataGrid.tsx`: column definitions, sorting, and row selection.
- `src/components/ProjectsTable.tsx`: straightforward read-only table.
- `src/data/projects.ts`: exactly three sample projects.
- `src/App.css`: layout using theme tokens supplied by FluentProvider.

Copy a component together with its data file, install `@fluentui/react-components`, and render it inside a FluentProvider. There is no router, icon dependency, backend, or state library. Sorting and selection are local; selection resets when the grid unmounts.

## Publish
The configured environment is SPDEV-Dev2. Install the official CLI if needed and use your authorized tenant account:
```powershell
npm.cmd install --global @microsoft/power-apps-cli
npm.cmd run build
pa.cmd app push
```
Do not reinitialize the committed app configuration unless intentionally targeting a new app or environment.

## References
- [Microsoft Fluent UI 2 React setup](https://fluent2.microsoft.design/get-started/develop)
- [Microsoft Code Apps quickstart](https://learn.microsoft.com/en-us/power-apps/developer/code-apps/how-to/create-an-app-from-scratch)
- [Project handoff](docs/project-handoff.md)
- [Workflow registry](docs/automation-registry.md)

## Reusable Stack
`src/components/Stack.tsx` is a small local flexbox wrapper using Fluent v9 spacing tokens. It is not a Fluent v8 dependency. `children` is required; `direction` defaults to `column`, `gap` to `tokens.spacingVerticalM`, and `align` to `stretch`.

```tsx
import { Stack } from './components/Stack'

<Stack>
  <h2>Projects</h2>
  <p>Three sample projects.</p>
</Stack>

<Stack direction="row" gap={16} align="center">
  <span>Project</span>
  <span>Owner</span>
</Stack>
```

The navigation demonstrates a vertical Stack with a smaller Fluent gap. The header demonstrates a horizontal Stack with centered items. Copy Stack.tsx into your project and keep the surrounding FluentProvider for theme tokens. Gap accepts CSS lengths or numbers; align accepts CSS align-items values. Page-specific wrapping and distribution stay in App.css to keep the Stack API small.
