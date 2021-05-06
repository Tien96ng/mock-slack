import { NavLink } from "react-router-dom";
import { Toolbar, Typography, Button, IconButton, Box, AppBar } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';


export default function Nav() {
  return (
    <AppBar color="default" position="static">
      <Toolbar>
        <IconButton edge="start"  color="inherit" aria-label="menu">
          <NavLink 
            to="/" 
            style={{ textDecoration: 'none' }}
          >
            <HomeIcon />
          </NavLink>
        </IconButton>
        <Box display='flex' flexGrow={1}>
          <Typography variant="h6" > Mock Slack </Typography>
        </Box>
        <Button color="inherit" className="move-left">
          <NavLink 
            to="/login" 
            style={{ textDecoration: 'none' }}
          >
            Login
          </NavLink>
        </Button>
        <Button color="inherit" className="move-left">
          <NavLink 
            to="/signup" 
            style={{ textDecoration: 'none' }}
          >
            Sign Up
          </NavLink>
        </Button>
      </Toolbar>
    </AppBar>
  );
}