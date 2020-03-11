import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

const UserPlaylist = ({ location }) => {
  // Token values
  const [accesToken, setAccessToken] = useState('');
  const [tokenType, setTokenType] = useState('');
  const [expiresIn, setExpiresIn] = useState('');
  const [spotifyPlaylistData, setSpotifyPlaylistData] = useState({});

  // Hash Token
  const { hash } = location;
  const hashValues = queryString.parse(hash);
  const { access_token, expires_in, token_type } = hashValues;

  const { items } = spotifyPlaylistData;

  // Token headers for the get request
  const config = {
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${access_token}` },
  };

  useEffect(() => {
    setAccessToken(access_token);
    setTokenType(expires_in);
    setExpiresIn(token_type);
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (accesToken) {
        try {
          const result = await axios.get(SPOTIFY_PROFIL_PLAYLISTS, config);
          setSpotifyPlaylistData(result.data);
        } catch (err) {
          console.error('Error to fetch Spotify profile data');
        }
      }
    }
    fetchData();
  }, [accesToken, SPOTIFY_PROFIL_PLAYLISTS]);

  console.log(items);

  return (
    <div>
      User UserPlaylist
      {Object.keys(spotifyPlaylistData).length > 0 && (
        <div>
          {items.map(item => (
            <Link key={item.name} to={`/playlist/${item.id}`}>
              <div key={item.name}>
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserPlaylist;
