import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage'
import Login from './components/Login'


function App() {

  const needLogin = () => true;

  return (
    <BrowserRouter>
      {(needLogin() ? <Login /> : <MainPage />)}
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
