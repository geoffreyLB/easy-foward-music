import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import UserContainer from '@components/SwitchMusic/SpotifySwitch/UserSpotify/User.container/';

const UserPlaylist = ({ spotifyPlaylistData }) => {
  const { items } = spotifyPlaylistData;

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

export default UserContainer(UserPlaylist);
