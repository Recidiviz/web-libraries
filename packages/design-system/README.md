# Recidiviz Design System

UI components and styles for Recidiviz web products.

## Development

This package is a component library for use within the web applications that make up the Recidiviz web platform.
We support two local development flows:

### 1. Development within Storybook

[Storybook](https://storybook.js.org/) is a tool that we use for organizing our UI components.
Use the `yarn dev` will run Storybook. Source files will be watched and automatically rebuilt when changed.

### 2. Development alongside dependent projects

The component library can be developed directly alongside dependent projects. The easiest way to do this is with [yalc](https://github.com/wclr/yalc) (which you should probably install globally).

Running `yarn watch` will rebuild the application bundle and publish it to yalc whenever you make changes. In the dependent project(s), there is a one-time step of running `yalc add @recidiviz/design-system` (and `yarn install`) before starting the development server for that application; once this is done, your changes here should be picked up automatically and trigger a reload. Run `yalc remove @recidiviz/design-system` to restore the project's dependencies to their previous state.

The scripts `yarn dev-link` and `yarn dev-unlink` will do this for you, e.g., `yarn dev-link ~/path/to/project`

## Module Scope

The package's `main` entrypoint is at [src/index.ts](https://github.com/Recidiviz/web-libraries/blob/main/packages/design-system/src/index.tsx).
Components define their interface by exporting the appropriate types/objects in `src/components/xx/index.ts`.
