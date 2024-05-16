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

import React from "react";
import { Story, Meta } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { palette } from "../../styles";

export default {
  title: "Design System/Components/Tooltip",
  argTypes: {
    contents: {
      description: "Tooltip contents",
      control: "text",
    },
    maxWidth: {
      description: "Force tooltip to wrap at this width",
      control: "number",
    },
    backgroundColor: {
      control: "color",
      defaultValue: palette.signal.tooltip,
    },
  },
} as Meta;

const Template: Story = ({ contents, maxWidth, backgroundColor }) => (
  <Tooltip
    backgroundColor={backgroundColor}
    maxWidth={maxWidth}
    dangerouslySetInnerHTML={{ __html: contents }}
  />
);

export const DefaultStory = Template.bind({});
DefaultStory.args = { contents: "This is a tooltip" };
DefaultStory.storyName = "Tooltip";

export const TooltipWithMaxWidth = Template.bind({});
TooltipWithMaxWidth.args = {
  contents:
    "This is a tooltip with contents that are too long to fit one on line",
  maxWidth: 250,
};

export const TooltipWithCustomBackgroundColor = Template.bind({});
TooltipWithCustomBackgroundColor.args = {
  contents: "This is a tooltip with custom background color",
  backgroundColor: palette.pine1,
};
