const webpack = require('webpack');
const path = require('path');
const BabiliPlugin = require('babili-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sourcePath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');

module.exports = (env = {}) => {
  const isProduction = env.production === true;
  const environment = isProduction ? 'production' : 'development';
  const extractSass = new ExtractTextPlugin({
    filename: 'styles.css',
    allChunks: true,
    disable: environment === 'development',
  });

  return {
    context: sourcePath,

    entry: './index.js',

    output: {
      path: distPath,
      filename: 'index.js',
      chunkFilename: '[name].chunk.js',
    },

    plugins: [
      ...(isProduction) ? [new BabiliPlugin()] : [],

      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(environment),
        },
      }),
      extractSass,
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/,
          use: extractSass.extract({
            use: [{
              loader: 'css-loader',
              options: { minimize: isProduction },
            }, {
              loader: 'sass-loader',
            }],
            fallback: [{
              loader: 'style-loader',
            }],
          }),
        },
      ],
    },

    devtool: isProduction ? 'hidden-source-map' : 'cheap-module-eval-source-map',

    devServer: {
      contentBase: sourcePath,
      compress: true,
      port: 8080,
      historyApiFallback: true,
    },
  };
};
