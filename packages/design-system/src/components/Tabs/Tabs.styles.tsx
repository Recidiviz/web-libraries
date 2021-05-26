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

import * as ReactTabs from "react-tabs";
import { rem } from "polished";
import styled from "styled-components";
import { animation, palette, spacing } from "../../styles";

/**
 * Container for a tabbed module. Must contain a `TabList` and `TabPanel`s.
 */
export const Tabs = styled(ReactTabs.Tabs)``;

/**
 * Must contain `Tab`s.
 */
export const TabList = styled(ReactTabs.TabList)`
  border-bottom: 1px solid ${palette.slate30};
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0 ${rem(spacing.xl)};
`;

export const Tab = styled(ReactTabs.Tab).attrs({
  selectedClassName: "Tab--selected",
})`
  border-bottom: ${rem(spacing.xs)} solid transparent;
  color: ${palette.slate80};
  cursor: pointer;
  font-weight: 500;
  list-style: none;
  margin: 0 ${rem(spacing.md)};
  padding: ${rem(spacing.sm)} 0;
  flex: 0 0 auto;
  transition-duration: ${animation.defaultDurationMs}ms;
  transition-property: border-bottom-color, color;

  &:first-child {
    margin-left: 0;
  }

  &.Tab--selected {
    border-bottom-color: ${palette.signal.highlight};
    color: ${palette.pine2};
  }
`;

export const TabPanel = styled(ReactTabs.TabPanel).attrs({
  selectedClassName: "TabPanel--selected",
})`
  &.TabPanel--selected {
    padding: ${rem(spacing.xl)};
  }
`;
