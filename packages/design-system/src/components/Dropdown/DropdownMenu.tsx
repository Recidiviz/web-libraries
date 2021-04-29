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
import { KeyboardEventHandler, useContext } from "react";
import { MenuElement, MenuItemElement, ToggleElement } from "./Dropdown.styles";
import DropdownContext from "./DropdownContext";

export interface MenuProps {
  className?: string;
  children?: React.ReactChild | React.ReactChildren | JSX.Element[];
}

const Menu = ({ className, children }: MenuProps): JSX.Element => {
  const { focusManager, shown, setShown } = useContext(DropdownContext);
  const onKeyPress: KeyboardEventHandler<HTMLDivElement> = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    switch (event.key) {
      case "Down":
      case "ArrowDown":
      case "Tab":
        event.preventDefault();
        focusManager.focusNextItem();
        break;
      case "Up":
      case "ArrowUp":
        event.preventDefault();
        focusManager.focusPreviousItem();
        break;
      case "Esc":
      case "Escape":
        event.preventDefault();
        setShown(false);
        focusManager.focusToggle();
        break;
      default:
        break;
    }
  };

  const onFocusOut: React.FocusEventHandler<HTMLDivElement> = (
    event: React.FocusEvent<HTMLDivElement>
  ) => {
    // Blurred from the menu, but is not focusing a different element
    if (event.relatedTarget === null) {
      setShown(false);
      focusManager.focusToggle();
      return;
    }

    const related = event.relatedTarget as HTMLElement;
    // Focus has left the menu, don't re-focus toggle
    if (!related.matches(`${MenuItemElement}, ${ToggleElement}`)) {
      setShown(false);
    }
  };

  return (
    <MenuElement
      className={className}
      onKeyDown={onKeyPress}
      onBlur={onFocusOut}
      shown={shown}
    >
      {children}
    </MenuElement>
  );
};

export default Menu;
