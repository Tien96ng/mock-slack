import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";

function Login(props) {
  return ( 
    <>
      <h1> Login or Sign Up with Google! </h1>
      <Button
        variant="contained"
        style={{
          backgroundColor: "green",
          color: "white"
        }}
        onClick={props.signIn}
      >
        Google
      </Button>
    </>

  );
}
export default Login;


