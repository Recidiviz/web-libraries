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
import { rem } from "polished";
import styled, { css } from "styled-components";
import { palette, spacing, zindex } from "../../styles";

export const tooltipStyles = css`
  display: block;
  position: fixed;
  font-size: ${rem("14px")};
  padding: ${rem(spacing.sm)};
  border-radius: 4px;
  color: ${palette.white};
  background-color: ${palette.signal.tooltip};
  pointer-events: none;
  z-index: ${zindex.modal.content + 1};
`;

export const Tooltip = styled.div`
  ${tooltipStyles}
`;
