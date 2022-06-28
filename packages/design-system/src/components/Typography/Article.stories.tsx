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
import React from "react";
import * as ArticleTypographyComponents from "./Article";

export default {
  title: "Design System/Pages/Typography/Article Sandbox",
  argTypes: {
    heading: {
      control: "select",
      options: Object.keys(ArticleTypographyComponents).filter((name) =>
        name.startsWith("Header")
      ),
    },
    body: {
      control: "select",
      options: Object.keys(ArticleTypographyComponents).filter((name) =>
        name.startsWith("Body")
      ),
    },
  },
} as Meta;

type ArticleComponentName = keyof typeof ArticleTypographyComponents;

export const ArticleSandbox: Story<{
  heading: ArticleComponentName;
  body: ArticleComponentName;
}> = ({ heading, body }) => {
  const HeadingComponent = ArticleTypographyComponents[heading];
  const BodyComponent = ArticleTypographyComponents[body];
  return (
    <div>
      <HeadingComponent>
        Lorem ipsum dolor sit amet consectetur
      </HeadingComponent>
      <BodyComponent>
        Aenean eleifend dictum pharetra.{" "}
        <a
          href="https://recidiviz.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Suspendisse vel malesuada dolor.
        </a>{" "}
        In dignissim pretium dui, ut blandit dolor blandit at.
      </BodyComponent>
      <BodyComponent>
        This is a second {BodyComponent.displayName}. It supports{" "}
        <strong>bold text</strong>. Praesent id lectus finibus, convallis magna
        et, tempor ipsum. Nulla tempus commodo lacus, at pulvinar libero
        suscipit sit amet.
        <ul>
          <li>You can nest an unordered list</li>
          <li>inside a {BodyComponent.displayName}!</li>
        </ul>
      </BodyComponent>
      <BodyComponent>
        <p>
          These are multiple paragraphs nested inside a third{" "}
          {BodyComponent.displayName}. They should look the same as adjacent
          components. Duis efficitur sit amet arcu quis euismod. Mauris
          venenatis pharetra augue, quis rutrum velit volutpat et.
        </p>
        <p>
          Convallis magna et, tempor ipsum. Nulla tempus commodo lacus, at
          pulvinar libero suscipit sit amet.
        </p>
        <p>
          Suspendisse tristique felis ut turpis fermentum interdum. Curabitur
          luctus odio quis neque viverra tincidunt. Convallis magna et, tempor
          ipsum. Nulla tempus commodo lacus, at pulvinar libero suscipit sit
          amet.
        </p>
      </BodyComponent>
    </div>
  );
};
ArticleSandbox.args = {
  heading: "Header56",
  body: "Body24",
};
