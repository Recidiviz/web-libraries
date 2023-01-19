// Recidiviz - a data platform for criminal justice reform
// Copyright (C) 2022 Recidiviz, Inc.
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

import { when } from "mobx";
import { observer } from "mobx-react-lite";
import React, { ReactNode, useEffect } from "react";

import { AuthStore } from "./AuthStore";

type AuthWallProps = {
  authStore: AuthStore;
  loading: ReactNode;
  unauthorizedPage: ReactNode;
  emailVerificationPage: ReactNode;
  handleTargetUrl?: (targetUrl: string) => void;
  children: ReactNode;
};

const AuthWall: React.FC<AuthWallProps> = ({
  authStore,
  loading,
  unauthorizedPage,
  emailVerificationPage,
  handleTargetUrl,
  children,
}): React.ReactElement | null => {
  useEffect(
    () =>
      // return when's disposer so it is cleaned up if it never runs
      when(
        () => !authStore.isAuthorized,
        () => authStore.authenticate(handleTargetUrl)
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [authStore]
  );

  if (authStore.isLoading) {
    return <>{loading}</>;
  }

  if (!authStore.isAuthorized) {
    return <>{unauthorizedPage}</>;
  }

  if (!authStore.emailVerified) {
    return <>{emailVerificationPage}</>;
  }

  return authStore.isAuthorized ? <>{children}</> : null;
};

export default observer(AuthWall);
