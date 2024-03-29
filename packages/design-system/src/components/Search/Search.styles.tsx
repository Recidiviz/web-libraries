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
import { rem } from "polished";
import { palette, spacing, typography } from "../../styles";

import { Icon, IconSVG } from "../Icon";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  max-width: ${rem(408)};
  width: 100%;

  padding-left: ${rem(spacing.md)};
`;

export const SearchInput = styled.input.attrs({
  type: "search",
})`
  ${typography.Sans14}
  background-color: ${palette.marble3};
  border: 1px solid ${palette.slate20};
  height: ${rem(48)};
  width: 100%;
  min-width: ${rem(120)};
  border-radius: ${rem(999)};
  outline: 0;
  padding-left: ${rem(spacing.lg)};

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
