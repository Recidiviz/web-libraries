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
# Link the component library with Yarn
$ yarn link
yarn link v1.22.10
success Registered "@recidiviz/design-system".

# Link React to avoid multiple versions of React in the dependent app
$ cd node_modules/react && yarn link

# Watch and rebuild the package when source files change
$ yarn run watch
rollup v2.36.1
bundles src/index.tsx → dist/index.js, dist/index.es.js...
created dist/index.js, dist/index.es.js in 7.8s
```

Inside a dependent frontend app:

```bash
# Use the linked component library
$ yarn link @recidiviz/design-system
yarn link v1.22.10
success Using linked package for "@recidiviz/design-system".
✨  Done in 0.08s.

# Use the linked React package
$ yarn link react
yarn link v1.22.10
success Using linked package for "react".
✨  Done in 0.08s.
```

## Module Scope
The package's `main` entrypoint is at [src/index.ts](https://github.com/Recidiviz/web-libraries/blob/main/packages/design-system/src/index.tsx). 
Components define their interface by exporting the appropriate types/objects in `src/components/xx/index.ts`.
