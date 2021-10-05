const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json'); // let's get some stuff right from here!

const devConfig = {
  mode: 'development',
  // This is covered extensively in section 95: problem is that
  // because "auth" comes from a sub-path (port/auth/main.js) webpack
  // won't know where to find it if it's not explicitly set.
  // While it doesn't matter to marketing or dashboard because we're not
  // using subpaths in them (yet) we will configure for those as well.
  output: {
    publicPath: 'http://localhost:8082/',
  },
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: '/index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthApp': './src/bootstrap',
      },
      // Dependencies we want to share so they don't get loaded multiple times
      //shared: ['react', 'react-dom'],
      // You can pull them in manually...or:
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
