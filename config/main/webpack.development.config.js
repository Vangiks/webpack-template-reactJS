  const { merge } = require('webpack-merge')
  const baseWebpackConfig = require('./webpack.base.config')
  
  const developmentConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        port: 8080,
        open: true,
        hot: true,
      },
  })
  
  module.exports = new Promise((resolve, reject) => {
    resolve(developmentConfig)
  })