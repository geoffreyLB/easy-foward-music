import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Header from '@components/Header/Header';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__description-container">
        <Grid container alignItems="center" justify="center">
          <Grid className="home__description-container__preview">
            <h2 className="home__description-container__preview__text">
              The Application to Switch Playlist between Spotfy and Deezer
            </h2>
          </Grid>
          <Grid>
            <h2 className="home__description-container__text">
              Tired of opening both apps to configure playlist conversion ? Easy Switch is here for
              you ! Switch easily your favorite songs and playlists from Deezer to Spotify, and vice
              versa. In few clicks !
            </h2>
          </Grid>
          <Grid container className="home__button-container" alignItems="center" justify="center">
            <Link to="/switch-music">
              <Button className="home__button-container__button">Jump In !</Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
