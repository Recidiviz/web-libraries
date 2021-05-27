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
import { rem } from "polished";
import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.types";
import { animation, fonts, palette, spacing } from "../../styles";

const pillStyles = css`
  min-width: ${rem(129)};
  min-height: ${rem(40)};
  padding: ${rem(12)} ${rem(16)};
  border-radius: ${rem(999)};
`;

const blockStyles = css`
  border-radius: ${rem(4)};

  height: ${rem(32)};
  min-height: initial;
  min-width: ${rem(32)};
  padding: ${rem(spacing.xs)} ${rem(spacing.sm)};
`;

const primaryStyles = css`
  border: none;
  background-color: ${palette.signal.links};
  color: ${palette.white};

  &:hover,
  &:focus {
    background-color: ${palette.pine4};
  }

  &:active,
  &[aria-expanded="true"] {
    background-color: ${palette.pine3};
  }

  &:disabled {
    background-color: ${palette.slate10};
    color: ${palette.slate80};
  }
`;

const secondaryStyles = css`
  background-color: transparent;
  border: 1px solid ${palette.slate30};
  color: ${palette.text.normal};

  &:hover,
  &:focus {
    background-color: ${palette.slate20};
    color: ${palette.pine4};
  }

  &:active,
  &[aria-expanded="true"] {
    border-color: ${palette.pine4};
    color: ${palette.signal.links};
  }

  &:disabled {
    background-color: transparent;
    border-color: ${palette.slate20};
    color: ${palette.slate60};
  }
`;

const borderlessStyles = css`
  ${secondaryStyles}

  border-color: transparent !important;

  &:hover,
  &:focus {
    background-color: transparent;
  }
`;

export const BaseButton = styled.button.attrs({
  type: "button",
})<Pick<ButtonProps, "kind" | "shape">>`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-family: ${fonts.body};
  font-size: ${rem(14)};
  justify-content: center;
  transition-duration: ${animation.defaultDurationMs}ms;
  transition-property: color, background-color, border-color;

  &:disabled {
    cursor: not-allowed;
  }

  ${(props) => {
    switch (props.shape) {
      case "pill":
        return pillStyles;
      case "block":
        return blockStyles;
      default:
        return "";
    }
  }}

  ${(props) => {
    switch (props.kind) {
      case "primary":
        return primaryStyles;
      case "secondary":
        return secondaryStyles;
      case "borderless":
        return borderlessStyles;
      default:
        return "";
    }
  }}
`;

export const LinkButton = styled.button.attrs({
  type: "button",
})<ButtonProps>`
  background: transparent;
  border: none;
  color: ${palette.signal.links};
  cursor: pointer;
  font-family: ${fonts.body};
  padding: 0;

  &:active,
  &:hover,
  &:focus,
  &[aria-expanded="true"] {
    text-decoration: underline;
  }

  &:active,
  &[aria-expanded="true"] {
    color: ${palette.pine4};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${palette.slate70};
  }
`;
