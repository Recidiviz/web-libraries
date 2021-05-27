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
import { useRef, useState } from "react";
import { DropdownElement } from "./Dropdown.styles";
import DropdownFocusManager from "./DropdownFocusManager";
import DropdownContext from "./DropdownContext";
import Menu from "./DropdownMenu";
import MenuItem from "./DropdownMenuItem";
import Toggle from "./DropdownToggle";
import MenuLabel from "./DropdownMenuLabel";

interface DropdownProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Dropdown = ({ children, className }: DropdownProps): JSX.Element => {
  const ref = useRef(null);
  const [focusManager] = useState(new DropdownFocusManager(ref));
  const [shown, setShown] = useState(false);

  return (
    <DropdownElement className={className} ref={ref}>
      <DropdownContext.Provider value={{ focusManager, shown, setShown }}>
        {children}
      </DropdownContext.Provider>
    </DropdownElement>
  );
};

Dropdown.Menu = Menu;
Dropdown.MenuLabel = MenuLabel;
Dropdown.MenuItem = MenuItem;
Dropdown.Toggle = Toggle;

export default Dropdown;
