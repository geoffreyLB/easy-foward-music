import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import axios from 'axios';

const UserDeezerContainer = WrappedComponent => ({ location }) => {
  // Token values
  const [accessToken, setAccessToken] = useState('');
  const [expiresIn, setExpiresIn] = useState('');
  const [deezerProfilData, setDeezerProfilData] = useState({});
  const [deezerPlaylistData, setDeezerPlaylistData] = useState({});

  // Hash Token
  const { hash } = location;
  const hashValues = queryString.parse(hash);
  const { access_token, expires_in } = hashValues;

  console.log(access_token);

  // Token headers for the get request
  const configHeaders = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  };

  useEffect(() => {
    setAccessToken(access_token);
    setExpiresIn(expires_in);
  }, [access_token, expires_in]);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (accessToken) {
        try {
          const result = await axios.get(DEEZER_PROFIL, configHeaders);
          if (mounted) {
            setDeezerProfilData(result.data);
          }
        } catch (err) {
          console.error('Error to fetch Deezer profile data');
        }
      }
    }

    fetchData();
    return () => (mounted = false);
  }, [accessToken, DEEZER_PROFIL]);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (accessToken) {
        try {
          const result = await axios.get(DEEZER_PROFIL_PLAYLISTS, configHeaders);
          if (mounted) {
            setDeezerPlaylistData(result.data);
          }
        } catch (err) {
          console.error('Error to fetch Deezer playlist data');
        }
      }
    }

    fetchData();
    return () => (mounted = false);
  }, [accessToken, DEEZER_PROFIL_PLAYLISTS]);

  return (
    <div>
      <WrappedComponent
        deezerProfilData={deezerProfilData}
        deezerPlaylistData={deezerPlaylistData}
      />
    </div>
  );
};

export default UserDeezerContainer;
