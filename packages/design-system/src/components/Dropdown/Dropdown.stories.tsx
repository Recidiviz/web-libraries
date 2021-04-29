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
import Toast, { ToastProvider, useToasts } from "../Toast/Toast";

export default {
  title: "Design System/Atoms/ButtonDropdown",
  component: Dropdown.Toggle,
  argTypes: {
    kind: {
      control: {
        type: "radio",
        options: ["primary", "secondary", "link"],
      },
    },
  },
  decorators: [
    (BaseStory) => (
      <ToastProvider>
        <BaseStory />
      </ToastProvider>
    ),
  ],
} as Meta;

const Template: Story = ({ children, kind, disabled, onClick }) => {
  const { addToast } = useToasts();

  return (
    <>
      <button type="button" style={{ margin: 10 }}>
        other focusable element
      </button>
      <Dropdown>
        <Dropdown.Toggle label="Report an issue with this case" />
        <Dropdown.Menu>
          <Dropdown.MenuItem
            label="Person is not in caseload"
            onClick={() => addToast("Caseload clicked")}
          />
          <Dropdown.MenuItem
            label="Person in custody"
            onClick={() => addToast("Custody clicked")}
          />
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: "Add to Calendar",
};
