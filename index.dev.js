const app = require("./app");

const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const clientConfig = require("./webpack.config.client");

clientConfig.devtool = "cheap-module-eval-source-map";
clientConfig.entry.main.push("webpack-hot-middleware/client");
clientConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

const clientCompiler = webpack(clientConfig);

app.use(
  webpackDevMiddleware(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    writeToDisk: true,
    noInfo: true
  })
);

app.use(webpackHotMiddleware(clientCompiler));

// server

const serverConfig = require("./webpack.config.server");
const serverCompiler = webpack(serverConfig);

app.use(
  webpackDevMiddleware(serverCompiler, {
    publicPath: serverConfig.output.publicPath,
    writeToDisk: true,
    noInfo: true
  })
);

app.listen(3000);
