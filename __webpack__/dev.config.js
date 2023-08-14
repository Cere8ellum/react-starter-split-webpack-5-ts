const { merge } = require("webpack-merge");
const common = require("./common.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
  }),
];

module.exports = merge(common, {
  mode: "development",
  target: "web",
  plugins,
  devtool: "inline-source-map",
  output: {
    filename: "[name].[contenthash].js",
  },
});
