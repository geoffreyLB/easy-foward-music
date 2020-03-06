import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SPOTIFY_CLIENT_ID = '1117bee600a94c6a9b18548dac3c96e1';
// const CLIENT_SECRET = 'a5ead448f01544a185bb111a17428bf0';
const REDIRECT_URI = 'http://localhost:8080/user/';
// var scopes = \'user-read-private user-read-email\'
const SPOTIFY_SCOPES = ['user-read-private', 'user-read-email'];

const SPOTIFY_ACCOUNT_AUTHORIZE = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${encodeURIComponent(
  REDIRECT_URI,
)}&scope=${encodeURIComponent(SPOTIFY_SCOPES.join(' '))}&response_type=token`;

const SpotifySwitch = () => {
  const [redirection, setRedirection] = useState(false);

  useEffect(() => {
    if (redirection) {
      try {
        window.location.assign(SPOTIFY_ACCOUNT_AUTHORIZE);
      } catch (err) {
        console.error(err);
      }
    }
  });

  useEffect(() => {
    const result = axios.get(SPOTIFY_ACCOUNT_AUTHORIZE);
    console.log(result.data);
  });

  return (
    <div>
      <button
        aria-label="Spotify button submit"
        type="submit"
        onClick={() => setRedirection(!redirection)}
      >
        Submit your Spotify Account
      </button>
    </div>
  );
};

export default SpotifySwitch;
