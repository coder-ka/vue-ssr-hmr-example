const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.config.js");
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");

module.exports = merge(baseConfig, {
  entry: "./src/server-entry.js",
  target: "node",
  devtool: "source-map",
  output: {
    libraryTarget: "commonjs2",
    path: `${__dirname}`
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: [new VueSSRServerPlugin()]
});
