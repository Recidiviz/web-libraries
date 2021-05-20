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
import { GlobalStyle } from "./styles/GlobalStyle";
import { Button, ButtonKind, ButtonProps } from "./components/Button/Button";
import Dropdown from "./components/Dropdown";
import { Card, CardSection } from "./components/Card/Card";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { Header } from "./components/Header/Header";
import { Icon } from "./components/Icon/Icon";
import { IconSVG } from "./components/Icon/IconSVG";
import { Need } from "./components/Need/Need";
import { Search } from "./components/Search/Search";
import { fonts, palette, spacing, zindex } from "./styles";

import {
  TitleXXL,
  TitleXL,
  H1,
  H2,
  H3,
  H4,
} from "./components/Typography/Headings";

import Assets from "./assets";
import { Modal, ModalHeading, ModalProps } from "./components/Modal/Modal";
import { Link } from "./components/Typography/Link";
import { NeedState } from "./components/Need/Need.types";

export {
  Assets,
  Button,
  Card,
  CardSection,
  Dropdown,
  ErrorPage,
  H1,
  H2,
  H3,
  H4,
  Header,
  Icon,
  IconSVG,
  GlobalStyle,
  Link,
  Modal,
  ModalHeading,
  Need,
  NeedState,
  Search,
  TitleXL,
  TitleXXL,
  fonts,
  palette,
  spacing,
  zindex,
};

export type { ButtonKind, ButtonProps, ModalProps };
