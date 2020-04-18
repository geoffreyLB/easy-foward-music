import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import UserSpotifyContainer from '@components/SwitchMusic/SpotifySwitch/UserSpotify/UserSpotify.container/';

const Playlists = ({ spotifyPlaylistData }) => {
  const { items } = spotifyPlaylistData;

  return (
    <div className="user-spotify__playlists-container">
      {Object.keys(spotifyPlaylistData).length > 0 && (
        <div className="user-spotify__playlists-container__playlists">
          {items.map(item => (
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
      )}
    </div>
  );
};

export default UserSpotifyContainer(Playlists);