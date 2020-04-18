import React from 'react';
import Grid from '@material-ui/core/Grid';
import SpotifySwitch from '@components/SwitchMusic/SpotifySwitch/SpotifySwitch';
import Header from '@components/Header/Header';
import Button from '@material-ui/core/Button';

const SwitchMusic = () => {
  return (
    <div className="switch-music">
      <Header />
      <div className="switch-music__description-container">
        <Grid
          container
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <h2 className="switch-music__description-container__preview">
              Connect your Spotify and Deezer Account !
            </h2>
          </Grid>
        </Grid>
        <div className="switch-music__connect-container">
          <div className="switch-music__spotify">
            <SpotifySwitch />
          </div>
          <div className="switch-music__deezer">
            <Button variant="contained" color="secondary">
              Connect with Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchMusic;
