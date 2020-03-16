import React from 'react';
import Grid from '@material-ui/core/Grid';
import MenuHeader from '@components/Header/MenuHeader/MenuHeader';

const Header = () => {
  return (
    <Grid className="header" container justify="space-between" spacing={0}>
      <Grid item>
        <div className="header__logo">Easy Switch</div>
      </Grid>
      <Grid item>
        <MenuHeader />
      </Grid>
    </Grid>
  );
};

export default Header;
