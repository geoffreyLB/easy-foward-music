import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import axios from 'axios';

const UserProfile = ({ location }) => {
  // Token values
  const [accesToken, setAccessToken] = useState('');
  const [tokenType, setTokenType] = useState('');
  const [expiresIn, setExpiresIn] = useState('');
  const [spotifyProfilData, setSpotifyProfilData] = useState({});

  // Hash Token
  const { hash } = location;
  const hashValues = queryString.parse(hash);
  const { access_token, expires_in, token_type } = hashValues;

  const { country, display_name, product, followers, external_urls, images } = spotifyProfilData;

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
          const result = await axios.get(SPOTIFY_PROFIL, config);
          setSpotifyProfilData(result.data);
        } catch (err) {
          console.error('Error to fetch Spotify profile data');
        }
      }
    }
    fetchData();
  }, [accesToken, SPOTIFY_PROFIL]);

  return (
    <div>
      User Profil
      {Object.keys(spotifyProfilData).length > 0 && (
        <div>
          {images.map(image => (
            <img key={image} src={image.url} alt={display_name} />
          ))}
          <span>Pays : {country}</span>
          <span>Nom/Prénom : {display_name}</span>
          <span>Type de profil : {product}</span>
          <span>Nombre de followers : {followers.total}</span>
          <span>Lien vers profil Spotify : {external_urls.spotify}</span>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
