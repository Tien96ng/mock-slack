import React from "react";
import { Button, FormControl, Input, InputLabel, FormHelperText } from "@material-ui/core";
import TelegramIcon from '@material-ui/icons/Telegram';

function Login() {
  return ( 
    <>
      <form> 
        <h1> Welcome back, Please login! </h1>
        <FormControl margin="dense" fullWidth={true}>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input id="email" aria-describedby="my-helper-text" />
          <FormHelperText id="helper-email">We'll never share your email.</FormHelperText>
        </FormControl>
        <br />
        <FormControl margin="dense" fullWidth={true}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" aria-describedby="my-helper-text" />
          <FormHelperText id="password-help">Please don't share your password.</FormHelperText>
        </FormControl>
        <br />
        <FormControl margin="dense" >
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
            <TelegramIcon />
          </Button>
        </FormControl>
      </form>
    </>

  );
}
export default Login;


