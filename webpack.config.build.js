const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config.client");

const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(webpackConfig, {
  devtool: "source-map",
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  plugins: [new webpack.HashedModuleIdsPlugin()]
});
