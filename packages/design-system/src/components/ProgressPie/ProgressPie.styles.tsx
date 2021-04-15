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
import ProgressBar from "react-customizable-progressbar";
import { styles } from "../../styles/globalStyleConstants";

export const StyledProgressBar = styled(ProgressBar)`
  &.RCP {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 4px;
  }
  .indicator {
    display: flex;
    justify-content: center;
    text-align: center;
    position: absolute;
    margin: 0 auto;
    user-select: none;
    font-family: ${styles.MAIN_FONT};
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    color: ${styles.MAIN_FONT_COLOR};
  }
  .red-indicator {
    color: #ba4f4f;
  }
`;
