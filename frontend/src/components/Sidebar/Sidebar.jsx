import { forwardRef, useId } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { sidebarLinks } from './data';

const drawerWidth = 230;

const CustomLink = forwardRef((props, ref) => (
  <NavLink
    ref={ref}
    {...props}
    className={({ isActive }) =>
      isActive ? props.className + ' Mui-selected' : props.className
    }
  />
));

function Sidebar() {
  const id = useId();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: 'background.paper',
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant='permanent'
      anchor='left'
    >
      <Toolbar />
      <Divider />
      <List>
        {sidebarLinks.map((sidebarItem, index) => (
          <ListItem key={index + id}>
            <ListItemButton
              sx={{ border: '1px lightgray solid', borderRadius: '5px' }}
              LinkComponent={CustomLink}
              to={sidebarItem.link}
              //   selected={selectedLink ===}
            >
              <ListItemIcon>
                {<sidebarItem.icon sx={{ fontSize: '20px' }} />}
              </ListItemIcon>
              <ListItemText primary={sidebarItem.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
