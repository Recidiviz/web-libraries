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

import { Tooltip } from "./Tooltip";

type TooltipTriggerProps = {
  children: React.ReactElement;
  contents: React.ReactNode;
};

const AnimatedTooltip = animated(Tooltip);

// if the child is not perfectly rectangular (e.g. has rounded corners),
// this ensures only the child's footprint will be hoverable and not the space around it
const HoverTarget = styled.span`
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`;

// only makes a tooltip visible on hover if contents are actually provided
function useTooltipState(contents: TooltipTriggerProps["contents"]) {
  const haveValidContents = Boolean(contents);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const setShowTooltipIfValid = (hoverState: boolean) => {
    setShowTooltip(haveValidContents && hoverState);
  };

  return [showTooltip, setShowTooltipIfValid] as const;
}

/**
 * Wraps a component that should display a tooltip on hover.
 * `children` must render an element (not just text)
 * so we can properly target it with pointer events.
 */
export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({
  children,
  contents,
}: TooltipTriggerProps) => {
  const [offset, setOffset] = React.useState({ top: "0px", left: "0px" });
  // Event handlers should not be
  const [showTooltip, setShowTooltip] = useTooltipState(contents);

  const transitions = useTransition(showTooltip, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: showTooltip,
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
    setShowTooltip(true);
  };

  const onMouseLeave = () => {
    setShowTooltip(false);
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
                {contents}
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