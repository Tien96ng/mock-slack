import React, { useState, useEffect } from "react";
import firebase, { db, auth } from "../services/firebase";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Login from "./Login";
import AccountDetails from "./AccountDetails";
import Container from "@material-ui/core/Container"
import '../css/App.css';

function App() {
  const [user, setUser] = useState(null);

  const signInUser = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        setUser({
          photoURL: user.photoURL,
          displayName: user.displayName,
          email: user.email,
          creationDate: user.metadata.creationTime
        });
        // console.log(user);
      }).catch((error) => {
        console.log(error);
      });
  }
  return (
    <Container maxWidth="lg">
      <Router>
        <Nav user={user}/>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={() => <Login signIn={signInUser} />} />
        <Route path="/account-details" component={() => <AccountDetails user={user}/> } />
      </Router>
    </Container>
  );
}

export default App;
