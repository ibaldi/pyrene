/* eslint-disable no-console */
import webpack from 'webpack'; // eslint-disable-line no-unused-vars
import path from 'path';

import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const production = process.env.NODE_ENV === 'production';

const config = {
  mode: production ? 'production' : 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: {
          loader: 'babel-loader',
          query: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:10]',
              sourceMap: !production
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
};

if (production) {
  console.warn('webpack is running in production mode\n');
} else {
  console.warn('webpack is running in development mode\n');
  config.devServer = {
    historyApiFallback: true
  };
}

export default config;
