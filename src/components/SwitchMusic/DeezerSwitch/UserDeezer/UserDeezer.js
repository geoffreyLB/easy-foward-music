import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '@components/Header/Header';
import Profile from '@components/SwitchMusic/DeezerSwitch/UserDeezer/Profile/Profile';
import Playlists from '@components/SwitchMusic/DeezerSwitch/UserDeezer/Playlists/Playlists';
import UserDeezerContainer from '@components/SwitchMusic/DeezerSwitch/UserDeezer/UserDeezer.container/';

const UserDeezer = ({ deezerProfilData, deezerPlaylistData }) => {
  return (
    <div className="user-deezer">
      <Header />
      <Profile deezerProfilData={deezerProfilData} />
      <Playlists deezerPlaylistData={deezerPlaylistData} />
    </div>
  );
};

UserDeezer.propTypes = {
  deezerProfilData: PropTypes.shape({}).isRequired,
  deezerPlaylistData: PropTypes.shape({}).isRequired,
};

export default UserDeezerContainer(UserDeezer);
