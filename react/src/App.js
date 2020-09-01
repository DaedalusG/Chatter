import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import MainPage from './components/MainPage'

import UserList from './components/UsersList';


function App() {

  return (
    <BrowserRouter>
        <MainPage></MainPage>
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
