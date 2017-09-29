const webpack = require('webpack');
const { join } = require('path');

const dist = join(__dirname, '..', 'src/static');
const vendors = [
    'preact',
    'style-loader',
    'preact-router',
  //  'style-loader'
];

module.exports = {
  output: {
    path: dist,
    filename: '[name].js',
    library: '[name]',
  },
  entry: {
    vendor: vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]',
      context: __dirname,
    }),
  ],
  node: {
    fs: "empty"
  }
};