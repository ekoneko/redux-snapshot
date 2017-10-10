const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: 'index'
  },
  output: {
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    modules: ['.', '../node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
    {
      test: /\.tsx?/,
      loader: 'awesome-typescript-loader'
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ]
}