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
import { useEffect, useState } from "react";
import { Story, Meta } from "@storybook/react";
import { Icon } from "../Icon";
import { Tabs, TabList, Tab, TabPanel } from "./index";

export default {
  title: "Design System/Atoms/Tabs",
  argTypes: {
    onSelect: { action: "onSelect" },
    selectedIndex: { type: "number" },
  },
  parameters: {
    controls: { hideNoControlsWarning: true },

    docs: {
      description: {
        component: `The tab feature actually comprises four related components that must be used together:
        \`Tabs\`, \`TabList\`, \`Tab\`, and \`TabPanel\`. The underlying functionality for these
        components is handled by [react-tabs](https://www.npmjs.com/package/react-tabs),
        which we have augmented with additional styles.`,
      },
    },
  },
} as Meta;

export const Primary: Story = () => (
  <Tabs>
    <TabList>
      <Tab>One</Tab>
      <Tab>The Second Tab</Tab>
      <Tab>
        <Icon kind="Star" size={24} />
      </Tab>
    </TabList>
    <TabPanel>
      <div>contents of first tab</div>
    </TabPanel>
    <TabPanel>
      <div>contents of second tab</div>
    </TabPanel>
    <TabPanel>
      <div>contents of third tab</div>
    </TabPanel>
  </Tabs>
);
Primary.storyName = "Tabs";

const ControlledTemplate: Story<{
  selectedIndex: number;
  onSelect: (index: number, lastIndex: number, event: Event) => void;
}> = ({ selectedIndex: selectedIndexArg, onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(selectedIndexArg);
  useEffect(() => {
    if (typeof selectedIndexArg === "number") {
      setSelectedIndex(selectedIndexArg);
    }
  }, [selectedIndexArg]);
  return (
    <Tabs
      selectedIndex={selectedIndex}
      onSelect={(index, lastIndex, event) => {
        onSelect(index, lastIndex, event);
        setSelectedIndex(index);
      }}
    >
      <TabList>
        <Tab>Beginning</Tab>
        <Tab>Middle</Tab>
        <Tab>End</Tab>
      </TabList>
      <TabPanel>
        <div>The quick brown fox ...</div>
      </TabPanel>
      <TabPanel>
        <div>... jumped over ...</div>
      </TabPanel>
      <TabPanel>
        <div>... the lazy dog.</div>
      </TabPanel>
    </Tabs>
  );
};

export const ControlledTabs = ControlledTemplate.bind({});
ControlledTabs.args = {
  selectedIndex: 1,
};
ControlledTabs.argTypes = { onSelect: { action: "onSelect" } };
ControlledTabs.parameters = {
  docs: {
    description: {
      story: `Tab components are uncontrolled by default but can be controlled by
        providing \`onSelect\` and \`selectedIndex\` props to \`Tabs\`.`,
    },
  },
};
