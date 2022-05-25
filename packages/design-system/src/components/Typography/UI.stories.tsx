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

import { Meta, Story } from "@storybook/react";
import { rem } from "polished";
import React from "react";
import styled from "styled-components";
import { palette, spacing } from "../../styles";
import * as UITypographyComponents from "./UI";

export default {
  title: "Design System/Pages/Typography/UI Sandbox",
  argTypes: {
    component1: {
      control: "select",
      options: Object.keys(UITypographyComponents),
    },
    component2: {
      control: "select",
      options: Object.keys(UITypographyComponents),
    },
  },
} as Meta;

type UIComponentName = keyof typeof UITypographyComponents;

const ExampleGrid = styled.div`
  display: grid;
  grid-template-columns: max-content minmax(300px, min-content);
  gap: ${rem(spacing.xxl)};
`;

const ComponentListHeader = styled(UITypographyComponents.Sans14)`
  color: ${palette.slate60};
`;

export const UISandbox: Story<{
  component1: UIComponentName;
  component2: UIComponentName;
}> = ({ component1, component2 }) => {
  const FirstComponent = UITypographyComponents[component1];
  const SecondComponent = UITypographyComponents[component2];
  return (
    <ExampleGrid>
      <ComponentListHeader>
        How the two selected components look next to each other
      </ComponentListHeader>
      <ComponentListHeader>
        How text wraps within each component
      </ComponentListHeader>
      <div>
        <FirstComponent>Lorem ipsum dolor sit amet consectetur</FirstComponent>
        <SecondComponent>Aenean eleifend dictum pharetra.</SecondComponent>
      </div>
      <div>
        <FirstComponent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ultricies. 12345
        </FirstComponent>
      </div>
      <div />
      <div>
        <SecondComponent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ultricies. 12345
        </SecondComponent>
      </div>
    </ExampleGrid>
  );
};
UISandbox.args = {
  component1: "Serif24",
  component2: "Sans16",
};
