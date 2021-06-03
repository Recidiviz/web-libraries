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
import DropdownContext from "./DropdownContext";
import { ToggleElement } from "./Dropdown.styles";
import { ButtonProps } from "../Button";

export interface DropdownToggleProps extends ButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export const DropdownToggle = ({
  children,
  shape = "block",
  kind = "secondary",
  ...attributes
}: DropdownToggleProps): JSX.Element => {
  const { shown, setShown } = React.useContext(DropdownContext);

  return (
    <ToggleElement
      onClick={() => setShown(!shown)}
      onKeyPress={(event) => {
        if (event.key === "Down" || event.key === "ArrowDown") {
          setShown(true);
        }
      }}
      aria-haspopup="menu"
      aria-expanded={shown}
      shape={shape}
      kind={kind}
      {...attributes}
    >
      {children}
    </ToggleElement>
  );
};
