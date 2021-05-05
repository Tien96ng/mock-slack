import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

export default function SignUp() {
  return (
    <form autoComplete="off">
      <h1> Sign up for Mock Slack! </h1>
      <TextField id="outlined-basic" label="Outlined" variant="Email" />
      <TextField id="outlined-basic" label="Outlined" variant="Email" />
      <Button type="submit" variant="contained" color="default" startIcon={ <AddIcon /> } />
    </form>
  );
}