const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, '../../src/client'), // entry: `${PATHS.src}/your-module.js`,
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]-[hash:base64:5]',
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]-[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '../../dist/client'),
    filename: 'index.js',
    /*
      publicPath: '/' - relative path for dist folder (js,css etc)
      publicPath: './' (dot before /) - absolute path for dist folder (js,css etc)
    */
    publicPath: '/',
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '../../index.html'),
    }),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, '../../src'), // Example: import Dog from "@/assets/img/dog.jpg"
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
};
