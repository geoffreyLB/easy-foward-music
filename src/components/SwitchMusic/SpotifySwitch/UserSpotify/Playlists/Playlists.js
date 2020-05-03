import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

const Playlists = ({ spotifyPlaylistData }) => {
  return (
    <div className="user-spotify__playlists-container">
      {Object.keys(spotifyPlaylistData).length > 0 ? (
        <div className="user-spotify__playlists-container__playlists">
          {spotifyPlaylistData.items.map(item => (
            <Link
              className="user-spotify__playlists-container__playlists__one-playlist"
              key={item.name}
              to={`/playlist/${item.id}`}
            >
              <div key={item.name}>
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div>Aucune playlist disponible</div>
      )}
    </div>
  );
};

Playlists.propTypes = {
  spotifyPlaylistData: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default Playlists;
