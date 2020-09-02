import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import MainPage from "./components/MainPage";
import Login from "./components/Login";


function App() {

  const loggedIn = window.localStorage.getItem('auth_token');

  return (
    <BrowserRouter>

      {loggedIn ? <MainPage /> : <Login /> }

      {/* <Switch>
            <Route path="/users">
                <UserList />
            </Route>

            <Route path="/">
                <h1>My Home Page</h1>
            </Route>
        </Switch> */}
    </BrowserRouter>
  );
}

export default App;
