import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import axios from 'axios';

// const DEEZER_ACCOUNT_CONNECTION = https://connect.deezer.com/oauth/access_token.php?app_id=YOU_APP_ID&secret=YOU_APP_SECRET&code=THE_CODE_FROM_ABOVE

const UserDeezerContainer = WrappedComponent => ({ location }) => {
  const [secretCode, setSecretCode] = useState('');

  // const { search } = location;
  // const searchCode = queryString.parse(search);

  // useEffect(() => {
  //   setSecretToken(searchCode);
  // }, []);

  // si le search token est obtenu
  // redirect DEEZER_ACCOUNT_CONNECTION

  return (
    <div>
      <WrappedComponent location={location} />
    </div>
  );
};

export default UserDeezerContainer;
