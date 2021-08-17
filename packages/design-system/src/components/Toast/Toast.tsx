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
import * as React from "react";
import {
  Options,
  ToastProps,
  ToastProvider as OriginalToastProvider,
  ToastProviderProps,
  useToasts as useToastsOrig,
} from "react-toast-notifications";
import { Icon } from "../Icon";
import {
  BaseToastContent,
  BaseToastDiv,
  IconWrapper,
  ToastAccentColors,
  ToastContainer,
} from "./Toast.styles";

const IconMap = {
  success: "Success",
  info: "Info",
  warning: "Error",
  error: "Error",
};

export const Toast: React.FC<ToastProps> = ({ appearance, children }) => (
  <BaseToastDiv appearance={appearance}>
    <IconWrapper>
      <Icon
        kind={IconMap[appearance]}
        size={24}
        color={ToastAccentColors[appearance]}
      />
    </IconWrapper>
    <BaseToastContent>{children}</BaseToastContent>
  </BaseToastDiv>
);

export const useToasts = (): ReturnType<typeof useToastsOrig> => {
  const { addToast, ...others } = useToastsOrig();
  const addToastWrapper = (...args: Parameters<typeof addToast>) => {
    const [content, options, callback] = args;
    const newOptions: Options = {
      autoDismiss: true,
      appearance: "success",
      ...options,
    };
    return addToast(content, newOptions, callback);
  };
  return { addToast: addToastWrapper, ...others };
};

export const ToastProvider = ({
  children,
  ...props
}: ToastProviderProps): JSX.Element => (
  <OriginalToastProvider
    placement="bottom-right"
    components={{ Toast, ToastContainer }}
    {...props}
  >
    {children}
  </OriginalToastProvider>
);

export type {
  AppearanceTypes as ToastType,
  ToastProps,
  ToastProviderProps,
} from "react-toast-notifications";

export default Toast;
