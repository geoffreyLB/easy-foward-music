import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import axios from 'axios';
import UserSpotifyContainer from '@components/SwitchMusic/SpotifySwitch/UserSpotify/UserSpotify.container/';

const Profile = ({ spotifyProfilData }) => {
  return (
    <div className="user-spotify__profile-container">
      {Object.keys(spotifyProfilData).length > 0 ? (
        <div className="user-spotify__profile-container__infos">
          {spotifyProfilData.images.map(image => (
            <img
              className="user-spotify__profile-container__infos__picture"
              key={image}
              src={image.url}
              alt={spotifyProfilData.display_name}
            />
          ))}
          <div>
            <div>
              <span className="user-spotify__profile-container__infos__name">
                {spotifyProfilData.display_name} ({spotifyProfilData.country})
              </span>
            </div>
            <div className="user-spotify__profile-container__infos__to-spotify">
              <span>Lien vers profil Spotify :</span>{' '}
              <a
                href={spotifyProfilData.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                {spotifyProfilData.external_urls.spotify}
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>Playlist en cours de chargement</div>
      )}
    </div>
  );
};

Profile.propTypes = {
  spotifyProfilData: PropTypes.shape({
    country: PropTypes.string,
    display_name: PropTypes.string,
    external_urls: PropTypes.shape({
      spotify: PropTypes.string.isRequired,
    }),
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default Profile;
