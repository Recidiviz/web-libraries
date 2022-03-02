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
import TooltipTrigger from "./TooltipTrigger";
import { Button } from "../Button";

export default {
  title: "Design System/Components/Tooltip Trigger",
  component: TooltipTrigger,
  parameters: {
    docs: {
      // Render inside an iframe so that `position: fixed`; is contained
      inlineStories: false,
      iframeHeight: "300px",
    },
  },

  argTypes: {
    show: {
      description: "Tooltip visibility",
      control: "boolean",
    },
    contents: {
      description: "Tooltip contents",
      control: "text",
    },
  },
} as Meta;

const Template: Story = ({ contents }) => (
  <TooltipTrigger
    // eslint-disable-next-line react/no-danger
    title={<span dangerouslySetInnerHTML={{ __html: contents }} />}
  >
    <Button>Hover me</Button>
  </TooltipTrigger>
);

export const DefaultStory = Template.bind({});
DefaultStory.args = { contents: "This is a tooltip" };
DefaultStory.storyName = "Tooltip Trigger";
