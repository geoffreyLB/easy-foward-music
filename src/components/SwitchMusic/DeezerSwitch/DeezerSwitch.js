import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';

// APP_ID : 400104
// redirect_uri : http://localhost:8080/userDeezer
// perms: basic_access,email

// https://connect.deezer.com/oauth/auth.php?app_id=YOUR_APP_ID&redirect_uri=YOUR_REDIRECT_URI&perms=basic_access,email

// APP_ID : 400104
// secret_key : f7a954b05703f19c7b96ff5f8bd5695b
// generate_code :

// https://connect.deezer.com/oauth/access_token.php?app_id=YOU_APP_ID&secret=YOU_APP_SECRET&code=THE_CODE_FROM_ABOVE
const DEEZER_ACCOUNT_AUTHORIZE = `https://connect.deezer.com/oauth/auth.php?app_id=${DEEZER_APP_ID}&redirect_uri=${REDIRECT_URI_DEEZER}&perms=basic_access,email`;

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
