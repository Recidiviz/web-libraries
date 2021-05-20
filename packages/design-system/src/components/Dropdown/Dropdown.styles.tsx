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
import { fonts, palette, spacing } from "../../styles";

export const MenuItemElement = styled.button.attrs({
  type: "button",
  role: "menuitem",
})`
  color: ${palette.pine3};
  list-style: none;
  height: ${rem(32)};
  line-height: ${rem(32)};
  padding: 0 ${rem(spacing.md)};
  transition: color, background-color;
  transition-easing: ease-in-out;
  transition-duration: 0.1s;
  background-color: white;
  border: none;
  width: 100%;
  text-align: left;
  white-space: nowrap;
  font-size: ${rem(14)};

  &:focus {
    outline: none;
    color: ${palette.white};
    background-color: ${palette.signal.links};
    cursor: pointer;
  }

  &:active {
    background-color: ${palette.pine4};
  }

  &:first-child {
    margin-top: ${rem(spacing.sm)};
  }

  &:last-child {
    margin-bottom: ${rem(spacing.sm)};
  }

  &:first-child:last-child {
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 8px;
  }
`;

export const MenuLabelElement = styled.div`
  color: ${palette.slate70};
  height: ${rem(32)};
  line-height: ${rem(32)};
  padding: 0 ${rem(spacing.md)};
  white-space: nowrap;

  &:first-child {
    margin-top: ${rem(spacing.sm)};
  }

  &:last-child {
    margin-bottom: ${rem(spacing.sm)};
  }

  &:first-child:last-child {
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 8px;
  }
`;

export interface MenuElementProps {
  alignment?: "left" | "right";
  shown: boolean;
}

export const MenuElement = styled.div.attrs({
  role: "menubar",
})<MenuElementProps>`
  display: flex;
  flex-direction: column;
  font-family: ${fonts.sans};
  position: absolute;
  min-width: 193px;
  padding: 0;
  margin-top: ${rem(spacing.xs)};
  ${(props: MenuElementProps) => props.alignment || "left"}: 0;

  background: ${palette.marble1};
  box-shadow: 0px 15px 40px rgba(53, 83, 98, 0.3),
    inset 0px -1px 1px rgba(19, 44, 82, 0.2);
  border-radius: 8px;
  font-size: ${rem(14)};

  transition: 0.15s ease-in-out;
  transition-property: opacity, transform;

  z-index: 0;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-25%);

  ${(props: MenuElementProps) =>
    props.shown &&
    css`
      z-index: 1;
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
    `}
`;

interface ToggleElementProps {
  borderless?: boolean;
  shown: boolean;
}

export const ToggleElement = styled.button.attrs({
  type: "button",
})<ToggleElementProps>`
  padding: ${rem(spacing.xs)} ${rem(spacing.sm)};
  position: relative;
  background: white;
  cursor: pointer;
  color: ${palette.pine4};
  min-height: initial;
  min-width: ${rem(32)};
  height: ${rem(32)};
  margin: 0;

  border: 1px solid ${palette.slate30};
  box-sizing: border-box;
  border-radius: 4px;
  font-size: ${rem(14)};

  &:hover {
    border-color: ${palette.signal.links};
  }

  ${(props: ToggleElementProps) =>
    props.shown &&
    css`
      background-color: ${palette.pine4};
      color: white;

      &:hover {
        background-color: ${palette.pine4};
      }
    `}

  ${(props: ToggleElementProps) =>
    props.borderless &&
    css`
      border-width: 0;
    `}
`;

export const DropdownElement = styled.div`
  display: inline-block;
  position: relative;
`;
