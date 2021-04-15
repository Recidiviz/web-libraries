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
import { palette, spacing } from "../../styles";

export const Header = styled.div`
  padding: 20px 32px;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${palette.slate20};
  padding: ${rem(spacing.lg)} ${rem(spacing.xl)};
  margin-bottom: ${rem(spacing.xl)};
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
`;
