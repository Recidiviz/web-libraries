# Recidiviz Authentication Module

Auth0-powered authentication module for use within the web applications that make up the Recidiviz web platform.

## Usage

This module contains two components:

| Component | Description |
| -: | - |
| AuthStore | a mobX data store (represented by a JavaScript class) that handles Auth0 authentication, authentication states, logout and token retrieval functionality |
| AuthWall | a React functional component that wraps around any component that requires authentication before rendering - it accepts (as props) and displays the provided loading component, unauthorized page and email verification page based on authentication status and app state |

**AuthStore**

Initialize the AuthStore by providing it with `{ authSettings }` (see [Auth0ClientOptions](https://auth0.github.io/auth0-spa-js/interfaces/auth0clientoptions.html)):

`const authStore = new AuthStore({ authSettings });`

| Functions | Description |
| -: | - |
| auth0Client | asynchronously creates the Auth0Client instance |
| authenticate | initializes Auth0Client, handles redirect, sets the user object and authentication state  |
| logout | clears the Auth0 session and performs a redirect to  `/v2/logout` |
| getTokenSilently | calls Auth0's [getTokenSilently](https://auth0.github.io/auth0-spa-js/classes/auth0client.html#gettokensilently) function to fetch a new access token with no interaction |

<br />

| &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp; Properties | Description |
| -: | - |
| emailVerified | indicates whether the user has verified their email address |
| isAuthorized | indicates whether the user has successfully authenticated |
| isLoading | indicates whether there is an active loading state |
| error | stores active error |
| user | stores information about the logged-in user |


**AuthWall**

```
<AuthWall 
  authStore
  Loading
  UnauthorizedPage
  EmailVerificationPage
  handleTargetUrl
>
  <ProtectedComponent />
</AuthWall>
```

| Required Props | Description |
| -: | - |
| authStore | initialized AuthStore |
| Loading | component that renders the loading page/state |
| UnauthorizedPage | component that renders the page for an unauthorized user logging in |
| EmailVerificationPage | component that renders the page for a user who has not verified their email address |

<br />

| &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Optional Props | Description |
| -: | - |
| handleTargetUrl | *handleTargetUrl: ((targetUrl:  string) =>  void) \|  undefined* <br /> runs a callback function, if provided, that will handle the Auth0 `appState` target URL |

### Example Implementation via RootStore and React Context:

First, set up a RootStore (a JavaScript class) that will initialize and house this package's AuthStore. This pattern is particularly useful if you have multiple data stores that you will need to access throughout your application. Read more about this mobX pattern here: [Defining data stores](https://mobx.js.org/defining-data-stores.html)

*RootStore.ts*
```
import { AuthStore } from "@recidiviz/auth";

const authSettings = {
  domain: <AUTH0 DOMAIN>,
  client_id: <AUTH0 CLIENT_ID>,
  redirect_uri: <AUTH0 REDIRECT_URI>,
  audience: <AUTH0 AUDIENCE>,
  useRefreshTokens: <true | false>,
};

class RootStore {
  authStore: AuthStore;
  
  constructor() {
	this.authStore = new AuthStore({ authSettings });
  }
}

export default new RootStore();
export type { RootStore };
```

Next, set up a [React context provider](https://reactjs.org/docs/context.html) that will allow you to utilize the `authStore` throughout your application by importing `useStore` and destructuring the `authStore` --- e.g. `const { authStore } = useStore()`.

*StoreProvider.tsx*
```
import React, { useContext } from "react";
import rootStore from "./RootStore";

const StoreContext = React.createContext<typeof rootStore | undefined>(undefined);

export const StoreProvider: React.FC<React.ReactNode> = ({
  children
}): React.ReactElement => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);

export function useStore(): typeof rootStore {
  const context = useContext(StoreContext);

  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }

  return context;
}
```

  Import `AuthWall`, `rootStore`, `StoreProvider`, required `AuthWall` prop components and components you want protected behind an auth wall --- and you are all set!

*App.tsx*
```
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AuthWall } from "@recidiviz/auth";
import { rootStore, StoreProvider } from "./stores";

import Loading from "./components/Loading";
import UnauthorizedPage from "./components/Auth/UnauthorizedPage";
import VerificationPage from "./components/Auth/VerificationPage";
import ProtectedComponent from "./ProtectedComponent";

const  App:  React.FC  = ():  ReactElement  => {
  const { authStore } = rootStore;
    
  return (
    <StoreProvider>
      <AuthWall
        authStore={authStore}
        Loading={Loading}
        UnauthorizedPage={UnauthorizedPage}
        EmailVerificationPage={VerificationPage}
      >
        <BrowserRouter>
          <ProtectedComponent />
        </BrowserRouter>
      </AuthWall>
    </StoreProvider>
  );
};

export  default  App;
```

Now that you've set up a context provider, you can import `useStore` anywhere in your app (that's wrapped within the `StoreProvider`) and utilize the AuthStore API.

*ProtectedComponent.tsx*

```
import React from "react";
import { observer } from  "mobx-react-lite";

import { useStore } from "./stores";

const  ProtectedComponent:  React.FC  = ():  ReactElement  => {
  const { authStore } = useStore();
    
  return (
    <Menu>
	  <LogoutButton onClick={authStore.logout} />
    </Menu>
  );
};

export  default  observer(ProtectedComponent);
```

## Local Development

The component library can be developed directly alongside dependent projects via [yalc](https://github.com/wclr/yalc).

Running `yarn watch` will rebuild the application bundle and publish it to yalc whenever you make changes. In the dependent project(s), there is a one-time step of running `yalc add --link @recidiviz/auth` (and `yarn install`) before starting the development server for that application; once this is done, your changes here should be picked up automatically and trigger a reload. Run `yalc remove @recidiviz/auth` to restore the project's dependencies to their previous state.

## Module Scope

The package's `main` entrypoint is at [src/index.ts](https://github.com/Recidiviz/web-libraries/blob/main/packages/auth/src/index.tsx).