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
import { Button } from "../Button/Button";
import {
  Toast as ToastComponent,
  ToastProps,
  ToastProvider,
  useToasts,
} from "./Toast";

export default {
  title: "Design System/Atoms/Toast",
  component: ToastProvider,
  argTypes: {
    children: { control: "text" },
    appearance: {
      control: {
        type: "radio",
        options: ["success", "error", "info", "warning"],
      },
    },

    onClick: { action: "clicked" },
  },
  decorators: [
    (BaseStory) => (
      <ToastProvider>
        <BaseStory />
      </ToastProvider>
    ),
  ],
} as Meta;

const Template: Story<ToastProps> = ({ appearance, children }) => {
  const { addToast } = useToasts();
  return (
    <>
      <Button
        onClick={() => {
          addToast(children, { appearance });
        }}
      >
        Add Toast
      </Button>
      <ToastComponent appearance={appearance}>{children}</ToastComponent>
    </>
  );
};

export const Toast = Template.bind({});
Toast.args = {
  children:
    "This is a long-form description of the action that most recently transpired.",
  appearance: "success",
};
