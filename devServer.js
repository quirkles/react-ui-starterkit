const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.dev.js');

const options = config.devServer;

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const devServer = new WebpackDevServer(compiler, options);

const port = process.env.PORT || 5000;
devServer.listen(port, 'localhost', () => {
  // eslint-disable-next-line no-console
  console.log(`dev devServer listening on port ${port}`);
});
