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
import styled from "styled-components";
import { rem } from "polished";
import { fonts, palette, spacing } from "../../styles";

import { Icon } from "../Icon/Icon";
import { IconSVG } from "../Icon/IconSVG";

export const SearchContainer = styled.div`
  display: flex;
  flex-directions: row;
  align-items: center;
`;

export const SearchInput = styled.input.attrs({
  type: "search",
})`
  background-color: ${palette.marble3};
  border: 1px solid ${palette.slate20};
  height: 48px;
  width: 408px;
  border-radius: 999px;
  outline: 0;
  padding-left: ${rem(spacing.lg)};

  font-family: ${fonts.body};
  font-size: ${rem(14)};
  font-weight: 500;
  color: ${palette.slate70};

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`;

export const SearchIcon = styled(Icon).attrs({
  kind: IconSVG.Search,
  fill: palette.signal.links,
  size: 16,
})`
  position: relative;
  right: ${rem(spacing.xl)};
`;
