import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import axios from 'axios';

const UserSpotifyContainer = WrappedComponent => ({ location }) => {
  // Token values
  const [accesToken, setAccessToken] = useState('');
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
    setTokenType(expires_in);
    setExpiresIn(token_type);
  }, []);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (accesToken) {
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
  }, [accesToken, SPOTIFY_PROFIL]);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (accesToken) {
        try {
          const result = await axios.get(SPOTIFY_PROFIL_PLAYLISTS, configHeaders);
          if (mounted) {
            setSpotifyPlaylistData(result.data);
          }
        } catch (err) {
          console.error('Error to fetch Spotify profile data');
        }
      }
    }

    fetchData();
    return () => (mounted = false);
  }, [accesToken, SPOTIFY_PROFIL_PLAYLISTS]);

  return (
    <div>
      <WrappedComponent
        spotifyProfilData={spotifyProfilData}
        spotifyPlaylistData={spotifyPlaylistData}
      />
    </div>
  );
};

export default UserSpotifyContainer;
