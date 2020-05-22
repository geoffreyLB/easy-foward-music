import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import MenuHeader from '@components/Header/MenuHeader/MenuHeader';

const Header: React.FC = () => {
  return (
    <Grid className="header" container justify="space-between" spacing={0}>
      <Grid item>
        <Link to='/home'><p className="header__logo">Easy Switch</p></Link>
      </Grid>
      <Grid item>
        <MenuHeader />
      </Grid>
    </Grid>
  );
};

export default Header;
