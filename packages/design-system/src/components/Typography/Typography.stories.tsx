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
import { rem } from "polished";
import styled from "styled-components";
import prettier from "prettier";
import parserPostCSS from "prettier/parser-postcss";
import * as UITypographyComponents from "./UI";
import * as ArticleTypographyComponents from "./Article";
import { palette, typography, TypographyStyles } from "../../styles";

export default {
  title: "Design System/Pages/Typography",
} as Meta;

const ComponentList = styled.div`
  align-items: start;
  column-gap: ${rem(88)};
  display: grid;
  grid-template-areas: "intro intro intro";
  grid-template-columns: auto auto 1fr;
  row-gap: ${rem(72)};
`;

const ComponentIntro = styled.div`
  grid-area: intro;
  margin-bottom: ${rem(80)};
`;

const ComponentListHeader = styled(UITypographyComponents.Sans14)`
  color: ${palette.slate60};
`;

const ComponentAttributes = styled(UITypographyComponents.Sans14)`
  color: ${palette.slate60};
  white-space: pre-wrap;
`;

const WrapHeader = styled.div`
  * {
    max-width: 15em;
  }
`;

type TypographyComponent = typeof UITypographyComponents[keyof typeof UITypographyComponents];

function displayStyles(rawStyle: TypographyStyles[keyof TypographyStyles]) {
  const remValue = /((\d+)|(\d+\.\d+))rem/g;
  const styleTransformed = rawStyle.join("").replace(remValue, (_, p1) => {
    return `${parseFloat(p1) * 16}px`;
  });
  return prettier.format(styleTransformed, {
    parser: "css",
    plugins: [parserPostCSS],
  });
}

const TypographyComponentsTemplate: React.FC<{
  components: TypographyComponent[];
  example: (c: TypographyComponent) => React.ReactNode;
}> = ({ children, components, example }) => {
  return (
    <ComponentList>
      {!!children && <ComponentIntro>{children}</ComponentIntro>}
      <ComponentListHeader>Name</ComponentListHeader>
      <ComponentListHeader>Attributes</ComponentListHeader>
      <ComponentListHeader>Example</ComponentListHeader>
      {components?.map((Component) => (
        <React.Fragment key={Component.displayName}>
          <Component>{Component.displayName}</Component>
          <ComponentAttributes
            dangerouslySetInnerHTML={{
              __html: displayStyles(
                typography[Component.displayName as keyof typeof typography]
              ),
            }}
          />
          <div>{example(Component)}</div>
        </React.Fragment>
      ))}
    </ComponentList>
  );
};

function UIExample(Component: TypographyComponent): React.ReactNode {
  return (
    <div>
      <Component>Lorem ipsum dolor sit amet</Component>
    </div>
  );
}

export const UI: Story = () => (
  <TypographyComponentsTemplate
    components={Object.values(UITypographyComponents).reverse()}
    example={UIExample}
  >
    <ArticleTypographyComponents.Header88>
      Typography / UI
    </ArticleTypographyComponents.Header88>
    <ArticleTypographyComponents.Body32>
      These styles are to be used for most UI elements: labels, tables, inputs,
      charts, buttons, etc. — anything but long-form text.
    </ArticleTypographyComponents.Body32>
  </TypographyComponentsTemplate>
);

function articleExample(Component: TypographyComponent): React.ReactNode {
  if (Component.displayName?.includes("Header")) {
    return (
      <WrapHeader>
        <Component>Lorem ipsum dolor sit amet consectetur</Component>
      </WrapHeader>
    );
  }
  return (
    <>
      <Component>
        Aenean eleifend dictum pharetra. Suspendisse vel malesuada dolor. In
        dignissim pretium dui, ut blandit dolor blandit at. Nulla tempus commodo
        lacus, at pulvinar libero suscipit sit amet.
      </Component>
    </>
  );
}

export const Articles: Story = () => (
  <TypographyComponentsTemplate
    components={Object.values(ArticleTypographyComponents)}
    example={articleExample}
  >
    <ArticleTypographyComponents.Header88>
      Typography / Articles
    </ArticleTypographyComponents.Header88>
    <ArticleTypographyComponents.Body32>
      These styles are to be used for long-form text and narrative. For example,
      they are used in Spotlight data narratives and the Methodology pages of
      Pathways.
    </ArticleTypographyComponents.Body32>
  </TypographyComponentsTemplate>
);
