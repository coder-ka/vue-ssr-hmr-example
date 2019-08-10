const webpack = require("webpack");
const merge = require("webpack-merge");

const webpackConfig = require("./webpack.config");

const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(webpackConfig, {
  entry: {
    main: ["./src/client-entry.js"]
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].[hash].js",
    publicPath: "/static/"
  },
  plugins: [new CleanWebpackPlugin(), new VueSSRClientPlugin()]
});
