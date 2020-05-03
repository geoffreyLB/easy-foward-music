import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Header from '@components/Header/Header';
import Profile from '@components/SwitchMusic/SpotifySwitch/UserSpotify/Profile/Profile';
import Playlists from '@components/SwitchMusic/SpotifySwitch/UserSpotify/Playlists/Playlists';
import UserSpotifyContainer from '@components/SwitchMusic/SpotifySwitch/UserSpotify/UserSpotify.container/';

const UserSpotify = ({ spotifyProfilData, spotifyPlaylistData }) => {
  return (
    <div className="user-spotify">
      <Header />
      <Profile spotifyProfilData={spotifyProfilData} />
      <Playlists spotifyPlaylistData={spotifyPlaylistData} />
    </div>
  );
};

UserSpotify.propTypes = {
  spotifyProfilData: PropTypes.shape({}).isRequired,
  spotifyPlaylistData: PropTypes.shape({}).isRequired,
};

export default UserSpotifyContainer(UserSpotify);
