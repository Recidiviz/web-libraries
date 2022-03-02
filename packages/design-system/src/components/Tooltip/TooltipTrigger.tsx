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
import React from "react";
import ReactDOM from "react-dom";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";

import Tooltip from "./Tooltip";

interface TooltipTriggerProps {
  children: React.ReactElement;
  title: React.ReactNode;
}

const AnimatedTooltip = animated(Tooltip);

const HoverTarget = styled.span`
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`;

/**
 * Wraps a component that should display a tooltip on hover.
 * `children` must render an element (not just text)
 * so we can properly target it with pointer events.
 */
const TooltipTrigger: React.FC<TooltipTriggerProps> = ({
  children,
  title,
}: TooltipTriggerProps) => {
  const [offset, setOffset] = React.useState({ top: "0px", left: "0px" });
  const [shouldRenderTooltip, setShouldRenderTooltip] = React.useState(false);

  const transitions = useTransition(shouldRenderTooltip, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: shouldRenderTooltip,
    config: {
      mass: 0.75,
      tension: 250,
      friction: 15,
      clamp: true,
    },
  });

  let frame: number;
  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (typeof frame !== "undefined") {
      window.cancelAnimationFrame(frame);
    }
    frame = window.requestAnimationFrame(() => {
      setOffset({
        left: `${event.clientX + 15}px`,
        top: `${event.clientY + 15}px`,
      });
    });
  };

  const onMouseEnter = () => {
    setShouldRenderTooltip(true);
  };

  const onMouseLeave = () => {
    setShouldRenderTooltip(false);
  };

  return (
    <>
      {ReactDOM.createPortal(
        transitions(
          (styles, item) =>
            item && (
              <AnimatedTooltip
                style={{ ...styles, top: offset.top, left: offset.left }}
              >
                {title}
              </AnimatedTooltip>
            )
        ),
        window.document.body
      )}

      <HoverTarget
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </HoverTarget>
    </>
  );
};

export default TooltipTrigger;
