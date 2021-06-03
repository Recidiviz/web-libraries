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
import { Meta, Story } from "@storybook/react";
import * as React from "react";
import {
  TitleXXL,
  TitleXL,
  Subtitle,
  H1,
  H2,
  H3,
  H4,
} from "../../components/Typography";

export default {
  title: "Design System/Pages/Typography",
} as Meta;

const Template: Story = () => (
  <div>
    <TitleXXL>Title/Heading XXL</TitleXXL>
    <TitleXL>Title/Heading XL</TitleXL>
    <Subtitle>Subtitle</Subtitle>
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <TitleXL as="h6">`as` polymorphic h6 tag</TitleXL>
  </div>
);

export const Typography = Template.bind({});
