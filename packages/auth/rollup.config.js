// Recidiviz - a data platform for criminal justice reform
// Copyright (C) 2022 Recidiviz, Inc.
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

import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import url from "postcss-url";
import typescript from "rollup-plugin-typescript2";
import sourcemaps from "rollup-plugin-sourcemaps";
import analyze from "rollup-plugin-analyzer";
import externals from "rollup-plugin-node-externals";

const packageJson = require("./package.json");

const optionalPlugins = [];

if (process.env.ANALYZE === "true") {
  optionalPlugins.push(analyze({ summaryOnly: true }));
}

export default {
  input: "index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    externals(),
    postcss({
      plugins: [url({ url: "inline" })],
    }),
    resolve(),
    commonjs(),
    sourcemaps(),
    typescript({ clean: true, useTsconfigDeclarationDir: true }),
    ...optionalPlugins,
  ],
};