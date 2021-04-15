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
import styled from "styled-components";
import { ButtonProps } from "./Button.types";
import { fonts, palette } from "../../styles";

const BaseButton = styled.button.attrs({
  type: "button",
})`
  cursor: pointer;
  min-width: 129px;
  min-height: 40px;
  padding: 12px 16px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  font-family: ${fonts.body};
  justify-content: center;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled(BaseButton)<ButtonProps>`
  border: none;
  background-color: ${palette.signal.links};
  color: ${palette.white};

  &:hover,
  &:focus {
    background-color: ${palette.pine4};
  }

  &:active {
    background-color: ${palette.pine3};
  }

  &:disabled {
    background-color: ${palette.slate10};
    color: ${palette.slate80};
  }
`;

export const SecondaryButton = styled(BaseButton)<ButtonProps>`
  background-color: transparent;
  border: 1px solid ${palette.signal.links};
  color: ${palette.signal.links};

  &:hover,
  &:focus {
    color: ${palette.pine4};
  }

  &:active {
    border-color: ${palette.pine4};
    color: ${palette.signal.links};
  }

  &:disabled {
    background-color: ${palette.slate20};
    color: ${palette.slate70};
  }
`;

export const LinkButton = styled.button.attrs({
  type: "button",
})<ButtonProps>`
  background: transparent;
  border: none;
  color: ${palette.signal.links};
  cursor: pointer;
  padding: 0;

  &:active,
  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:active {
    color: ${palette.pine4};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${palette.slate70};
  }
`;
