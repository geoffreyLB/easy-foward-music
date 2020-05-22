import React from 'react';
import Grid from '@material-ui/core/Grid';
import SpotifySwitch from '@components/SwitchMusic/SpotifySwitch/SpotifySwitch';
import DeezerSwitch from '@components/SwitchMusic/DeezerSwitch/DeezerSwitch';
import Header from '@components/Header/Header';

const SwitchMusic: React.FC = () => {
  return (
    <div className="switch-music">
      <Header />
      <div className="switch-music__description-container">
        <Grid container alignItems="center" justify="center">
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
            <DeezerSwitch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchMusic;
