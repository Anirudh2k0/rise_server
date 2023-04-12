import { darkTheme } from '@/data/themes';
import { AppBar, ThemeProvider, Toolbar, Typography } from '@mui/material';
import Menu from '@/components/Menu/Menu';
import { AccountCircle } from '@mui/icons-material';
import { getUser, logout } from '@/utils/authUtils';

const currentUser = getUser();

const loginMenuItems = [
  {
    label: 'Logout',
    onClick: logout,
  },
];

function Navbar() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar
        position='fixed'
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography
            fontWeight='bold'
            fontSize={20}
            letterSpacing={3}
            flexGrow={1}
          >
            RISE
          </Typography>
          {/* Login Menu */}
          {Boolean(currentUser) && (
            <Menu
              icon={<AccountCircle />}
              id='profile'
              menuItems={loginMenuItems}
              buttonLabel={currentUser.name}
            />
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
