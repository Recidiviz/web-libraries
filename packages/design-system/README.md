# Recidiviz Design System

UI components and styles for Recidiviz web products.

## Development

This package is a component library for use within the web applications that make up the Recidiviz web platform.
We support two local development flows:

### 1. Development within Storybook

[Storybook](https://storybook.js.org/) is a tool that we use for organizing our UI components.
Use the `yarn dev` will run Storybook. Source files will be watched and automatically rebuilt when changed.

### 2. Development alongside dependent projects

The component library can be developed directly alongside dependent projects.

```bash
# Creates yarn links for the component library and dependencies, uses them inside the dependent project (i.e. case-triage)
$ yarn dev-link ~/workspace/recidiviz-data/frontends/case-triage

# Destroys yarn links used for development
$ yarn dev-unlink ~/workspace/recidiviz-data/frontends/case-triage
```

## Module Scope
The package's `main` entrypoint is at [src/index.ts](https://github.com/Recidiviz/web-libraries/blob/main/packages/design-system/src/index.tsx). 
Components define their interface by exporting the appropriate types/objects in `src/components/xx/index.ts`.
