const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: '[chunkhash]_build.js'
  } ,
  mode: 'production',
  module: {
    rules: [
      {
        // Conditions:
        test: /\.js?$/,
        loader: "babel-loader",
        // the loader which should be applied, it'll be resolved relative to the context
        options: {
          "presets": ["@babel/preset-env","@babel/preset-react"]
        },
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};
