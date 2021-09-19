const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container', // name of host module
      remotes: {
        // "remotes" controls how webpack decides how to load

        // the products KVP works in conjunction with bootstrap.js
        // The "products" name in this url has to match what's
        // in the name of the module you're trying to import

        // "remoteEntry" is just what the generated file is called.
        // don't mess with it.
        products: 'products@http://localhost:8081/remoteEntry.js',
        cart: 'cart@http://localhost:8082/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
