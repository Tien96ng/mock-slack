import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import TelegramIcon from '@material-ui/icons/Telegram';

export default function Nav() {
  return (
    <AppBar color="outlined" position="static">
      <Toolbar>
        <IconButton edge="start"  color="inherit" aria-label="menu">
          <TelegramIcon />
        </IconButton>
        <Box display='flex' flexGrow={1}>
          <Typography variant="h6" > Mock Slack </Typography>
        </Box>
        <Button color="inherit" className="move-left">Login</Button>
        <Button color="inherit" className="move-left">Sign up</Button>
        {/* <IconButton edge="start"  color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
}