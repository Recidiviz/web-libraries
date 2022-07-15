module.exports = {
  extends: ["@recidiviz"],
  plugins: ["header"],
  rules: {
    "header/header": [2, "license-header.js"],
    // we're not building with Babel so don't require the Babel macro
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "styled-components/macro",
            message: "Please import 'styled-components' instead",
          },
        ],
      },
    ],
  }
};
