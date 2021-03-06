var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src/client"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: ["babel-polyfill","./js/app.js"],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-decorators-legacy','transform-async-to-generator' ,'react-html-attrs', 'transform-class-properties'],
        }
      }
    ]
  },
  output: {
    path:__dirname + "/src/client",
    filename: "bundle.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
