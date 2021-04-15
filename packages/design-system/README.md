# case-triage

A tool to improve outcomes for people under supervision


## Development
The bulk of this repository is a component library for use within the Case Triage tool.
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
success Registered "@recidiviz/case-triage-components".

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
$ yarn link @recidiviz/case-triage-components
yarn link v1.22.10
success Using linked package for "@recidiviz/case-triage-components".
✨  Done in 0.08s.

# Use the linked React package
$ yarn link react
yarn link v1.22.10
success Using linked package for "react".
✨  Done in 0.08s.
```
