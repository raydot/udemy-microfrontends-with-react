const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  devtool: 'eval-source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        // Actually, it's bootstrap we need
        // because it exports mount()
        //'./ProductsIndex': './src/index',
        './ProductsIndex': './src/bootstrap',
      },
      // Share Faker if you can!  It will share
      // depending on version #'s in package.json
      shared: ['faker'],
      // Or, you can pull out the big guns and insist on a singleton!
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
