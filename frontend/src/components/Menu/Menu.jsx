import { Box, MenuItem, Menu as MuiMenu, Button } from '@mui/material';
import { useState } from 'react';

function Menu({ buttonLabel, icon, id, menuItems = [] }) {
  const [open, setOpen] = useState(false);

  const handleMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        aria-controls={id}
        aria-haspopup='true'
        onClick={handleMenu}
        sx={{ textTransform: 'none' }}
        endIcon={icon}
      >
        {buttonLabel}
      </Button>
      <MuiMenu
        id={id}
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
      >
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.label} onClick={menuItem.onClick}>
            {menuItem.label}
          </MenuItem>
        ))}
      </MuiMenu>
    </Box>
  );
}

export default Menu;
