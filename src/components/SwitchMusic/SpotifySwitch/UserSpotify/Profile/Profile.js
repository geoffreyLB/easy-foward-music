import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import UserSpotifyContainer from '@components/SwitchMusic/SpotifySwitch/UserSpotify/UserSpotify.container/';

const Profile = ({ spotifyProfilData }) => {
  const { country, display_name, product, followers, external_urls, images } = spotifyProfilData;

  return (
    <div className="user-spotify__profile-container">
      {Object.keys(spotifyProfilData).length > 0 && (
        <div className="user-spotify__profile-container__infos">
          {images.map(image => (
            <img
              className="user-spotify__profile-container__infos__picture"
              key={image}
              src={image.url}
              alt={display_name}
            />
          ))}
          <div>
            <div>
              <span className="user-spotify__profile-container__infos__name">
                {display_name} ({country})
              </span>
            </div>
            <div className="user-spotify__profile-container__infos__to-spotify">
              <span>Lien vers profil Spotify :</span>{' '}
              <a href={external_urls.spotify}>{external_urls.spotify}</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSpotifyContainer(Profile);
