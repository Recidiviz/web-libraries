import { GlobalStyle } from "../src";
import { addDecorator } from "@storybook/react";

addDecorator((story) => {
  return (
    <>
      <GlobalStyle />
      {story()}
    </>
  );
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
