import React from 'react';
import PropTypes from 'prop-types';

import Header from '@components/Header/Header';
import Profile from '@components/SwitchMusic/DeezerSwitch/UserDeezer/Profile/Profile';
import Playlists from '@components/SwitchMusic/DeezerSwitch/UserDeezer/Playlists/Playlists';
import UserDeezerContainer from '@components/SwitchMusic/DeezerSwitch/UserDeezer/UserDeezer.container';

interface Props {
  deezerProfilData: object;
  deezerPlaylistData: object;
}

const UserDeezer: React.FC<Props> = ({ deezerProfilData, deezerPlaylistData }) => {
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
