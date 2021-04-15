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
import React from "react";
import { Story, Meta } from "@storybook/react";
import { ProgressPieProps } from "./ProgressPie.types";
import { ProgressPie } from "./ProgressPie";

export default {
  title: "Design System/Atoms/ProgressBar",
  component: ProgressPie,
  argTypes: {
    fillColor: { control: "color" },
    trackStrokeColor: { control: "color" },
    progressColorUpTo15: { control: "color" },
    progressColorUpTo45: { control: "color" },
    progressColorUpTo70: { control: "color" },
    progressColorUpTo100: { control: "color" },
    successfulProgress: { control: "color" },
  },
} as Meta;

const Template: Story<ProgressPieProps> = ({
  showMenuHandler,
  steps,
  progress,
  fillColor,
  trackStrokeColor,
  progressColorUpTo15,
  progressColorUpTo45,
  progressColorUpTo70,
  progressColorUpTo100,
  successfulProgress,
}) => (
  <ProgressPie
    showMenuHandler={showMenuHandler}
    progress={progress}
    steps={steps}
    fillColor={fillColor}
    trackStrokeColor={trackStrokeColor}
    progressColorUpTo15={progressColorUpTo15}
    progressColorUpTo45={progressColorUpTo45}
    progressColorUpTo70={progressColorUpTo70}
    progressColorUpTo100={progressColorUpTo100}
    successfulProgress={successfulProgress}
  />
);

export const ProgressPieExample = Template.bind({});
ProgressPieExample.args = {
  steps: 7,
  progress: 0,
  fillColor: "transparent",
  trackStrokeColor: "#e3e6e6",
  progressColorUpTo15: "#BA4F4F",
  progressColorUpTo45: "#D9A95F",
  progressColorUpTo70: "#90AEB5",
  progressColorUpTo100: "#4693BE",
  successfulProgress: "#25B894",
};
