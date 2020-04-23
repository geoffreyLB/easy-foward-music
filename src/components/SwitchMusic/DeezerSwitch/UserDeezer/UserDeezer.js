import React, { useState, useEffect } from 'react';
import Header from '@components/Header/Header';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import axios from 'axios';

import Profile from '@components/SwitchMusic/DeezerSwitch/UserDeezer/Profile/Profile';
import Playlists from '@components/SwitchMusic/DeezerSwitch/UserDeezer/Playlists/Playlists';
import UserDeezerContainer from '@components/SwitchMusic/DeezerSwitch/UserDeezer/UserDeezer.container';

// const DEEZER_ACCOUNT_CONNECTION = `https://connect.deezer.com/oauth/access_token.php?app_id=${DEEZER_APP_ID}&secret=${SECRET_KEY_DEEZER}&code=${secretCode}`

// const DEEZER_ACCOUNT_AUTHORIZE = `https://connect.deezer.com/oauth/auth.php?app_id=${DEEZER_APP_ID}&redirect_uri=${REDIRECT_URI_DEEZER}&perms=basic_access,email`;

const UserDeezer = ({ location }) => {
  const [secretCode, setSecretCode] = useState('');
  const [accesToken, setAccessToken] = useState('');

  const { search } = location;
  const searchCode = queryString.parse(search);
  const { code } = searchCode;

  const DEEZER_ACCOUNT_CONNECTION = `https://connect.deezer.com/oauth/access_token.php?app_id=${DEEZER_APP_ID}&secret=${SECRET_KEY_DEEZER}&code=${code}&output=json`;

  // const configHeaders = {
  //   headers: { 'Content-Type': 'application/json' },
  // };

  // useEffect(() => {
  //   window.location.assign(DEEZER_ACCOUNT_AUTHORIZE);
  // }, [DEEZER_ACCOUNT_AUTHORIZE]);

  // si le search token est obtenu
  // redirect DEEZER_ACCOUNT_CONNECTION
  // APP_ID, secret_key, secretCode,

  // Après connection => le code de l'url ne sera plus valide après le reload de la page
  // Je dois donc faire un get à l'arrivée sur DEEZER_ACCOUNT_CONNECTION
  // Ensuite rediriger

  // To get the token of Deezer
  useEffect(() => {
    if(DEEZER_ACCOUNT_CONNECTION){
      console.log(DEEZER_ACCOUNT_CONNECTION);
      // const fetchData = async () => {
      //   try {
      //     const result = await axios.get(DEEZER_ACCOUNT_CONNECTION);
      //     console.log(result.data);
      //   } catch (err) {
      //     console.error('Error to fetch Deezer access token');
      //   }
      // };
      // fetchData();
    }
  });

  return (
    <div className="user-deezer">
      <Header />
      <Profile />
      <Playlists />
    </div>
  );
};

// UserDeezer.propTypes = {
//   location: PropTypes.shape({}).isRequired,
// }

export default UserDeezerContainer(UserDeezer);
