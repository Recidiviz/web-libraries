# Recidiviz ESLint config

Shareable configuration for Recidiviz web applications

## How to use this configuration

Install it with yarn:

```bash
$ yarn add -D @recidiviz/eslint-config
```

You should also be sure to add all of its peer dependencies to your `package.json`. Some of them are also come with `react-scripts` but to silence confusing warnings from Yarn and ensure you have all the expected plugins, it is recommended to install them directly. They should be compatible with both the `3.4.x` and `4.x` lines of `react-scripts`. You may get a warning about not having ESLint 7.x if you are still on an older version of `react-scripts`, but we have yet to see any breaking changes from that so far.

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
$ yalc add @recidiviz/eslint-config
# install any transitive dependencies;
# only needed if you change them while developing
$ yarn install
```
