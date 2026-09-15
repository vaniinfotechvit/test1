# Simple Browser Task App

A simple HTML, CSS, and JavaScript task-list application that runs directly in Chrome.

## Run in Chrome

1. Extract the project.
2. Double-click `index.html`.
3. Add, complete, and delete tasks.

No server or package installation is required to use the app.

## Run tests locally

Requires Node.js 18 or later:

```bash
npm test
```

## GitHub Actions

The workflow is located at:

`.github/workflows/ci.yml`

It runs the Node.js test command on pushes and pull requests to `main` and `master`.
