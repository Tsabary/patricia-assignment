import "./styles.scss";
import React, { useState, useContext } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Global from "../styles/global";
import AuthApi from "../providers/Auth";
import { SearchProvider } from "../providers/Search";
import history from "../history";

import Login from "./../components/pages/login";
import Tables from "./../components/pages/tables";

const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <AuthApi.Provider value={{ auth, setAuth }}>
      <SearchProvider>
        <Router history={history}>
          <div className="app">
            <Global />
            <Routes />
          </div>
        </Router>
      </SearchProvider>
    </AuthApi.Provider>
  );
};

const Routes = () => {
  const { auth } = useContext(AuthApi);
  return (
    <Switch>
      <Route
        path="/"
        component={() => (auth ? <Tables /> : <Redirect to="/login" />)}
        exact
      />
      <Route
        path="/login"
        component={() => (!auth ? <Login /> : <Redirect to="/" />)}
        exact
      />
    </Switch>
  );
};

export default App;
