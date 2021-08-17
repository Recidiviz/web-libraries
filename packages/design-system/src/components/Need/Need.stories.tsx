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
import { Need as NeedComponent, NeedProps, NeedState } from "./Need";

export default {
  title: "Design System/Case Triage/Need",
  component: NeedComponent,
  argTypes: {
    state: {
      control: {
        type: "radio",
        options: Object.values(NeedState),
      },
    },
    kind: {
      control: {
        type: "radio",
        options: ["NeedsContact", "NeedsEmployment", "NeedsRiskAssessment"],
      },
    },
  },
} as Meta;

const Template: Story<NeedProps> = ({ kind, state }: NeedProps) => (
  <NeedComponent kind={kind} state={state} />
);

export const Need = Template.bind({});
Need.args = {
  kind: "NeedsContact",
  state: NeedState.NOT_MET,
};
