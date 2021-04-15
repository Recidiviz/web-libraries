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
import {
  NeedsContainerDisabled,
  NeedsContainerDisabledMet,
  NeedsContainerMet,
  NeedsContainer,
} from "./Need.styles";
import { Icon } from "../Icon/Icon";
import { IconSVG } from "../Icon/IconSVG";

export enum NeedState {
  NOT_MET = "NOT_MET",
  MET = "MET",
  DISABLED = "DISABLED",
  DISABLED_MET = "DISABLED_MET",
}

const ContainerMap = {
  [NeedState.NOT_MET]: NeedsContainer,
  [NeedState.MET]: NeedsContainerMet,
  [NeedState.DISABLED]: NeedsContainerDisabled,
  [NeedState.DISABLED_MET]: NeedsContainerDisabledMet,
};

export interface NeedProps {
  className?: string;
  kind: keyof typeof IconSVG | React.FC;
  state?: NeedState;
}

export const Need: React.FC<NeedProps> = ({
  className,
  kind,
  state = NeedState.DISABLED,
}: NeedProps) => {
  const Container = ContainerMap[state];

  return (
    <Container className={className}>
      <Icon kind={kind} size={16} />
    </Container>
  );
};

Need.defaultProps = {
  state: NeedState.DISABLED,
};
