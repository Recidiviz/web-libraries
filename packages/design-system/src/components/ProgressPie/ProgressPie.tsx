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
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledProgressBar } from "./ProgressPie.styles";
import { ProgressPieProps } from "./ProgressPie.types";

const InvisibleWrapper = styled.div`
  display: flex;
`;

export const ProgressPie = ({
  progress,
  steps,
  fillColor,
  trackStrokeColor,
  showMenuHandler,
  unShowMenuHandler,
  progressColorUpTo15,
  progressColorUpTo45,
  progressColorUpTo70,
  progressColorUpTo100,
  successfulProgress,
}: ProgressPieProps): JSX.Element => {
  const [indicatorState, setIndicatorState] = useState(true);
  const [progressColor, setProgressColor] = useState<string | undefined>(
    "#e3e6e6"
  );

  let color = successfulProgress;
  const percentageProgress = (progress * 100) / steps;
  if (percentageProgress < 15) {
    color = progressColorUpTo15;
  } else if (percentageProgress < 45) {
    color = progressColorUpTo45;
  } else if (percentageProgress < 70) {
    color = progressColorUpTo70;
  } else if (percentageProgress < 100) {
    color = progressColorUpTo100;
  }

  useEffect(() => {
    setProgressColor(color);
    setIndicatorState(Boolean(progress));
  }, [progress, color]);

  return (
    <InvisibleWrapper
      aria-hidden="true"
      onClick={showMenuHandler}
      onMouseEnter={showMenuHandler}
      onMouseLeave={unShowMenuHandler}
    >
      <StyledProgressBar
        radius={20}
        progress={progress}
        steps={steps}
        rotate={90}
        fillColor={fillColor}
        strokeWidth={4}
        strokeColor={progressColor}
        strokeLinecap="butt"
        trackStrokeWidth={4}
        trackStrokeColor={trackStrokeColor}
      >
        <div className={`indicator ${!indicatorState ? "red-indicator" : ""}`}>
          <div>{progress}</div>
        </div>
      </StyledProgressBar>
    </InvisibleWrapper>
  );
};
