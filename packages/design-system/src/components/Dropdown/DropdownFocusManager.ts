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
import { MenuItemElement, ToggleElement } from "./Dropdown.styles";

class DropdownFocusManager {
  dropdown: React.RefObject<HTMLElement> | null;

  constructor(dropdown: React.RefObject<HTMLElement> | null) {
    this.dropdown = dropdown;
  }

  querySelector<T>(selector: string): T | null {
    const element = this.dropdown?.current?.querySelector(selector);

    if (element) {
      return (element as unknown) as T;
    }

    return null;
  }

  focusFirstItem(): void {
    this.querySelector<HTMLButtonElement>(
      `${MenuItemElement}:first-child`
    )?.focus();
  }

  focusToggle(): void {
    this.querySelector<HTMLButtonElement>(`${ToggleElement}`)?.focus();
  }

  focusNextItem(): void {
    // Selects the focused menu item's next sibling, otherwise wrap to the first
    const focused = this.querySelector<HTMLButtonElement>(
      `${MenuItemElement}:focus`
    );

    const previous =
      focused?.nextElementSibling || focused?.parentElement?.firstElementChild;
    (previous as HTMLButtonElement).focus();
  }

  focusPreviousItem(): void {
    // Selects the focused menu item's previous sibling, otherwise wrap to the last
    const focused = this.querySelector<HTMLButtonElement>(
      `${MenuItemElement}:focus`
    );
    const previous =
      focused?.previousElementSibling ||
      focused?.parentElement?.lastElementChild;
    (previous as HTMLButtonElement).focus();
  }
}

export default DropdownFocusManager;
