const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/demo.re",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  devServer: {
    contentBase: "./dist"
  },

  module: {
    rules: [{ test: /\.(re|ml)$/, use: "bs-loader" }]
  },

  resolve: {
    extensions: [".re", ".ml", ".js"]
  },

  plugins: [new CleanWebpackPlugin(["dist"]), new HtmlWebpackPlugin()]
};
