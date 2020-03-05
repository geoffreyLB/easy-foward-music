import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MenuHeader from '@components/MenuHeader/MenuHeader';

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header__logo">Easy Switch</div>
        <MenuHeader />
      </div>
      <h2 className="">
        Switch easily your favorite songs ans playlists from Deezer to Spotify, and vice et versa.
        Without to have both applications in the same time
      </h2>
      <Button variant="contained" color="primary" disableElevation>
        <Link to="/switch-music">Jump In !</Link>
      </Button>
    </div>
  );
};

export default Home;
