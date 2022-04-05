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
import { Story, Meta } from "@storybook/react";
import styled from "styled-components";
import { Icon as IconComponent, IconProps, iconToDataURI } from "./Icon";
import { IconSVG } from "./IconSVG";
import { palette } from "../../styles";

export default {
  title: "Design System/Atoms/Icon",
  component: IconComponent,
  argTypes: {
    color: {
      control: "color",
      defaultValue: palette.signal.highlight,
    },
    kind: {
      control: {
        type: "radio",
        options: Object.keys(IconSVG),
      },
    },
    height: {
      control: {
        type: "range",
        step: 8,
      },
    },
    width: {
      control: {
        type: "range",
        step: 8,
      },
    },
  },
} as Meta;

const IconButton = styled.button.attrs({ type: "button" })`
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80% 80%;
  border-radius: 4px;
  color: ${palette.pine1};
  text-shadow: -1px 1px white;
  font-size: 1.2em;
  font-weight: bold;
  display: block;
  height: 72px;
  width: 72px;
`;

const Template: Story<IconProps> = ({ kind, color, height, width }) => (
  <>
    <IconComponent kind={kind} color={color} height={height} width={width} />
    <hr />
    Icons can also be used as background images:
    <IconButton
      style={{
        backgroundImage: iconToDataURI(
          <IconComponent kind={kind} fill={color} />
        ),
      }}
    >
      Press me!
    </IconButton>
  </>
);

export const Icon = Template.bind({});
Icon.args = {
  fill: palette.signal.links,
  kind: "NeedsContact",
  height: 32,
  width: 32,
};
