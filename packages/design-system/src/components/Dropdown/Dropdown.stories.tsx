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
import Dropdown from "./Dropdown";
import { ToastProvider, useToasts } from "../Toast/Toast";
import { IconSVG } from "../Icon/IconSVG";
import { ToggleProps } from "./DropdownToggle";
import { MenuProps } from "./DropdownMenu";

export default {
  title: "Design System/Atoms/ButtonDropdown",
  component: Dropdown,
  decorators: [
    (BaseStory) => (
      <ToastProvider>
        <BaseStory />
      </ToastProvider>
    ),
  ],
  argTypes: {
    alignment: {
      name: "Dropdown.Menu alignment",
      type: "string",
      options: ["left", "right"],
      control: {
        type: "select",
      },
    },
    ariaLabel: {
      name: "Dropdown.Toggle ariaLabel",
      type: "string",
    },
    kind: {
      name: "Dropdown.Toggle kind",
      type: "string",
      options: ["secondary", "link", "primary", "borderless"],
      control: { type: "select" },
      defaultValue: "secondary",
    },
    shape: {
      name: "Dropdown.Toggle shape",
      type: "string",
      options: ["block", "pill"],
      control: { type: "select" },
      defaultValue: "block",
    },
    icon: {
      name: "Dropdown.Toggle icon",
      type: "string",
      options: Object.keys(IconSVG),
      control: { type: "select" },
    },
  },
} as Meta;

type CombinedArgs = ToggleProps & MenuProps;

const Template: Story<CombinedArgs> = ({
  alignment,
  ariaLabel,
  children,
  kind,
  shape,
  icon,
}) => {
  const { addToast } = useToasts();

  return (
    <>
      <button type="button" style={{ margin: 10 }}>
        other focusable element
      </button>
      <Dropdown>
        <Dropdown.Toggle
          ariaLabel={ariaLabel}
          kind={kind}
          shape={shape}
          icon={icon}
        >
          {children}
        </Dropdown.Toggle>
        <Dropdown.Menu alignment={alignment}>
          <Dropdown.MenuLabel>Remind Me In</Dropdown.MenuLabel>
          <Dropdown.MenuItem
            label="7 days"
            onClick={() => addToast("7 days")}
          />
          <Dropdown.MenuItem
            label="14 days"
            onClick={() => addToast("14 days")}
          />
          <Dropdown.MenuItem
            label="30 days"
            onClick={() => addToast("30 days")}
          />
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export const ButtonDropdown: Story<CombinedArgs> = Template.bind({});
ButtonDropdown.args = { children: "Create a reminder" };

export const IconButtonDropdown: Story<CombinedArgs> = Template.bind({});
IconButtonDropdown.args = {
  ariaLabel: "Create a reminder",
  icon: "Clock",
};
