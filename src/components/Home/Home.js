import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuHeader from '@components/Header/MenuHeader/MenuHeader';
import Header from '@components/Header/Header';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Grid
        container
        className="home__description-container"
        alignItems="center"
        justify="center"
      >
        <Grid item className="home__description-container">
          <h2 className="home__description-container__preview">
            The Application to Switch Playlist between Spotfy and Deezer
          </h2>
        </Grid>
        <Grid item>
          <h2 className="home__description-container__text">
            Tired of opening both apps to configure playlist conversion ? Easy Switch is here for
            you ! Switch easily your favorite songs and playlists from Deezer to Spotify, and vice
            versa. In few clicks !
          </h2>
        </Grid>
        <Grid
          container
          className="home__button-container"
          alignItems="center"
          justify="center"
        >
          <Button className="home__button-container__button">
            <Link to="/switch-music">Jump In !</Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
