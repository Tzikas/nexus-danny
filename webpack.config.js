const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');

const webpack = require('webpack');

module.exports = {
  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    overlay: true,
    port: 3000,
    watchContentBase: true,
  },
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, 'node_modules/')],
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    chunkFilename: '[chunkhash].js',
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    sourceMapFilename: '../../sourcemap/[file].map',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: 'all',
          name: 'vendor',
          priority: -20,
          test: /node_modules/,
        },
      },
    },
  },
  plugins: [
    new CopyWebpackPlugin([{ context: './assets/', from: './**/*', to: './' }]),
    new HtmlWebpackPlugin({
      title: 'challenge',
      template: path.resolve(__dirname, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new WriteFilePlugin(),
  ],
};
