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
import { DrawerModal as DrawerModalComponent } from "./DrawerModal";
import { ModalProps } from "./Modal";

export default {
  title: "Design System/Components/DrawerModal",
  component: DrawerModalComponent,
  parameters: {
    controls: {
      include: ["width", "isOpen"],
    },
    docs: {
      // Render modal inside an iframe so that `position: fixed`; is contained
      inlineStories: false,
      iframeHeight: "300px",
    },
  },
  argTypes: {
    isOpen: {
      description: "Toggles modal open/close",
      type: "boolean",
    },
    width: {
      description:
        "Sets the `width` of the modal. If not explicitly set, it defaults to a (responsive) width of `555`px",
      type: "number",
    },
  },
} as Meta;

const Template: Story<ModalProps & { width?: number }> = ({
  width,
  isOpen,
}) => {
  return (
    <DrawerModalComponent width={width} isOpen={isOpen}>
      Hello, this is a blank and unpadded Drawer Modal...
      <h3 style={{ padding: 20 }}>
        ...where you can add your own custom-styled components.
      </h3>
    </DrawerModalComponent>
  );
};

export const DrawerModal: Story<
  ModalProps & { width?: number }
> = Template.bind({});

DrawerModal.args = {
  width: 300,
  isOpen: true,
};

DrawerModal.storyName = "DrawerModal";
