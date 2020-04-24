import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import axios from 'axios';

const UserSpotifyContainer = WrappedComponent => ({ location }) => {
  // Token values
  const [accessToken, setAccessToken] = useState('');
  const [tokenType, setTokenType] = useState('');
  const [expiresIn, setExpiresIn] = useState('');
  const [spotifyProfilData, setSpotifyProfilData] = useState({});
  const [spotifyPlaylistData, setSpotifyPlaylistData] = useState({});

  // Hash Token
  const { hash } = location;
  const hashValues = queryString.parse(hash);
  const { access_token, expires_in, token_type } = hashValues;

  // Token headers for the get request
  const configHeaders = {
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${access_token}` },
  };

  useEffect(() => {
    setAccessToken(access_token);
    setTokenType(token_type);
    setExpiresIn(expires_in);
  }, [access_token, token_type, expires_in]);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (accessToken) {
        try {
          const result = await axios.get(SPOTIFY_PROFIL, configHeaders);
          if (mounted) {
            setSpotifyProfilData(result.data);
          }
        } catch (err) {
          console.error('Error to fetch Spotify profile data');
        }
      }
    }

    fetchData();
    return () => (mounted = false);
  }, [accessToken, SPOTIFY_PROFIL]);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (accessToken) {
        try {
          const result = await axios.get(SPOTIFY_PROFIL_PLAYLISTS, configHeaders);
          if (mounted) {
            setSpotifyPlaylistData(result.data);
          }
        } catch (err) {
          console.error('Error to fetch Spotify playlist data');
        }
      }
    }

    fetchData();
    return () => (mounted = false);
  }, [accessToken, SPOTIFY_PROFIL_PLAYLISTS]);

  return (
    <div>
      <WrappedComponent
        spotifyProfilData={spotifyProfilData}
        spotifyPlaylistData={spotifyPlaylistData}
      />
    </div>
  );
};

UserSpotifyContainer.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
  }).isRequired,
  hashValues: PropTypes.shape({
    access_token: PropTypes.string.isRequired,
    expires_in: PropTypes.string.isRequired,
    token_type: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserSpotifyContainer;
