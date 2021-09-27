const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  devtool: 'eval-source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        //'./CartShow': './src/index',
        './CartShow': './src/bootstrap',
      },
      // share if you can!
      shared: ['faker'],
      // Or use a singleton and get fancy!
      // shared: {
      //   faker: {
      //     singleton: true,
      //   },
      // },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
