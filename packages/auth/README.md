# Recidiviz Authentication Module

Auth0-powered authentication module for use within the web applications that make up the Recidiviz web platform.

## Usage

This module contains two components:

| Component | Description |
| -: | - |
| AuthStore | a mobX data store ([Defining data stores](https://mobx.js.org/defining-data-stores.html)) that handles Auth0 authentication, authentication states, logout and token retrieval functionality |
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


## Local Development

The component library can be developed directly alongside dependent projects via [yalc](https://github.com/wclr/yalc).

Running `yarn watch` will rebuild the application bundle and publish it to yalc whenever you make changes. In the dependent project(s), there is a one-time step of running `yalc add --link @recidiviz/auth` (and `yarn install`) before starting the development server for that application; once this is done, your changes here should be picked up automatically and trigger a reload. Run `yalc remove @recidiviz/auth` to restore the project's dependencies to their previous state.

## Module Scope

The package's `main` entrypoint is at [src/index.ts](https://github.com/Recidiviz/web-libraries/blob/main/packages/auth/src/index.tsx).