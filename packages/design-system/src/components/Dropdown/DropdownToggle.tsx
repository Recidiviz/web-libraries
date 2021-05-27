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
import { IconSVG, IconSVGMap } from "../Icon/IconSVG";
import DropdownContext from "./DropdownContext";
import { ToggleElement } from "./Dropdown.styles";
import { Icon } from "../Icon/Icon";
import { ButtonProps } from "../Button/Button.types";

export interface ToggleProps extends Pick<ButtonProps, "kind" | "shape"> {
  ariaLabel: string;
  borderless?: boolean;
  children: React.ReactNode;
  className?: string;
  icon?: IconSVGMap[keyof IconSVGMap];
}

export interface ToggleIconProps {
  kind: keyof typeof IconSVG | React.FC;
  size?: string | number;
}

const ToggleIcon = ({ kind, size }: ToggleIconProps): JSX.Element => {
  return <Icon kind={kind} size={size} fill="currentColor" />;
};

const Toggle = ({
  children,
  className,
  borderless = false,
  ariaLabel,
  shape = "block",
  kind = "secondary",
}: ToggleProps): JSX.Element => {
  const { shown, setShown } = React.useContext(DropdownContext);

  return (
    <ToggleElement
      className={className}
      onClick={() => setShown(!shown)}
      onKeyPress={(event) => {
        if (event.key === "Down" || event.key === "ArrowDown") {
          setShown(true);
        }
      }}
      borderless={borderless}
      shown={shown}
      aria-label={ariaLabel}
      aria-haspopup="menu"
      aria-expanded={shown}
      shape={shape}
      kind={kind}
    >
      {children}
    </ToggleElement>
  );
};

export default Toggle;
export { ToggleIcon };
