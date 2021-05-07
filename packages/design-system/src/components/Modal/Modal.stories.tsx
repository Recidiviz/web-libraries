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
import { Story, Meta } from "@storybook/react";
import ReactModal from "react-modal";
import { rem } from "polished";
import styled from "styled-components";
import {
  Title,
  Subtitle,
  Description as StoryDescription,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs/blocks";
import { Modal as ModalComponent, ModalHeading, ModalProps } from "./Modal";
import { Link } from "../Typography/Link";

ReactModal.setAppElement("#root");

export default {
  title: "Design System/Components/Modal",
  component: ModalComponent,
  parameters: {
    docs: {
      // Render modal inside an iframe so that `position: fixed`; is contained
      inlineStories: false,
      iframeHeight: "300px",
    },
  },

  argTypes: {
    isOpen: {
      description: "Controls if the modal is open or not",
      control: "boolean",
    },
    onRequestClose: { action: "requested close" },
    as: { table: { disable: true } },
    className: { table: { disable: true } },
    theme: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
  },
} as Meta;

const TexturedBackground = styled.div`
  background: linear-gradient(
      135deg,
      #708090 21px,
      #d9ecff 22px,
      #d9ecff 24px,
      transparent 24px,
      transparent 67px,
      #d9ecff 67px,
      #d9ecff 69px,
      transparent 69px
    ),
    linear-gradient(
        225deg,
        #708090 21px,
        #d9ecff 22px,
        #d9ecff 24px,
        transparent 24px,
        transparent 67px,
        #d9ecff 67px,
        #d9ecff 69px,
        transparent 69px
      )
      0 64px;
  background-color: #708090;
  background-size: 64px 128px;
  width: 100vw;
  height: 150vh;
`;

const Description = styled.span`
  font-size: ${rem("17px")};
`;

const Template: Story<ModalProps> = ({ isOpen, onRequestClose }) => (
  <TexturedBackground>
    <ModalComponent isOpen={isOpen} onRequestClose={onRequestClose}>
      <ModalHeading>Give Us Feedback</ModalHeading>
      <Description>
        After you click submit, we will move this item to the bottom of the
        list.
      </Description>
    </ModalComponent>
  </TexturedBackground>
);

export const Modal = Template.bind({});
Modal.args = { isOpen: true };
