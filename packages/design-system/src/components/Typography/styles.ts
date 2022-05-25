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

import { css, FlattenSimpleInterpolation } from "styled-components";
import sassVars from "../../scss/typography/_variables.scss";

export const TYPOGRAPHY_LEVELS = [
  "Sans12",
  "Sans14",
  "Sans16",
  "Sans24",
  "Serif24",
  "Serif34",
  "Header88",
  "Header56",
  "Header34",
  "Header24",
  "Body48",
  "Body32",
  "Body24",
  "Body19",
  "Body16",
  "Body14",
] as const;
type TypographyLevel = typeof TYPOGRAPHY_LEVELS[number];

export type TypographyStyles = Record<
  TypographyLevel,
  FlattenSimpleInterpolation
>;

export const styles: TypographyStyles = TYPOGRAPHY_LEVELS.reduce(
  (accumulatedStyles, level) => {
    let additionalStyles = css``;

    if (level.startsWith("Body")) {
      additionalStyles = css`
        margin-bottom: ${sassVars.paragraphSpacingBody};

        p {
          margin-bottom: ${sassVars.paragraphSpacingBody};
          &:not(:first-child) {
            margin-top: ${sassVars.paragraphSpacingBody};
          }
        }

        a {
          color: ${sassVars.linkColorBody};
        }

        ul {
          list-style: ${sassVars.listStyleBody};
          margin-top: ${sassVars.paragraphSpacingBody};
          padding-left: ${sassVars.listPaddingBody};
        }

        li {
          margin: ${sassVars.listItemSpacingBody} 0;
        }
      `;
    }

    if (level.startsWith("Header")) {
      additionalStyles = css`
        margin-bottom: ${sassVars.paragraphSpacingHeader};
      `;
    }

    return {
      ...accumulatedStyles,
      [level]: css`
        font: ${sassVars[`font${level}`]};
        letter-spacing: ${sassVars[`letterSpacing${level}`]};
        ${additionalStyles}
      `,
    };
  },
  {} as TypographyStyles
);
