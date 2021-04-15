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
import { palette } from "../../styles";

export const NeedsContainer = styled.div`
  background-color: ${palette.white};
  border: 1px solid ${palette.slate30};
  width: ${rem("40px")};
  height: ${rem("40px")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  & path {
    fill: ${palette.slate70};
  }
`;

export const NeedsContainerMet = styled(NeedsContainer)`
  background-color: ${palette.signal.links};
  border: none;

  & path {
    fill: ${palette.white80};
  }
`;

export const NeedsContainerDisabled = styled(NeedsContainer)`
  background-color: transparent;
  border: 1px solid ${palette.slate30};

  & path {
    fill: ${palette.slate70};
  }
`;

export const NeedsContainerDisabledMet = styled(NeedsContainer)`
  background-color: ${palette.slate60};
  border: none;

  & path {
    fill: ${palette.marble3};
  }
`;
