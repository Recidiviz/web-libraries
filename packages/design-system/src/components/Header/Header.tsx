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
import React, { FunctionComponent } from "react";
import PropTypes, { InferProps } from "prop-types";
import {
  Header as StyledHeader,
  MiddleHeaderSection,
  OuterHeaderSection,
} from "./Header.styles";

const HeaderPropTypes = {
  left: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  center: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  right: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export type HeaderProps = InferProps<typeof HeaderPropTypes>;

export const Header: FunctionComponent<HeaderProps> = ({
  left,
  center,
  right,
}) => (
  <StyledHeader>
    <OuterHeaderSection>{left}</OuterHeaderSection>
    {center ? <MiddleHeaderSection>{center}</MiddleHeaderSection> : undefined}
    <OuterHeaderSection>{right}</OuterHeaderSection>
  </StyledHeader>
);

Header.propTypes = HeaderPropTypes;
