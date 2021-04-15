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
import { IconSVGContext, IconSVGProps, IconSVG } from "./IconSVG";
import { palette } from "../../styles";

export interface IconProps extends IconSVGProps {
  className?: string;
  kind: keyof typeof IconSVG | React.FC;
  size?: number;
  rotate?: number;
}

export const Icon: React.FC<IconProps> = ({
  className = "",
  fill = palette.text.normal,
  height,
  kind,
  size,
  width,
  rotate,
}: IconProps) => {
  let SVG;
  if (typeof kind === "string") {
    SVG = IconSVG[kind];
  }

  if (typeof kind === "function") {
    SVG = kind;
  }

  const assignedHeight = typeof size === "undefined" ? height : size;
  const assignedWidth = typeof size === "undefined" ? width : size;
  const assignedRotate =
    typeof rotate === "undefined" ? undefined : `rotate(${rotate})`;

  const iconSVGProps: IconSVGProps = {
    className,
    fill,
    transform: assignedRotate,
    height: assignedHeight,
    width: assignedWidth,
  };

  if (!SVG) {
    iconSVGProps.fill = "red";
    SVG = IconSVG.Error;
  }

  return (
    <IconSVGContext.Provider value={iconSVGProps}>
      <SVG />
    </IconSVGContext.Provider>
  );
};
