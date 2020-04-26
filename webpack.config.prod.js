/* eslint-disable import/no-unresolved */
const R = require('ramda');

const webpackBaseConfig = require('./webpack.config.base');


const webpackDevOverrides = {
  mode: 'production',
};

module.exports = R.mergeDeepRight(
  webpackBaseConfig,
  webpackDevOverrides,
);
