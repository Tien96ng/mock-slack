import React from "react";
import { Button, FormControl, Input, InputLabel, FormHelperText } from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export default function SignUp() {
  return (
    <>
      <form> 
        <h1> Sign Up for Mock Slack! </h1>
        <FormControl margin="dense" fullWidth="true">
          <InputLabel htmlFor="email"> Email Signup </InputLabel>
          <Input id="email" aria-describedby="my-helper-text" />
          <FormHelperText id="helper-email">We'll never share your email.</FormHelperText>
        </FormControl>
        <br />
        <FormControl margin="dense" fullWidth="true">
          <InputLabel htmlFor="password"> Password Signup </InputLabel>
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
            Create
            <AddCircleOutlineIcon />
          </Button>
        </FormControl>
      </form>
    </>
  );
}