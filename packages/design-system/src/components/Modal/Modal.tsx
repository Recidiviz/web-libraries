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

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { rgba } from "polished";
import * as React from "react";
import styled from "styled-components";
import ReactModal from "react-modal";
import { H3 } from "../Typography/Headings";
import { animation, palette, zindex } from "../../styles";

// Reset default `react-modal` styles
ReactModal.defaultStyles.content = {};
ReactModal.defaultStyles.overlay = {};

export interface ModalProps extends ReactModal.Props {
  className?: string;
}

export const ModalHeading = styled(H3)`
  margin-top: 0;
`;

const UnstyledModal: React.FC<ModalProps> = ({
  children,
  className,
  onAfterOpen,
  onAfterClose,
  ...rest
}) => {
  const modalContentRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <ReactModal
      {...rest}
      onAfterClose={() => {
        if (modalContentRef.current) {
          enableBodyScroll(modalContentRef.current);
        }
        if (onAfterClose) {
          onAfterClose();
        }
      }}
      onAfterOpen={(opts) => {
        if (modalContentRef.current) {
          disableBodyScroll(modalContentRef.current);
        }
        if (onAfterOpen) {
          onAfterOpen(opts);
        }
      }}
      portalClassName={className}
      closeTimeoutMS={300}
    >
      {children}
    </ReactModal>
  );
};

const overlayColor = palette.marble5;

/**
 * This component is a wrapper around the
 * [React Modal]({https://www.npmjs.com/package/react-modal) package.
 * It expects to be controlled by its parent component.
 * It will dim and blur the page behind it while open, and prevent the page from scrolling
 * using the [Body Scroll Lock](https://www.npmjs.com/package/body-scroll-lock) package.
 *
 * The `isOpen` prop controls modal visibility, and the `onRequestClose`
 * prop is a hook that should set `isOpen` to `false`.
 *
 * When using this component, you should make sure to [set the React Modal app element](
 * https://reactcommunity.org/react-modal/accessibility/#the-app-element).
 */
export const Modal = styled(UnstyledModal)`
  .ReactModal__Overlay {
    background-color: ${rgba(overlayColor, 0)};
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    transition: background-color ${animation.defaultDurationMs}ms,
      backdrop-filter ${animation.defaultDurationMs}ms;
    width: 100%;
    z-index: ${zindex.modal.backdrop};

    &.ReactModal__Overlay--after-open {
      /* not all browsers support backdrop-filter but it's a nice progressive enhancement */
      backdrop-filter: blur(4px);
      background: ${rgba(overlayColor, 0.7)};
    }

    &.ReactModal__Overlay--before-close {
      backdrop-filter: none;
      background: ${rgba(overlayColor, 0)};
    }
  }

  .ReactModal__Content {
    transform: translate(-50%, -50%) scale(0.75);
    transition: transform 300ms ease-in-out;
    position: fixed;
    width: 462px;
    left: 50%;
    top: 50%;
    z-index: ${zindex.modal.content};
    padding: 40px;
    background: ${palette.white};
    box-shadow: 0px 15px 40px rgba(22, 26, 33, 0.3),
      inset 0px -1px 1px rgba(19, 44, 82, 0.2);
    border-radius: 8px;
    outline: none;
  }
  .ReactModal__Overlay[class*="--after-open"] .ReactModal__Content {
    transform: translate(-50%, -50%) scale(1);
  }

  .ReactModal__Overlay[class*="--before-close"] .ReactModal__Content {
    transform: translate(-50%, -50%) scale(0.75);
  }
`;
