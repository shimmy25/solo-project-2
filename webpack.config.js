/* eslint-disable no-unused-vars */
const checking = 'changes';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = (env) => {
  return {
    entry: { src: '/client/index.js' },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    mode: env.NODE_ENV,

    devServer: {
      host: 'localhost',
      port: 8080,
      static: {
        directory: path.resolve(__dirname, 'client'),
        publicPath: '/',
      },
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
        template: 'index.html',
      }),
    ],

    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // creates 'style' nodes from JS Strings
            'style-loader',
            // Translates CSS into common JS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      ],
    },
  };
};
