import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const MenuHeader: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null>(null);

  const handleClick = (event: any): any => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <p className="menu-header">Menu</p>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/switch-music">My Switch</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>My Spotify</MenuItem>
        <MenuItem onClick={handleClose}>My Deezer</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuHeader;
