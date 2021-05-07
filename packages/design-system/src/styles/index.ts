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
import { rgb, rgba } from "polished";

const slate = "rgb(53, 83, 98)";
const white = rgb(255, 255, 255);

const palette: Record<string, any> = {
  /* Marble
     Used mainly for backgrounds and for knockout elements */
  marble1: rgb(255, 255, 255),
  marble2: rgb(249, 250, 250),
  marble3: rgb(244, 245, 245),
  marble4: rgb(239, 241, 241),
  marble5: rgb(233, 237, 237),

  /* Slate
     Used mainly for UI elements such as text, icons, and borders */
  slate,
  slate10: rgba(slate, 0.1),
  slate20: rgba(slate, 0.2),
  slate30: rgba(slate, 0.3),
  slate60: rgba(slate, 0.6),
  slate70: rgba(slate, 0.7),
  slate80: rgba(slate, 0.8),
  slate85: rgba(slate, 0.85),

  /* Pine
     Used mainly for UI elements such as text or dark backgrounds */
  pine1: rgb(1, 35, 34),
  pine2: rgb(0, 51, 49),
  pine3: rgb(0, 65, 62),
  pine4: rgb(1, 76, 72),

  white,
  white90: rgba(white, 0.9),
  white80: rgba(white, 0.8),
};

/* Signal
   Used mainly for system alerts, error states, links, tooltips, and highlights */
palette.signal = {
  links: rgb(0, 108, 103),
  highlight: rgb(37, 184, 148),
  notification: rgb(35, 124, 175),
  error: rgb(164, 57, 57),
  tooltip: rgb(8, 34, 73),
  selected: rgb(55, 151, 205),
};

/* Data
   Used mainly for data visualizations */
palette.data = {
  forest1: rgb(37, 99, 111),
  forest2: rgb(0, 75, 91),
  gold1: rgb(217, 169, 95),
  gold2: rgb(183, 135, 61),
  crimson1: rgb(186, 79, 79),
  crimson2: rgb(164, 57, 57),
  indigo1: rgb(76, 98, 144),
  indigo2: rgb(62, 84, 130),
  teal1: rgb(144, 174, 181),
  teal2: rgb(110, 140, 147),
  salmon1: rgb(204, 152, 156),
  salmon2: rgb(171, 119, 123),
};

palette.text = {
  normal: palette.pine4,
  links: palette.signal.links,
  caption: palette.slate85,
};

export { palette };

/*
  Font families */
export const fonts = {
  heading: "'Libre Baskerville', serif",
  body: "'Libre Franklin', sans-serif",
  serif: "'Libre Baskerville', serif",
  sans: "'Libre Franklin', sans-serif",
};

/*
  Margin/padding gutters */
export const spacing = {
  xxs: 1,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const zindex = {
  modal: {
    backdrop: 1000,
    content: 1001,
  },
};

export const animation = {
  defaultDurationMs: 500,
};
