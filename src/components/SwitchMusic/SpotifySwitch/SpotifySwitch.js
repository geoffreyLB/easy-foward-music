import React, { useEffect, useState } from 'react';

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
