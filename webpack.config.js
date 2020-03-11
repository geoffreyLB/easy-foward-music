const path = require('path');
const webpack = require('webpack');

const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new webpack.DefinePlugin({
      SPOTIFY_PROFIL: JSON.stringify('https://api.spotify.com/v1/me'),
      SPOTIFY_PROFIL_PLAYLISTS: JSON.stringify('https://api.spotify.com/v1/me/playlists'),
      SPOTIFY_CLIENT_ID: JSON.stringify('1117bee600a94c6a9b18548dac3c96e1'),
      REDIRECT_URI: JSON.stringify('http://localhost:8080/userSpotify'),
      SPOTIFY_SCOPES: JSON.stringify(['user-read-private', 'user-read-email']),
    }),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  output: {
    publicPath: '/',
  },
};
