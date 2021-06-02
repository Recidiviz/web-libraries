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
import { Meta, Story } from "@storybook/react";
import styled from "styled-components/macro";
import { rem } from "polished";

import { ErrorPage, ErrorPageProps } from "./ErrorPage";

import { Button } from "../Button";
import { Link } from "../Typography";
import { spacing } from "../../styles";

export default {
  title: "Design System/Pages/ErrorPage",
  component: ErrorPage,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<ErrorPageProps> = ({ headerText, children }) => (
  <ErrorPage headerText={headerText}>{children}</ErrorPage>
);

const ActionButton = styled(Button)`
  margin: ${rem(spacing.xl)} 0;
`;

export const VerifyEmailPage = Template.bind({});
VerifyEmailPage.args = {
  headerText: "Please verify your email.",
  children: (
    <>
      <p>
        If you have just signed up for an account, please check your inbox for
        an email asking you to verify your email address. After you click the
        verification button or link in that email, you can reach the home page
        below.
      </p>
      <p>
        If you have reached this page by mistake, please try to log in again. If
        you are still having trouble, please reach out to{" "}
        <Link href="mailto:web-support@recidiviz.org?subject=Trouble logging in">
          Recidiviz Support
        </Link>
        .
      </p>
      <ActionButton kind="secondary">Back to Home</ActionButton>
    </>
  ),
};

export const UnauthorizedPage = Template.bind({});
UnauthorizedPage.args = {
  headerText: "Thank you for your interest in Recidiviz.",
  children: (
    <p>
      This page is currently unavailable for your account. Please reach out to{" "}
      <Link href="mailto:web-support@recidiviz.org?subject=Access to Recidiviz app">
        Recidiviz Support
      </Link>{" "}
      with any questions.
    </p>
  ),
};
