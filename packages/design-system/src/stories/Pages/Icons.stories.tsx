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
import styled from "styled-components";
import { Story, Meta } from "@storybook/react";
import { rem } from "polished";
import { Icon, IconProps } from "../../components/Icon/Icon";
import { IconSVG } from "../../components/Icon/IconSVG";
import { palette } from "../../styles";

export default {
  title: "Design System/Pages/Icons",
  argTypes: {
    fill: { control: "color" },
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
    rotate: {
      control: {
        type: "range",
        min: 0,
        max: 360,
        step: 10,
      },
    },
  },
} as Meta;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 24px;
`;

const IconGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 72px;
`;

const IconKind = styled.div`
  color: ${palette.text.caption};
  font-size: ${rem("17px")};
`;

const renderIconGridItem = ({
  kind,
  fill,
  height,
  width,
  rotate,
}: IconProps) => (
  <IconGridItem>
    <Icon
      kind={kind}
      fill={fill}
      height={height}
      width={width}
      rotate={rotate}
    />
    <IconKind>{kind}</IconKind>
  </IconGridItem>
);

const Template: Story<IconProps> = ({ fill, height, width, rotate }) => (
  <>
    <IconGrid>
      {Object.keys(IconSVG).map((kind) =>
        renderIconGridItem({ kind, fill, height, width, rotate })
      )}
    </IconGrid>
  </>
);

export const Icons = Template.bind({});
Icons.args = {
  fill: palette.signal.links,
  height: 32,
  width: 32,
  rotate: 0,
};
