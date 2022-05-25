const path = require("path");

module.exports = {
  // The stories array sorts the story list
  stories: [
    "../src/stories/Pages/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
};
