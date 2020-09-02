import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import MainPage from "./components/MainPage";
import Login from "./components/Login";


function App() {

  const needLogin = () => true; // change to false for dev if need to login

  return (
    <BrowserRouter>

      {needLogin() ? <Login /> : <MainPage />}

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
