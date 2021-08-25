# Recidiviz Web Libraries

Packages shared across the Recidiviz web platform.

This is a multi-package repository. The individual packages (found in `packages/*`) have their own README files with more detailed information about their use.

## Packages in this repository

All npm packages should be scoped to the `@recidiviz` organization.

[@recidiviz/design-system](./packages/design-system/README.md)

[@recidiviz/eslint-config](./packages/eslint-config/README.md)

[@recidiviz/tsconfig](./packages/tsconfig/README.md)

## Development

Packages are versioned independently of one another and have separate dependencies. Dependencies are managed with [`yarn`](https://classic.yarnpkg.com/lang/en/). For convenience, a postinstall script will install dependencies for all packages when you run `yarn install` in the root package.

## Releasing packages

The release process is semi-automated and relies on Github Actions. When you are ready to release a package, you should perform the following steps:

1. Open a pull request to increment the version in its `package.json`, following [semantic versioning](https://docs.npmjs.com/about-semantic-versioning) conventions.
1. Update the CHANGELOG.md file for the package you're updating.
1. Once that pull request is merged, create a Github Release on `main` for that package. Include a changelog in the body of the Release. The tag for this release **must** follow the naming convention `[package]@[version-number]`, where `package` matches the name of the package's directory (e.g., `eslint-config` for `packages/eslint-config`). The version number should also match the version bump you just merged.
1. When that release is created, the package matching the tagged name will be published to npm by a Github Action.
