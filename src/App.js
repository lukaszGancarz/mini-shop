import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Navi from "./UI/Navi";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./components/loggingIn/Login";
import LoggedOut from "./components/loggedOut/LoggedOut";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user, "useffect");
    user && setIsLoggedIn(true);
  }, [isUser]);

  return (
    <>
      <Router>
        <Navi
          loggedIn={isLoggedIn}
          setLoggedIn={setIsLoggedIn}
          isUser={setIsUser}
        />
        <Switch>
          <Route path="/login">
            {!isLoggedIn ? (
              <Login isUser={setIsUser} />
            ) : (
              <Redirect to="/home" />
            )}
          </Route>
          <Route path="/loggedOut">
            <LoggedOut/>
          </Route>
          <Route path="/">
            <Home loggedIn={isLoggedIn} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
