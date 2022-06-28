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
import styled from "styled-components";
import {
  AppearanceTypes,
  DefaultToastContainer,
} from "react-toast-notifications";
import { rem } from "polished";
import { palette, spacing, typography, zindex } from "../../styles";

export const ToastBackgroundColors = {
  success: "#d5f6ee",
  info: "#d9e9f2",
  warning: "#fff5e6",
  error: "#f7e8e3",
};

export const ToastAccentColors = {
  success: "#25b894",
  info: "#4693be",
  warning: "#d9a95f",
  error: "#c53b3e",
};

export const ToastContainer = styled(DefaultToastContainer)`
  /* additional specificity to override default styles */
  && {
    padding: ${rem(spacing.xl)};
    z-index: ${zindex.toast};
  }
`;

export const BaseToastDiv = styled.div<{ appearance: AppearanceTypes }>(
  ({ appearance }) => `
    background: ${ToastBackgroundColors[appearance]};
    display: flex;
    flex-direction: row;
    padding: 16px 26px;
    align-items: center;
    width: 395px;

    margin-top: ${rem(spacing.sm)};
  
    border: 1px solid ${ToastAccentColors[appearance]};
    box-sizing: border-box;
    border-radius: 2px;
  `
);

export const BaseToastContent = styled.div`
  ${typography.Body14}
  color: ${palette.text.normal};
  margin: 0;
  padding: 0px ${rem(spacing.xl)};
`;

export const IconWrapper = styled.div`
  display: flex;
`;
