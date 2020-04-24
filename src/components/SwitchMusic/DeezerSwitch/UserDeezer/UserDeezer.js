import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '@components/Header/Header';
import Profile from '@components/SwitchMusic/DeezerSwitch/UserDeezer/Profile/Profile';
import Playlists from '@components/SwitchMusic/DeezerSwitch/UserDeezer/Playlists/Playlists';

const UserDeezer = ({ location }) => {
  return (
    <div className="user-deezer">
      <Header />
      <Profile location={location} />
      <Playlists location={location} />
    </div>
  );
};

UserDeezer.propTypes = {
  location: PropTypes.shape({}).isRequired,
}

export default UserDeezer;
