const R = require('ramda')
const webpackBaseConfig = require('./webpack.config.base')


const webpackProdOverrides = {
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    publicPath: '/',
  }
};

module.exports = R.mergeDeepRight(
  webpackBaseConfig,
  webpackProdOverrides,
)
