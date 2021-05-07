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
import * as React from "react";
import styled from "styled-components";
import ReactModal from "react-modal";
import { H3 } from "../Typography/Headings";
import { palette, zindex } from "../../styles";

// Reset default `react-modal` styles
ReactModal.defaultStyles.content = {};
ReactModal.defaultStyles.overlay = {};

export interface ModalProps extends ReactModal.Props {
  children: React.ReactChild | React.ReactChild[];
  className?: string;
}

export const ModalHeading = styled(H3)`
  margin-top: 0;
`;

// Disable ESLint rule, as we are forwarding all props from the `react-modal` library
/* eslint-disable react/jsx-props-no-spreading */
const UnstyledModal = ({ children, className, ...rest }: ModalProps) => (
  <ReactModal {...rest} portalClassName={className} closeTimeoutMS={300}>
    {children}
  </ReactModal>
);
/* eslint-enable react/jsx-props-no-spreading */

/**
 * This is a styled wrapper around the
 * [React Modal]({https://www.npmjs.com/package/react-modal) package.
 * It expects to be controlled by its parent component.
 * It will dim and blur the page behind it while open.
 *
 * The `isOpen` prop controls modal visibility, and the `onRequestClose`
 * prop is a hook that should set `isOpen` to `false`.
 *
 * When using this component, you should make sure to [set the React Modal app element](
 * https://reactcommunity.org/react-modal/accessibility/#the-app-element).
 */
export const Modal = styled(UnstyledModal)`
  .ReactModal__Overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${zindex.modal.backdrop};
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
