// Recidiviz - a data platform for criminal justice reform
// Copyright (C) 2020 Recidiviz, Inc.
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
import { createGlobalStyle } from "styled-components";
import { rem } from "polished";
import { fonts, palette, spacing } from "./index";
import "@fontsource/libre-franklin";
import "@fontsource/libre-franklin/500.css";
import "@fontsource/libre-baskerville";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    box-sizing: border-box;
    outline-offset: ${rem(spacing.xs)};
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
    outline-offset: inherit;
  }
  
  :focus {
    outline: ${palette.signal.notification} auto 1px;
  } 
  
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.5;
    margin: 0;
  }
  
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    background: ${palette.marble3};
    color: ${palette.pine3};
    font-family: ${fonts.body};
    font-size: ${rem("16px")};
    letter-spacing: -0.01em;
    line-height: 1.5;
    -webkit-font-smoothing: antialised;
    text-rendering: optimizeLegibility;
  }
  
  strong {
    font-weight: 500;
  }
`;
