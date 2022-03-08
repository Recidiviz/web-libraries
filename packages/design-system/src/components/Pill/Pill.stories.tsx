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
import { Pill as PillComponent, PillProps } from "./Pill";

export default {
  title: "Design System/Components/Pill",
  component: PillComponent,
  parameters: {
    controls: {
      include: ["innerText", "color", "filled", "textColor"],
    },
  },
  argTypes: {
    innerText: {
      type: "string",
    },
    color: {
      description:
        "Sets color for `background-color` if `filled` is true, `border-color` if `filled` is false or is not explicitly defined",
      type: "string",
      control: "color",
    },
    filled: {
      description:
        "Fills `background-color` when true. True if set explicitly or defined as a prop `<Pill filled={true}>` or `<Pill filled>`, false if set explicitly or undefined as a prop `<Pill filled={false}>` or `<Pill>`",
      type: "boolean",
    },
    textColor: {
      description:
        "Sets text `color`. If `textColor` is undefined as a prop and `filled` is true, it will default to a light text color. This can be overridden by setting `textColor` to a color value",
      type: "string",
      control: "color",
    },
  },
} as Meta;

const Template: Story<PillProps & { innerText: string }> = ({
  color,
  filled,
  textColor,
  innerText,
}) => {
  return (
    <PillComponent color={color} filled={filled} textColor={textColor}>
      {innerText}
    </PillComponent>
  );
};

export const Pill: Story<PillProps & { innerText: string }> = Template.bind({});

Pill.args = {
  innerText: "I am a Pill",
  color: "rgb(53, 83, 98)",
  filled: false,
  textColor: undefined,
};
