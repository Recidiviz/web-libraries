# Recidiviz Typescript config bases

Shareable `tsconfig.json` bases for Recidiviz web applications.

## How to use this configuration

Install it with yarn:

```bash
$ yarn add -D @recidiviz/tsconfig
```

Extend it in your local `tsconfig.json`:

```json
{
  "extends": "@recidiviz/tsconfig/react",
  "include": ["path/to/files"]
}
```

There is a base for React applications at `/react.json`, and a base for end-to-end tests with WebdriverIO and Cucumber at `/e2e.json`.

## Development

This module can be developed directly alongside dependent projects. The easiest way to do this is with [yalc](https://github.com/wclr/yalc).

```bash
# Link the component library with Yalc;
# you have to run this every time you make changes
$ yalc push
```

Inside a dependent frontend app:

```bash
# Use the linked component library.
# This will add some local config files that should be ignored.
# It will also change your package.json and yarn.lock,
# be sure not to commit these changes!
$ yalc add @recidiviz/tsconfig
# install any transitive dependencies;
# only needed when first adding or if you change them while developing
$ yarn install
```
