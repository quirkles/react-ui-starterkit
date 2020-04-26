const R = require('ramda')

const webpackBaseConfig = require('./webpack.config.base')


const webpackDevOverrides = {
  mode: 'development',
};

module.exports = R.mergeDeepRight(
  webpackBaseConfig,
  webpackDevOverrides,
)
