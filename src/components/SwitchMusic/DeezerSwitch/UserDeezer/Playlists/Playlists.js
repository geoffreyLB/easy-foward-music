import React from 'react';
import { Link } from 'react-router-dom';
import UserDeezerContainer from '@components/SwitchMusic/DeezerSwitch/UserDeezer/UserDeezer.container/';

const Playlists = ({ deezerPlaylistData }) => {
  const { data } = deezerPlaylistData;

  return (
    <div className="user-deezer__playlists-container">
      {Object.keys(deezerPlaylistData).length > 0 ? (
        <div className="user-deezer__playlists-container__playlists">
          {data.map(item => (
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

export default UserDeezerContainer(Playlists);
