import { NavLink } from "react-router-dom";
import { Toolbar, Typography, Button, IconButton, Box, AppBar } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


export default function Nav({user, signOut}) {
  const renderNavLink = (route, text) => (
    <NavLink 
      to={route}
      style={{ textDecoration: 'none' }}
    >
      {text}
    </NavLink>
  );

  const renderUserNav = () => {
    if(user === null) {
      return <>{renderNavLink("/login", "Login / Sign Up")}</>
    } else {
      return (
        <>
          {renderNavLink("/account-details", <AccountCircleIcon /> )}
          <Button
            color="secondary"
            type="click"
            onClick={signOut}
          >
            {/* {renderNavLink("/", "Sign Out")} */}
            Sign Out
          </Button>
        </>
      )
    }
  }

  return (
    <AppBar color="default" position="static">
      <Toolbar>
        <IconButton edge="start"  color="inherit" aria-label="menu">
          {renderNavLink("/", <HomeIcon />)}
        </IconButton>
        <Box display='flex' flexGrow={1}>
          <Typography variant="h6" > {user === null ? "Mock Slack" : `${user.displayName}'s Slack`} </Typography>
        </Box>
        <Button color="inherit" className="move-left">
          {renderUserNav()}
        </Button>
      </Toolbar>
    </AppBar>
  );
}