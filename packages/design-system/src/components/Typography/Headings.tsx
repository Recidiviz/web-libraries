// Recidiviz - a data platform for criminal justice reform
// Copyright (C) 2021 Recidiviz, Inc.
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
import { rem } from "polished";

export interface TypographyProps {
  color?: string;
}

export const TitleXXL = styled.h1<TypographyProps>`
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: normal;
  font-size: ${rem("70px")};
  letter-spacing: -0.03em;
  line-height: 1.01;
`;

export const TitleXL = styled.h1<TypographyProps>`
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: normal;
  font-size: ${rem("60px")};
  letter-spacing: -0.04em;
  line-height: 1.01;
`;

export const Subtitle = styled.h2<TypographyProps>`
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: 500;
  font-size: ${rem("56px")};
`;

export const H1 = styled.h1<TypographyProps>`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${rem("56px")};
  font-weight: normal;
  letter-spacing: -0.04em;
`;

export const H2 = styled.h2<TypographyProps>`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${rem("32px")};
  font-weight: normal;
  letter-spacing: -0.04em;
`;

export const H3 = styled.h3<TypographyProps>`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${rem("24px")};
  font-weight: normal;
  letter-spacing: -0.01em;
`;

export const H4 = styled.h4<TypographyProps>`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${rem("19px")};
  font-weight: normal;
  letter-spacing: -0.01em;
`;
