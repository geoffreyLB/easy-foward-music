import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';

const DEEZER_ACCOUNT_AUTHORIZE = `https://connect.deezer.com/oauth/auth.php?app_id=${DEEZER_APP_ID}&redirect_uri=${REDIRECT_URI_DEEZER}&perms=basic_access&response_type=token`;

const DeezerSwitch = () => {
  const [redirection, setRedirection] = useState(false);

  useEffect(() => {
    if (redirection) {
      try {
        window.location.assign(DEEZER_ACCOUNT_AUTHORIZE);
      } catch (err) {
        console.error(err);
      }
    }
  });

  return (
    <Button
      variant="contained"
      color="secondary"
      aria-label="Deezer button submit"
      type="submit"
      onClick={() => setRedirection(!redirection)}
    >
      Connect with Deezer
    </Button>
  );
};

export default DeezerSwitch;
