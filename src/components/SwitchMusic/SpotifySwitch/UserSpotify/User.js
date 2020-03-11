import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import axios from 'axios';

import UserProfile from '@components/SwitchMusic/SpotifySwitch/UserSpotify/UserProfile';
import UserPlaylist from '@components/SwitchMusic/SpotifySwitch/UserSpotify/UserPlaylist';

const User = ({ location }) => {
  return (
    <div>
      <UserProfile location={location} />
      <br />
      <UserPlaylist location={location} />
    </div>
  );
};

export default User;
