const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

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

  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};
