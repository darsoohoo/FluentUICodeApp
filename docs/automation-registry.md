# Workflow registry
Reviewed the new repository, GitHub project 42, and issue 1 on 2026-09-10. No existing Actions, scheduled jobs, or automation were present.

| Workflow | Trigger | Command | Effect |
| --- | --- | --- | --- |
| Local development | Manual | npm.cmd run dev | Vite server until stopped |
| Validation | Manual | npm.cmd run lint; npm.cmd run build | ESLint, TypeScript, production bundle |
| Publish | Manual, authorized | pa.cmd app push | Publish built app to configured Power Apps environment |

No scheduled jobs, persistent agents, or hosted GitHub Actions are configured.

