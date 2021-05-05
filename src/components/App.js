import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Container from "@material-ui/core/Container"
import '../css/App.css';


function App() {
  return (
    <Container maxWidth="lg">
      <Nav />
      <Home />
    </Container>
  );
}

export default App;
