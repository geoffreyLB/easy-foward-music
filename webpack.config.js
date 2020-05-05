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
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
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
      SWITCH_MUSIC_URL: JSON.stringify('http://localhost:8080/switch-music'),
      // Spotify
      SPOTIFY_PROFIL: JSON.stringify('https://api.spotify.com/v1/me'),
      SPOTIFY_PROFIL_PLAYLISTS: JSON.stringify('https://api.spotify.com/v1/me/playlists'),
      SPOTIFY_CLIENT_ID: JSON.stringify('1117bee600a94c6a9b18548dac3c96e1'),
      REDIRECT_URI_SPOTIFY: JSON.stringify('http://localhost:8080/userSpotify'),
      SPOTIFY_SCOPES: JSON.stringify(['user-read-private', 'user-read-email']),
      // Deezer
      DEEZER_API: JSON.stringify('https://api.deezer.com/user/'),
      DEEZER_PROFIL: JSON.stringify('https://api.deezer.com/user/me'),
      DEEZER_PROFIL_PLAYLISTS: JSON.stringify('https://api.deezer.com/user/me/playlists'),
      DEEZER_APP_ID: JSON.stringify('400104'),
      REDIRECT_URI_DEEZER: JSON.stringify('http://localhost:8080/userDeezer'),
      SECRET_KEY_DEEZER: JSON.stringify('f7a954b05703f19c7b96ff5f8bd5695b'),
      // Cors
      CORS_ANYWHERE: JSON.stringify('https://cors-anywhere.herokuapp.com/'),
    }),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@fonts': path.resolve(__dirname, 'src/fonts/'),
      '@reducers': path.resolve(__dirname, 'src/reducers/'),
      '@actions': path.resolve(__dirname, 'src/actions/'),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  output: {
    publicPath: '/',
  },
};
