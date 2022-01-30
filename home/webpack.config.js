const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool:'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: true
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: 'Home',
      filename: 'remoteEntry.js',
      remotes: {
        LazyLoad:
          'LazyLoad@http://localhost:3001/remoteEntry.js',
        Routing:
          'Routing@http://localhost:3002/remoteEntry.js',
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true },'react-router-dom' : { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
