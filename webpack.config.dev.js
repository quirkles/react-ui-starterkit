/* eslint-disable import/no-unresolved */
const R = require('ramda');
const webpackBaseConfig = require('./webpack.config.base');


const webpackProdOverrides = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    host: 'localhost',
    historyApiFallback: true,
  },
  output: {
    publicPath: '/',
  },
};

module.exports = R.mergeDeepRight(
  webpackBaseConfig,
  webpackProdOverrides,
);
