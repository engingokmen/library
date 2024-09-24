const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  externals: {
    react: "react", // Prevent bundling React
    "react-dom": "react-dom", // Prevent bundling React DOM
    "styled-components": "styled-components", // Prevent bundling styled-components
  },
  output: {
    libraryTarget: "umd",
    globalObject: "this",
  },
});
