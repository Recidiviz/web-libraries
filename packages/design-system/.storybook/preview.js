import { AVAILABLE_FONTS, GlobalStyle } from "../src";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";

addDecorator((story) => {
  return (
    <>
      <ThemeProvider
        theme={{
          fonts: {
            heading: AVAILABLE_FONTS.LIBRE_BASKERVILLE,
            body: AVAILABLE_FONTS.LIBRE_FRANKLIN,
            serif: AVAILABLE_FONTS.LIBRE_BASKERVILLE,
            sans: AVAILABLE_FONTS.LIBRE_FRANKLIN,
          },
        }}
      >
        <GlobalStyle />
        {story()}
      </ThemeProvider>
    </>
  );
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
