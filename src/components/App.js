import React from "react";
import Nav from "./Nav";
import Container from "@material-ui/core/Container"
import '../css/App.css';


function App() {
  return (
    <Container maxWidth="lg">
      <Nav />
      <h1>Hello World</h1>
    </Container>
  );
}

export default App;
