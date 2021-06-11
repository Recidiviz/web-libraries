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

export interface IconSVGProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

// The ExternalPropsContext is used to dynamically pass along props from usages of the <Icon/> component to the IconSVGs
export const ExternalPropsContext = React.createContext<IconSVGProps>({});

/* eslint-disable max-len */
export type IconSVGMap = {
  [name: string]: React.FC;
};
const IconSVG: IconSVGMap = {};

const BaseSVG = ({ children, viewBox, ...rest }: IconSVGProps) => (
  <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" {...rest}>
    {children}
  </svg>
);

const StrokeSVG = ({ children, ...propsFromInternalIcon }: IconSVGProps) => {
  const { color, ...propsFromExternalUser } = React.useContext(
    ExternalPropsContext
  );

  return (
    <BaseSVG
      {...propsFromInternalIcon}
      {...propsFromExternalUser}
      fill="transparent"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </BaseSVG>
  );
};

const FillSVG = ({ children, ...propsFromInternalIcon }: IconSVGProps) => {
  const { color, ...propsFromExternalUser } = React.useContext(
    ExternalPropsContext
  );

  return (
    <BaseSVG fill={color} {...propsFromInternalIcon} {...propsFromExternalUser}>
      {children}
    </BaseSVG>
  );
};

/*
  Process for adding an icon from Figma:
  1. Select group containing all paths for the icon from the layers list
  2. Right click -> Copy SVG
  3. Run SVG through SVGOMG (make sure the `Remove viewBox` option is disabled!) https://jakearchibald.github.io/svgomg/
  4. Remove `fill`/`stroke` properties from the icon, as these values are inherited from the `<svg/>` parent
  5. Add a functional component o `IconSVG`. Use `StrokeSVG` for icons that are built of stroked paths,
     `FillSVG` for icons that are built of filled paths
*/
IconSVG.Arrow = () => (
  <StrokeSVG viewBox="0 0 12 10">
    <path d="M11.5 5H0.5" />
    <path d="M7.5 1L11.5 5L7.5 9" />
  </StrokeSVG>
);

IconSVG.Caret = () => (
  <FillSVG viewBox="0 0 12 10">
    <path d="M5.27641 9.59218C5.61662 10.1359 6.38338 10.1359 6.72359 9.59218L11.8593 1.38363C12.2322 0.78773 11.8202 0 11.1358 0H0.864242C0.179779 0 -0.232172 0.78773 0.140658 1.38363L5.27641 9.59218Z" />
  </FillSVG>
);

IconSVG.Check = () => (
  <FillSVG viewBox="0 0 8 6">
    <path d="M3.025 6.00002L0 3.00002L1 2.00002L3.025 4.00003L7 0L8 1L3.025 6.00002Z" />
  </FillSVG>
);

IconSVG.Clock = () => (
  <FillSVG viewBox="0 0 16 16">
    <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM12 9H7V4H9V7H12V9Z" />
  </FillSVG>
);

IconSVG.Close = () => (
  <FillSVG viewBox="0 0 14 14">
    <path d="M13.7 0.3C13.3 -0.1 12.7 -0.1 12.3 0.3L7 5.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L5.6 7L0.3 12.3C-0.1 12.7 -0.1 13.3 0.3 13.7C0.5 13.9 0.7 14 1 14C1.3 14 1.5 13.9 1.7 13.7L7 8.4L12.3 13.7C12.5 13.9 12.8 14 13 14C13.2 14 13.5 13.9 13.7 13.7C14.1 13.3 14.1 12.7 13.7 12.3L8.4 7L13.7 1.7C14.1 1.3 14.1 0.7 13.7 0.3Z" />
  </FillSVG>
);

IconSVG.CloseOutlined = () => (
  <FillSVG viewBox="0 0 16 16">
    <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM11.5 10.1L10.1 11.5L8 9.4L5.9 11.5L4.5 10.1L6.6 8L4.5 5.9L5.9 4.5L8 6.6L10.1 4.5L11.5 5.9L9.4 8L11.5 10.1Z" />
  </FillSVG>
);

IconSVG.DownChevron = () => (
  <FillSVG viewBox="0 0 8 4">
    <path d="M0 0L4 3.99988L8 0H0Z" />
  </FillSVG>
);

IconSVG.Envelope = () => (
  <StrokeSVG viewBox="0 0 12 10">
    <path d="M11.5 5.5v4a1 1 0 01-1 1h-9a1 1 0 01-1-1v-4" />
    <path d="M11.5 3.5v-1a1 1 0 00-1-1h-9a1 1 0 00-1 1v1l5.5 3 5.5-3z" />
  </StrokeSVG>
);

IconSVG.Error = () => (
  <FillSVG viewBox="0 0 24 25">
    <path d="M12 0.99707C5.383 0.99707 0 6.38007 0 12.9971C0 19.6141 5.383 24.9971 12 24.9971C18.617 24.9971 24 19.6141 24 12.9971C24 6.38007 18.617 0.99707 12 0.99707ZM13.645 5.99707L13 14.9971H11L10.392 5.99707H13.645ZM12 20.9971C10.895 20.9971 10 20.1021 10 18.9971C10 17.8921 10.895 16.9971 12 16.9971C13.105 16.9971 14 17.8921 14 18.9971C14 20.1021 13.105 20.9971 12 20.9971Z" />
  </FillSVG>
);

IconSVG.Hamburger = () => (
  <FillSVG viewBox="0 0 24 16">
    <path d="M23 9H1C0.448 9 0 8.553 0 8C0 7.447 0.448 7 1 7H23C23.552 7 24 7.447 24 8C24 8.553 23.552 9 23 9Z" />
    <path d="M23 2H1C0.448 2 0 1.553 0 1C0 0.447 0.448 0 1 0H23C23.552 0 24 0.447 24 1C24 1.553 23.552 2 23 2Z" />
    <path d="M23 16H12C11.448 16 11 15.553 11 15C11 14.447 11.448 14 12 14H23C23.552 14 24 14.447 24 15C24 15.553 23.552 16 23 16Z" />
  </FillSVG>
);

IconSVG.Info = () => (
  <FillSVG viewBox="0 0 24 24">
    <path d="M12 0C5.383 0 0 5.383 0 12C0 18.617 5.383 24 12 24C18.617 24 24 18.617 24 12C24 5.383 18.617 0 12 0ZM14.658 18.284C13.997 18.544 11.706 19.638 10.386 18.475C9.992 18.129 9.796 17.69 9.796 17.157C9.796 16.159 10.124 15.289 10.715 13.2C10.819 12.805 10.946 12.293 10.946 11.887C10.946 11.186 10.68 11 9.959 11C9.607 11 9.217 11.125 8.864 11.257L9.059 10.458C9.846 10.138 10.834 9.748 11.68 9.748C12.949 9.748 13.883 10.381 13.883 11.585C13.883 11.932 13.823 12.54 13.697 12.96L12.967 15.542C12.816 16.064 12.543 17.215 12.966 17.556C13.382 17.893 14.367 17.714 14.853 17.485L14.658 18.284ZM13.452 8C12.624 8 11.952 7.328 11.952 6.5C11.952 5.672 12.624 5 13.452 5C14.28 5 14.952 5.672 14.952 6.5C14.952 7.328 14.28 8 13.452 8Z" />
  </FillSVG>
);

IconSVG.ItemDelete = () => (
  <FillSVG viewBox="0 0 24 21">
    <path d="M23 6H1a1 1 0 000 2h22a1 1 0 100-2zM23 0H1a1 1 0 000 2h22a1 1 0 100-2zM11 12H1a1 1 0 000 2h10a1 1 0 000-2zM11 18H1a1 1 0 000 2h10a1 1 0 000-2zM23.414 13L22 11.586l-3 3-3-3L14.586 13l3 3-3 3L16 20.414l3-3 3 3L23.414 19l-3-3 3-3z" />
  </FillSVG>
);

IconSVG.NeedsContact = () => (
  <FillSVG viewBox="0 0 24 23">
    <path d="M16.54 12.41a1 1 0 00-1.414 1.414l2.82 2.82-1.317 1.317-2.82-2.82a1 1 0 10-1.414 1.414l2.557 2.558c-.721.3-1.502.43-2.281.377a3.564 3.564 0 01-.8 1.923 7.09 7.09 0 001.135.1 6.982 6.982 0 004.95-2.047l2.108-2.136a1 1 0 00-.006-1.411l-3.518-3.51zM1.825 11.856c.298-.291.644-.528 1.023-.7A6.052 6.052 0 019.086 2.09l.433-.433a9.19 9.19 0 011.385-1.14A8.068 8.068 0 001.324 12.5c.143-.233.31-.449.5-.644zM10.943 17.28l-4.718-4.717a2.61 2.61 0 10-3.693 3.693l4.718 4.717a2.611 2.611 0 003.693-3.692z" />
    <path d="M21.64 2.364a8.071 8.071 0 00-11.414 0L5.589 7l.708.707a3.125 3.125 0 004.414 0l1.793-1.791 8.424 8.576.714-.714a8.071 8.071 0 000-11.414h-.002z" />
  </FillSVG>
);

IconSVG.NeedsEmployment = () => (
  <FillSVG viewBox="0 0 24 24">
    <path d="M2 24h20a1 1 0 001-1v-3H1v3a1 1 0 001 1zM23 4h-6V1a1 1 0 00-1-1H8a1 1 0 00-1 1v3H1a1 1 0 00-1 1v12a1 1 0 001 1h22a1 1 0 001-1V5a1 1 0 00-1-1zM9 2h6v2H9V2zm7 13H8v-4h8v4z" />
  </FillSVG>
);

IconSVG.NeedsRiskAssessment = () => (
  <FillSVG viewBox="0 0 22 24">
    <path d="M21 0H1a1 1 0 00-1 1v22a1 1 0 001 1h20a1 1 0 001-1V1a1 1 0 00-1-1zm-2 21H3V3h3v3h3a2 2 0 114 0h3V3h3v18z" />
    <path d="M5 9h12v3H5V9zM5 14h12v3H5v-3z" />
  </FillSVG>
);

IconSVG.Open = () => (
  <StrokeSVG viewBox="0 0 11 11">
    <path d="M9.5 7.5V9.5C9.5 9.76522 9.39464 10.0196 9.20711 10.2071C9.01957 10.3946 8.76522 10.5 8.5 10.5H1.5C1.23478 10.5 0.98043 10.3946 0.792893 10.2071C0.605357 10.0196 0.5 9.76522 0.5 9.5V2.5C0.5 2.23478 0.605357 1.98043 0.792893 1.79289C0.98043 1.60536 1.23478 1.5 1.5 1.5H3.5" />
    <path d="M6.5 0.5H10.5V4.5" />
    <path d="M10.5 0.5L4.5 6.5" />
  </StrokeSVG>
);

IconSVG.Place = () => (
  <FillSVG viewBox="0 0 12 12">
    <path d="M6 0C3.075 0 0.75 2.325 0.75 5.25C0.75 6.675 1.275 8.025 2.325 9C2.4 9.075 5.4 11.775 5.475 11.85C5.775 12.075 6.225 12.075 6.45 11.85C6.525 11.775 9.6 9.075 9.6 9C10.65 8.025 11.175 6.675 11.175 5.25C11.25 2.325 8.925 0 6 0ZM6 6.75C5.175 6.75 4.5 6.075 4.5 5.25C4.5 4.425 5.175 3.75 6 3.75C6.825 3.75 7.5 4.425 7.5 5.25C7.5 6.075 6.825 6.75 6 6.75Z" />
  </FillSVG>
);

IconSVG.Search = () => (
  <StrokeSVG viewBox="0 0 15 15">
    <path
      d="M1.00016 14L5.22949 9.77065"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M9.00004 11.3333C6.05452 11.3333 3.66671 8.94552 3.66671 6C3.66671 3.05448 6.05452 0.666668 9.00004 0.666668C11.9456 0.666668 14.3334 3.05448 14.3334 6C14.3334 8.94552 11.9456 11.3333 9.00004 11.3333Z"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </StrokeSVG>
);

IconSVG.Star = () => (
  <FillSVG viewBox="0 0 16 16">
    <path d="M15.1441 5.43918L10.8271 4.81118L8.90008 0.900179C8.80851 0.742644 8.67719 0.611904 8.51925 0.521028C8.36132 0.430153 8.18229 0.382324 8.00008 0.382324C7.81786 0.382324 7.63884 0.430153 7.4809 0.521028C7.32297 0.611904 7.19165 0.742644 7.10008 0.900179L5.17308 4.81218L0.856079 5.43918C0.671214 5.46569 0.497468 5.54344 0.354521 5.66363C0.211573 5.78381 0.105137 5.94162 0.0472671 6.11918C-0.0106025 6.29675 -0.0175924 6.48697 0.0270889 6.6683C0.0717703 6.84963 0.166337 7.01483 0.300079 7.14518L3.42308 10.1902L2.68608 14.4902C2.65457 14.6741 2.67514 14.8631 2.74546 15.036C2.81578 15.2088 2.93305 15.3585 3.08401 15.4681C3.23497 15.5778 3.41359 15.643 3.59969 15.6565C3.78579 15.6699 3.97193 15.631 4.13708 15.5442L8.00008 13.5132L11.8611 15.5422C12.0262 15.629 12.2124 15.6679 12.3985 15.6545C12.5846 15.641 12.7632 15.5758 12.9142 15.4661C13.0651 15.3565 13.1824 15.2068 13.2527 15.034C13.323 14.8611 13.3436 14.6721 13.3121 14.4882L12.5751 10.1882L15.7001 7.14518C15.8335 7.01492 15.9278 6.84996 15.9724 6.66892C16.017 6.48788 16.0102 6.29797 15.9525 6.12065C15.8949 5.94332 15.7889 5.78563 15.6464 5.66539C15.5039 5.54515 15.3306 5.46714 15.1461 5.44018L15.1441 5.43918Z" />
  </FillSVG>
);

IconSVG.Success = () => (
  <FillSVG viewBox="0 0 24 24">
    <path d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9908 8.82024 22.7235 5.77336 20.4751 3.52492C18.2266 1.27648 15.1798 0.00923395 12 0V0ZM10 17.414L4.58601 12L6.00001 10.586L10 14.586L18 6.586L19.414 8L10 17.414Z" />
  </FillSVG>
);

IconSVG.TripleDot = () => (
  <FillSVG viewBox="0 0 16 4">
    <path d="M8 4C9.10457 4 10 3.10457 10 2C10 0.89543 9.10457 0 8 0C6.89543 0 6 0.89543 6 2C6 3.10457 6.89543 4 8 4Z" />
    <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" />
    <path d="M14 4C15.1046 4 16 3.10457 16 2C16 0.89543 15.1046 0 14 0C12.8954 0 12 0.89543 12 2C12 3.10457 12.8954 4 14 4Z" />
  </FillSVG>
);

IconSVG.UserDelete = () => (
  <FillSVG viewBox="0 0 24 24">
    <path d="M8.9751 12C6.2141 12 3.9751 8.761 3.9751 6V5C3.9751 2.239 6.2141 0 8.9751 0C11.7361 0 13.9751 2.239 13.9751 5V6C13.9751 8.761 11.7361 12 8.9751 12Z" />
    <path d="M11.9741 19C11.9741 17.302 12.5791 15.746 13.5851 14.534C12.2391 14.231 10.6661 14 8.97412 14C6.15112 14 3.64612 14.638 2.00012 15.193C0.784121 15.603 -0.0258789 16.748 -0.0258789 18.031V22H12.6571C12.2241 21.09 11.9741 20.075 11.9741 19Z" />
    <path d="M23.4139 15.9999L21.9999 14.5859L18.9999 17.5859L15.9999 14.5859L14.5859 15.9999L17.5859 18.9999L14.5859 21.9999L15.9999 23.4139L18.9999 20.4139L21.9999 23.4139L23.4139 21.9999L20.4139 18.9999L23.4139 15.9999Z" />
  </FillSVG>
);

IconSVG.Edit = () => (
  <FillSVG viewBox="0 0 16 16">
    <path d="M14.1 0.3C13.7 -0.1 13.1 -0.1 12.7 0.3L6 7V10H9L15.7 3.3C16.1 2.9 16.1 2.3 15.7 1.9L14.1 0.3Z" />
    <path d="M15 9C14.4 9 14 9.4 14 10V14H2V2H6C6.6 2 7 1.6 7 1C7 0.4 6.6 0 6 0H1C0.4 0 0 0.4 0 1V15C0 15.6 0.4 16 1 16H15C15.6 16 16 15.6 16 15V10C16 9.4 15.6 9 15 9Z" />
  </FillSVG>
);

IconSVG.Journey = () => (
  <StrokeSVG viewBox="0 0 12 12">
    <path d="M2 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 3.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM2 6.5v-3a2 2 0 012-2v0a2 2 0 012 2v5a2 2 0 104 0v-3" />
  </StrokeSVG>
);

IconSVG.House = () => (
  <StrokeSVG viewBox="0 0 12 12">
    <path d="M.5 4.5L6 .5l5.5 4M10.5 6.5v4a1 1 0 01-1 1h-7a1 1 0 01-1-1v-4" />
    <path d="M6.5 4h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5z" />
    <path d="M4.5 11.5v-4h3v4" />
  </StrokeSVG>
);

IconSVG.Briefcase = () => (
  <StrokeSVG viewBox="0 0 12 12">
    <path d="M10.5 4.5h-9a1 1 0 00-1 1v5a1 1 0 001 1h9a1 1 0 001-1v-5a1 1 0 00-1-1zM3.5 2.5v-2h5v2M.5 8.5h11" />
  </StrokeSVG>
);

/* eslint-enable max-len */

export { IconSVG };
