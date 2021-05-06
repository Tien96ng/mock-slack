import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./Signup"
import Container from "@material-ui/core/Container"
import '../css/App.css';


function App() {
  return (
    <Container maxWidth="lg">
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Router>
    </Container>
  );
}

export default App;
