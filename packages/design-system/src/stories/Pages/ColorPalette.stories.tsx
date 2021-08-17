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
import styled from "styled-components";
import { Meta, Story } from "@storybook/react";
import { rem } from "polished";
import { H1, H4 } from "../../components/Typography";
import { palette, spacing } from "../../styles";

interface SwatchProps {
  color: string;
  name: string;
}

interface SwatchPreviewProps {
  color: string;
}

const SwatchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  margin-bottom: ${rem(spacing.xxs)};
  font-size: ${rem("13px")};
  letter-spacing: -1%;
`;

const SwatchPreview = styled.div<SwatchPreviewProps>`
  background-color: ${(props) => props.color};
  border-radius: 3px;
  height: 48px;
  width: 48px;
  margin-right: ${rem(spacing.sm)};
`;

const SwatchName = styled.div`
  font-weight: bold;
`;

const SwatchCode = styled.div`
  font-size: 0.9em;
  color: ${palette.text.caption};
`;

interface SwatchGridProps {
  columns?: number;
  rows?: number;
}

const SwatchGrid = styled.div<SwatchGridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 3}, 1fr);
  grid-template-rows: ${(props) =>
    props.rows ? `repeat(${props.rows}, 1fr)` : "auto-flow"}
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  margin-bottom: 32px;
`;

const Swatch = ({ name, color }: SwatchProps) => (
  <SwatchContainer>
    <SwatchPreview color={color} />
    <div>
      <SwatchName>{name}</SwatchName>
      <SwatchCode>
        {color
          .replace(/rgba?\(/g, "")
          .replace(")", "")
          .replace(/ /g, "")}
      </SwatchCode>
    </div>
  </SwatchContainer>
);

const CaptionHeading = styled(H4)`
  color: ${palette.slate85};
  border-bottom: 1px solid ${palette.slate20};
  margin-bottom: ${rem(spacing.sm)};
`;

const CaptionDescription = styled.div`
  color: ${palette.slate85};
  font-size: ${rem("13px")};
  margin-bottom: ${rem(spacing.sm)};
`;

const PaletteGrid = styled.div`
  display: flex;
`;

const Palette = styled.div`
  flex-basis: 154px;
  margin-right: ${rem(spacing.md)};
`;

export default {
  title: "Design System/Pages/Color Palette",
} as Meta;

const Template: Story = () => (
  <div>
    <H1>Color Palette</H1>

    <PaletteGrid>
      <Palette>
        <CaptionHeading>Marble</CaptionHeading>
        <CaptionDescription>
          Used mainly for backgrounds and for knockout elements
        </CaptionDescription>
        <Swatch name="marble-1" color={palette.marble1} />
        <Swatch name="marble-2" color={palette.marble2} />
        <Swatch name="marble-3" color={palette.marble3} />
        <Swatch name="marble-4" color={palette.marble4} />
        <Swatch name="marble-5" color={palette.marble5} />
      </Palette>

      <Palette>
        <CaptionHeading>Slate</CaptionHeading>
        <CaptionDescription>
          Used mainly for UI elements such as text, icons, and borders
        </CaptionDescription>
        <Swatch name="slate-10" color={palette.slate10} />
        <Swatch name="slate-20" color={palette.slate20} />
        <Swatch name="slate-30" color={palette.slate30} />
        <Swatch name="slate-60" color={palette.slate60} />
        <Swatch name="slate-70" color={palette.slate70} />
        <Swatch name="slate-80" color={palette.slate80} />
        <Swatch name="slate-85" color={palette.slate85} />
        <Swatch name="slate" color={palette.slate} />
      </Palette>

      <Palette>
        <CaptionHeading>Pine</CaptionHeading>
        <CaptionDescription>
          Used mainly for UI elements such as text or dark backgrounds
        </CaptionDescription>
        <Swatch name="pine-1" color={palette.pine1} />
        <Swatch name="pine-2" color={palette.pine2} />
        <Swatch name="pine-3" color={palette.pine3} />
        <Swatch name="pine-4" color={palette.pine4} />
      </Palette>

      <Palette>
        <CaptionHeading>Signal</CaptionHeading>
        <CaptionDescription>
          Used mainly for system alerts, error states, links, tooltips, and
          highlights
        </CaptionDescription>
        <Swatch name="signal-links" color={palette.signal.links} />
        <Swatch name="signal-highlight" color={palette.signal.highlight} />
        <Swatch name="signal-blue" color={palette.signal.notification} />
        <Swatch name="signal-red" color={palette.signal.error} />
        <Swatch name="signal-tooltip" color={palette.signal.tooltip} />
        <Swatch name="signal-selected" color={palette.signal.selected} />
      </Palette>
    </PaletteGrid>

    <CaptionHeading>Text</CaptionHeading>
    <SwatchGrid>
      <Swatch name="Text/Normal" color={palette.text.normal} />
      <Swatch name="Text/Links" color={palette.text.links} />
      <Swatch name="Text/Caption" color={palette.text.caption} />
    </SwatchGrid>

    <CaptionHeading>White</CaptionHeading>
    <SwatchGrid>
      <Swatch name="white80" color={palette.white80} />
      <Swatch name="white90" color={palette.white90} />
      <Swatch name="white" color={palette.white} />
    </SwatchGrid>

    <CaptionHeading>Data Visualizations</CaptionHeading>
    <SwatchGrid columns={6} rows={2}>
      <Swatch name="forest-1" color={palette.data.forest1} />
      <Swatch name="forest-2" color={palette.data.forest2} />
      <Swatch name="gold-1" color={palette.data.gold1} />
      <Swatch name="gold-2" color={palette.data.gold2} />
      <Swatch name="crimson-1" color={palette.data.crimson1} />
      <Swatch name="crimson-2" color={palette.data.crimson2} />

      <Swatch name="indigo-1" color={palette.data.indigo1} />
      <Swatch name="indigo-2" color={palette.data.indigo2} />
      <Swatch name="teal-1" color={palette.data.teal1} />
      <Swatch name="teal-2" color={palette.data.teal2} />
      <Swatch name="salmon-1" color={palette.data.salmon1} />
      <Swatch name="salmon-2" color={palette.data.salmon2} />
    </SwatchGrid>
  </div>
);

export const ColorPalette = Template.bind({});
