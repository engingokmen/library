const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    libraryTarget: "commonjs2",
  },
};
