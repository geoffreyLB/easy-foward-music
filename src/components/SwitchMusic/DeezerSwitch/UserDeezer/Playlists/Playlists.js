import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Playlists = ({ deezerPlaylistData }) => {
  return (
    <div className="user-deezer__playlists-container">
      {Object.keys(deezerPlaylistData).length > 0 ? (
        <div className="user-deezer__playlists-container__playlists">
          {deezerPlaylistData.data.map(item => (
            <Link
              className="user-deezer__playlists-container__playlists__one-playlist"
              key={item.title}
              to={`/playlist/${item.id}`}
            >
              <div key={item.title}>
                <span>{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div>Aucune playlists disponible</div>
      )}
    </div>
  );
};

Playlists.propTypes = {
  deezerPlaylistData: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default Playlists;
