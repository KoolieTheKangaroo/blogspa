const debug = process.env.NODE_ENV !== 'production';

const path = require('path');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'scripts'),
  build: path.join(__dirname, 'dist'),
};

module.exports = {
  devtool: debug ? 'inline-source-map' : 'hidden',
  entry: {
    app: PATHS.app,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modulesﬂbower_components)/,
        query: {
          presets: ['react','es2015', 'stage-0'],
          plugins: ['react-html-attrs','transform-class-properties','transform-decorators-legacy']
        },
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options:
            {
              importLoaders: 1,
             }
          },
          'less-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=dist/assets/[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file?name=dist/fonts/[name].[ext]'
      },
    ],
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  plugins: debug ? [] : [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin(
        {
          mangle: false,
          sourcemap: false
        }
      ),
    ],
};
