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
import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { ToastProvider, useToasts } from "../Toast";
import { TooltipTrigger } from "../Tooltip";
import { IconSVG } from "../Icon";
import { DropdownToggle, DropdownToggleProps } from "./DropdownToggle";
import { DropdownMenu, DropdownMenuProps } from "./DropdownMenu";
import { DropdownMenuLabel } from "./DropdownMenuLabel";
import { DropdownMenuItem } from "./DropdownMenuItem";

export default {
  title: "Design System/Atoms/Dropdown",
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
      name: "DropdownMenu alignment",
      type: "string",
      options: ["left", "right"],
      control: {
        type: "select",
      },
    },
    kind: {
      name: "DropdownToggle kind",
      type: "string",
      options: ["secondary", "link", "primary", "borderless"],
      control: { type: "select" },
      defaultValue: "secondary",
    },
    shape: {
      name: "DropdownToggle shape",
      type: "string",
      options: ["block", "pill"],
      control: { type: "select" },
      defaultValue: "block",
    },
    icon: {
      name: "DropdownToggle icon",
      type: "string",
      options: Object.keys(IconSVG),
      control: { type: "select" },
    },
    showCaret: {
      name: "DropdownToggle showCaret",
      type: "boolean",
    },
  },
} as Meta;

type CombinedArgs = DropdownToggleProps & DropdownMenuProps;

const Template: Story<CombinedArgs> = ({
  alignment,
  children,
  kind,
  shape,
  icon,
  showCaret,
}) => {
  const { addToast } = useToasts();

  return (
    <>
      <button type="button" style={{ margin: 10 }}>
        other focusable element
      </button>
      <Dropdown>
        <DropdownToggle
          kind={kind}
          shape={shape}
          icon={icon}
          showCaret={showCaret}
        >
          {children}
        </DropdownToggle>
        <DropdownMenu alignment={alignment}>
          <DropdownMenuLabel>Remind Me In</DropdownMenuLabel>
          <DropdownMenuItem label="7 days" onClick={() => addToast("7 days")} />
          <DropdownMenuItem
            label="14 days"
            onClick={() => addToast("14 days")}
          />
          <TooltipTrigger contents="One Month">
            <DropdownMenuItem
              label="30 days"
              onClick={() => addToast("30 days")}
            />
          </TooltipTrigger>
          <DropdownMenuLabel>Other Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => addToast("Recidiviz")}>
            Say “Recidiviz”
          </DropdownMenuItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export const ButtonDropdown: Story<CombinedArgs> = Template.bind({});
ButtonDropdown.args = { children: "Create a reminder" };

export const IconButtonDropdown: Story<CombinedArgs> = Template.bind({});
IconButtonDropdown.args = {
  icon: "Clock",
};
