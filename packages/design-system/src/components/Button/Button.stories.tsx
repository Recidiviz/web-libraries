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
import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { ButtonProps } from "./Button.types";
import { Button } from "./Button";

export default {
  title: "Design System/Atoms/Button",
  component: Button,
  argTypes: {
    kind: {
      control: {
        type: "radio",
        options: ["primary", "secondary", "link"],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = ({
  children,
  kind,
  disabled,
  onClick,
}) => (
  <Button kind={kind} onClick={onClick} disabled={disabled}>
    {children}
  </Button>
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: "Add to Calendar",
  kind: "primary",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = { children: "See Details", kind: "secondary" };

export const LinkButton = Template.bind({});
LinkButton.args = { children: "See Details", kind: "link" };
