import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

export default function SignUp() {
  return (
    <form autoComplete="off">
      <h1> Welcome back, Please login! </h1>
      <TextField id="outlined-basic" label="Outlined" variant="Email" />
      <TextField id="outlined-basic" label="Outlined" variant="Password" />
      <Button type="submit" variant="contained" color="default" startIcon={ <VpnKeyIcon /> } />
    </form>
  );
}