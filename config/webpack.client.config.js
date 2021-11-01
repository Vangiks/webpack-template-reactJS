const developmentConfig = require('./main/webpack.development.config')
const productionConfig = require('./main/webpack.production.config')

const NODE_ENV = process.env.NODE_ENV;
let webpack = developmentConfig;

if (NODE_ENV === 'production') {
  webpack = productionConfig;
}

module.exports = new Promise((resolve, reject) => {
  resolve(webpack)
})