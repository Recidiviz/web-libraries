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
import * as UITypographyComponents from "./UI";
import * as ArticleTypographyComponents from "./Article";
import { palette, spacing } from "../../styles";
import { Sans12, Sans14, Sans16, Sans24, Serif24, Serif34 } from "./UI";
import { styles, TypographyStyles } from "./styles";

export default {
  title: "Design System/Pages/Typography",
} as Meta;

const ComponentList = styled.div`
  align-items: flex-start;
  column-gap: ${rem(88)};
  display: grid;
  grid-template-areas: "intro intro intro";
  grid-template-columns: auto auto 3fr;
  row-gap: ${rem(72)};
`;

const ComponentIntro = styled.div`
  grid-area: intro;
  margin-bottom: ${rem(80)};
`;

const ComponentListHeader = styled(Sans14)`
  color: ${palette.slate60};
`;

const ComponentAttributes = styled(Sans14)`
  color: ${palette.slate60};
  white-space: pre-line;
`;

const Examples = styled.div`
  display: grid;
  row-gap: ${rem(spacing.lg)};
`;

const ForceWrap = styled.div`
  * {
    max-width: 20em;
  }
`;

const WrapHeader = styled.div`
  * {
    max-width: 15em;
  }
`;

const UIComponentsRanked = [Serif34, Serif24, Sans24, Sans16, Sans14, Sans12];

type TypographyComponent = typeof UIComponentsRanked[number];

function displayStyles(rawStyle: TypographyStyles[keyof TypographyStyles]) {
  const propertyBreak = /;\s+/g;
  const remValue = /((\d+)|(\d+\.\d+))rem/g;
  return rawStyle
    .join("")
    .trim()
    .replace(propertyBreak, ";\n")
    .replace(remValue, (_, p1) => {
      return `${parseFloat(p1) * 16}px`;
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
      <ComponentListHeader>Examples</ComponentListHeader>
      {components?.map((Component) => (
        <React.Fragment key={Component.displayName}>
          <Component>{Component.displayName}</Component>
          <ComponentAttributes>
            {displayStyles(
              styles[Component.displayName as keyof typeof styles]
            )}
          </ComponentAttributes>
          <div>{example(Component)}</div>
        </React.Fragment>
      ))}
    </ComponentList>
  );
};

function juxtaposeUi(Component: TypographyComponent): React.ReactNode {
  const DUMMY_TEXT = "Lorem ipsum";
  const selfIndex = UIComponentsRanked.indexOf(Component);

  return (
    <Examples>
      {UIComponentsRanked.map((OtherComponent, index) => {
        if (index > selfIndex) {
          return (
            <div key={OtherComponent.displayName}>
              <Component>
                {DUMMY_TEXT} {Component.displayName?.slice(-2)}
              </Component>
              <OtherComponent>
                {DUMMY_TEXT} {OtherComponent.displayName?.slice(-2)}
              </OtherComponent>
            </div>
          );
        }
        if (index < selfIndex) {
          return (
            <div key={OtherComponent.displayName}>
              <OtherComponent>
                {DUMMY_TEXT} {OtherComponent.displayName?.slice(-2)}
              </OtherComponent>
              <Component>
                {DUMMY_TEXT} {Component.displayName?.slice(-2)}
              </Component>
            </div>
          );
        }
        return null;
      })}
      <div>
        <ForceWrap>
          <Component>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ultricies. 12345
          </Component>
        </ForceWrap>
      </div>
    </Examples>
  );
}

export const UI: Story = () => (
  <TypographyComponentsTemplate
    components={Object.values(UITypographyComponents).reverse()}
    example={juxtaposeUi}
  />
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
        dignissim pretium dui, ut blandit dolor blandit at.
        <p>
          This is a <code>&lt;p&gt;</code> nested inside the{" "}
          {Component.displayName}. It should have the same paragraph spacing as
          adjacent {Component.displayName} tags. Duis efficitur sit amet arcu
          quis euismod. Mauris venenatis pharetra augue, quis rutrum velit
          volutpat et.
        </p>
      </Component>
      <Component>
        This is a second {Component.displayName}. praesent id lectus finibus,
        convallis magna et, tempor ipsum. Nulla tempus commodo lacus, at
        pulvinar libero suscipit sit amet.
      </Component>
      <Component>
        This is a third {Component.displayName}. Suspendisse tristique felis ut
        turpis fermentum interdum. Curabitur luctus odio quis neque viverra
        tincidunt.
      </Component>
    </>
  );
}

export const Article: Story = () => (
  <TypographyComponentsTemplate
    components={Object.values(ArticleTypographyComponents)}
    example={articleExample}
  >
    <ArticleTypographyComponents.Header88>
      Typography / Articles
    </ArticleTypographyComponents.Header88>
    <ArticleTypographyComponents.Body32>
      These styles are to be used for long-form text and narrative. For example,
      these are the styles used in our Spotlight product and the Methodology
      pages of Pathways.
    </ArticleTypographyComponents.Body32>
  </TypographyComponentsTemplate>
);
