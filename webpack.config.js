/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const slsw = require('serverless-webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
module.exports = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  devtool: 'source-map',
  resolve: {
    extensions: ['.json', '.ts'],
    alias: {
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hotels': path.resolve(__dirname, './src/hotels'),
      '@bookings': path.resolve(__dirname, './src/bookings'),
      '@rooms': path.resolve(__dirname, './src/bookings'),
    },
  },

  externals: [nodeExternals()],
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { transpileOnly: true },
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin({ async: true, eslint: true })],
}
