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
import { useContext, useEffect, useRef } from "react";
import * as React from "react";
import { MenuItemElement } from "./Dropdown.styles";
import DropdownContext from "./DropdownContext";

export interface MenuItemProps {
  className?: string;
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MenuItem = ({
  className,
  label,
  onClick,
}: MenuItemProps): JSX.Element => {
  const { focusManager, shown, setShown } = useContext(DropdownContext);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    focusManager.focusFirstItem();
  }, [shown, focusManager]);

  const onMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    ref.current?.focus();
  };

  return (
    <MenuItemElement
      className={className}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        onClick(event);
        setShown(false);
        focusManager.focusToggle();
      }}
      disabled={!shown}
      tabIndex={shown ? 0 : -1}
    >
      {label}
    </MenuItemElement>
  );
};

export default MenuItem;