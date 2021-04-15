# case-triage

A tool to improve outcomes for people under supervision

## Development

The bulk of this repository is a component library for use within the Case Triage tool.
We support two local development flows:

### 1. Development within Storybook

[Storybook](https://storybook.js.org/) is a tool that we use for organizing our UI components.
Use the `yarn dev` will run Storybook. Source files will be watched and automatically rebuilt when changed.

### 2. Development alongside dependent projects

The component library can be developed directly alongside dependent projects. The easiest way to do this is with [yalc](https://github.com/wclr/yalc).

```bash
# Watch and rebuild the package when source files change
$ yarn run watch
rollup v2.36.1
bundles src/index.tsx → dist/index.js, dist/index.es.js...
created dist/index.js, dist/index.es.js in 7.8s

# Link the component library with Yalc;
# you have to run this every time you make changes,
# or set up your own watcher on dist/ with, e.g., nodemon or watch
$ yalc push
@recidiviz/design-system@x.x.x published in store.
```

Inside a dependent frontend app:

```bash
# Use the linked component library.
# This will add some local config files that should be ignored.
# It will also change your package.json and yarn.lock,
# be sure not to commit these changes!
$ yalc add @recidiviz/design-system
Package @recidiviz/design-system@x.x.x added ==> /path/to/your/package/node_modules/@recidiviz/design-system
# install any transitive dependencies;
# only needed if you change them while developing
$ yarn install
$
```
