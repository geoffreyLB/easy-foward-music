import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import axios from 'axios';

import Header from '@components/Header/Header';
import Profile from '@components/SwitchMusic/SpotifySwitch/UserSpotify/Profile/Profile';
import Playlists from '@components/SwitchMusic/SpotifySwitch/UserSpotify/Playlists/Playlists';

const UserSpotify = ({ location }) => {
  return (
    <div className="user-spotify">
      <Header />
      <Profile location={location} />
      <Playlists location={location} />
    </div>
  );
};

UserSpotify.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default UserSpotify;
