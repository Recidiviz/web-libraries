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
export interface ProgressPieProps {
  /**
   * Menu handler for watching progress
   */
  showMenuHandler?: () => void;
  /**
   * Handler for closing progress menu
   */
  unShowMenuHandler?: () => void;
  /**
   * What color to fill the circle to use
   */
  fillColor?: string;
  /**
   * What track stroke color use
   */
  trackStrokeColor?: string;
  /**
   * How many steps are needed to complete
   */
  steps: number;
  /**
   *How many steps have been taken
   */
  progress: number;
  /**
   * What color of progress should be when doing less than 15%
   */
  progressColorUpTo15?: string;
  /**
   *
   * What color of progress should be when doing less than 45%
   */
  progressColorUpTo45?: string;
  /**
   * What color of progress should be when doing less than 70%
   */
  progressColorUpTo70?: string;
  /**
   *
   * What color of progress should be when doing less than 100%
   */
  progressColorUpTo100?: string;
  /**
   * What is the stroke color when progress is successful
   */
  successfulProgress?: string;
}
