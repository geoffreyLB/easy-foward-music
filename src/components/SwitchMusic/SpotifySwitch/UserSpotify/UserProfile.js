import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import UserContainer from '@components/SwitchMusic/SpotifySwitch/UserSpotify/User.container/';

const UserProfile = ({ spotifyProfilData }) => {

  const { country, display_name, product, followers, external_urls, images } = spotifyProfilData;

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

export default UserContainer(UserProfile);
