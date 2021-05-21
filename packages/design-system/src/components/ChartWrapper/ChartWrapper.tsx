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

import { rem } from "polished";
import React from "react";
import styled from "styled-components/macro";
import { palette, zindex } from "../../styles";

const SemioticWrapper = styled.div`
  /* classes provided by Semiotic */
  .frame {
    /* default color for points in xy chart */
    circle.frame-piece {
      fill: ${palette.data.defaultOrder[0]};
    }

    /* default color for line chart */
    path.xyframe-line {
      stroke: ${palette.data.defaultOrder[0]};
      stroke-width: 1px;
    }

    .axis-baseline {
      stroke: ${palette.pine3};
    }

    .axis-label,
    .ordinal-labels {
      fill: ${palette.text.caption};
      font-size: 12px;
      font-weight: 600;
      letter-spacing: -0.01em;
    }

    .axis-title {
      fill: ${palette.text.caption};
      font-size: 13px;
      font-weight: 600;
      letter-spacing: -0.01em;
    }

    .frame-title {
      fill: ${palette.text.normal};
      font-size: 16px;
    }

    .pieces {
      /* default color for bar and pie charts */
      rect {
        fill: ${palette.data.defaultOrder[0]};
      }

      path {
        stroke: ${palette.marble1};
        fill: ${palette.data.defaultOrder[0]};
      }
    }

    .tick-line {
      stroke: ${palette.slate30};
    }

    .tooltip-content {
      background: ${palette.pine1};
      border-radius: ${rem(4)};
      box-shadow: 0 ${rem(2)} ${rem(10)} rgba(0, 0, 0, 0.1);
      color: ${palette.marble1};
      font-size: ${rem(14)};
      min-width: ${rem(120)};
      padding: ${rem(16)};
      z-index: ${zindex.tooltip};
    }

    .xyframe-matte {
      fill: ${palette.marble1};
    }

    .xybrush {
      .selection {
        fill: ${palette.pine3};
        fill-opacity: 0.2;
        stroke: ${palette.pine3};
      }
    }
  }
`;

export type ChartWrapperProps = {
  className?: string;
};

/**
 * Wrapper component for Semiotic chart components that applies
 * Recidiviz baseline styles to classes rendered by Semiotic.
 */
const ChartWrapper: React.FC<ChartWrapperProps> = ({ className, children }) => {
  return <SemioticWrapper className={className}>{children}</SemioticWrapper>;
};

export default ChartWrapper;
