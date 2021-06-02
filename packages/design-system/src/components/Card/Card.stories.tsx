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
import { CardSection, Card, CardProps } from "./index";
import { spacing } from "../../styles";

export default {
  title: "Design System/Atoms/Card",
  component: Card,
  argTypes: {
    stacked: {
      control: "boolean",
    },
  },
} as Meta;

const Template: Story<CardProps> = ({ stacked }: CardProps) => (
  <Card stacked={stacked}>
    <CardSection style={{ padding: spacing.md }}>First section</CardSection>
    <CardSection style={{ padding: spacing.md }}>Second section</CardSection>
    <CardSection style={{ padding: spacing.md }}>Third section</CardSection>
  </Card>
);

export const HorizontalCard = Template.bind({});

export const StackedCard = Template.bind({});
StackedCard.args = {
  stacked: true,
};
