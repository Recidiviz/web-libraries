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
import { palette } from "../../styles";
import { tooltipStyles } from "../Tooltip";

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
      ${tooltipStyles}
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
  ref?:
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined;
};

/**
 * Wrapper component for Semiotic chart components that applies
 * Recidiviz baseline styles to classes rendered by Semiotic.
 */

export const ChartWrapper: React.FC<ChartWrapperProps> = React.forwardRef(
  ({ className, children }, ref) => {
    return (
      <SemioticWrapper className={className} ref={ref}>
        {children}
      </SemioticWrapper>
    );
  }
);
