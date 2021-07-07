// Recidiviz - a data platform for criminal justice reform
// Copyright (C) 2021 Recidiviz, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
// =============================================================================

module.exports = {
  env: {
    browser: true,
  },
  extends: ["react-app", "airbnb", "plugin:prettier/recommended"],
  ignorePatterns: ["node_modules/", "build/", "public/"],
  plugins: ["simple-import-sort"],
  rules: {
    "func-names": 0,
    // don't require extensions for typescript modules
    "import/extensions": [
      "error",
      "always",
      { js: "never", ts: "never", tsx: "never" },
    ],
    "import/no-extraneous-dependencies": ["error", { packageDir: "./" }],
    "import/prefer-default-export": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "no-new": 1,
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "styled-components",
            message: "Please import from styled-components/macro.",
          },
          {
            name: "react-spring",
            message:
              "For IE 11 support, please import from react-spring/web.cjs",
          },
          {
            name: "react-spring/web",
            message:
              "For IE 11 support, please import from react-spring/web.cjs",
          },
          {
            name: "react-spring/renderprops",
            message:
              "For IE 11 support, please import from react-spring/renderprops.cjs",
          },
        ],
      },
    ],

    // we are only targeting es5 environments so we don't have to pass 10
    radix: ["error", "as-needed"],
    // conflicts with prettier
    "react/jsx-curly-newline": 0,
    "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".js"] }],
    // conflicts with prettier
    "react/jsx-indent": "off",
    // conflicts with prettier
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-wrap-multilines": [
      "error",
      { declaration: false, assignment: false },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
  overrides: [
    {
      extends: ["plugin:@typescript-eslint/recommended"],
      files: ["**.ts", "**.tsx"],
      parser: "@typescript-eslint/parser",
      rules: {
        // with static typing this rule is not so useful
        "consistent-return": "off",
        // these bare ESLint rules are superseded by TS equivalents
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        // TypeScript makes these redundant
        "react/prop-types": "off",
        "react/require-default-props": "off",
      },
    },
    {
      files: ["**.test.js", "**.test.ts", "**.test.tsx"],
      env: {
        jest: true,
      },
      rules: {
        "global-require": "off",
      },
    },
  ],
  settings: {
    "import/resolver": {
      // use <root>/tsconfig.json
      typescript: {
        // always try to resolve types under `<root>@types` directory
        // even it doesn't contain any source code, like `@types/unist`
        alwaysTryTypes: true,
      },
    },
  },
};
