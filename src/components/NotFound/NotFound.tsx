import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@components/Header/Header';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const Notfound: React.FC = () => {
  return (
    <div className="notfound">
      <Header />
      <Grid
        container
        className="notfound__container"
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <div>
          <Grid
            container
            className="notfound__container__description"
            alignItems="center"
            justify="center"
          >
            <span className="notfound__container__description__404">404</span>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            className="notfound__container__description"
          >
            <span className="notfound__container__description__pagetext">Page not found :/</span>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            className="notfound__container__description"
          >
            <span className="notfound__container__description__redirect-text">
              The page you are looking for might been removed, had its name changed or is temporily
              unavailable.
            </span>
          </Grid>
          <Grid container spacing={0} alignItems="center" justify="center">
            <Button className="home__button-container__button">
              <Link to="/home">Go to Homepage</Link>
            </Button>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default Notfound;
