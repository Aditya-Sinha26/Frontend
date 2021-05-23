import React, { useContext } from "react";
import './App.css';
import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile";
import {Route,Redirect,Switch} from "react-router-dom";
import Feed from './components/Feed/Feed';
import AuthContext from "./store/context/auth";

const App = (props) => {

  const {state} = useContext(AuthContext);
  console.log(state.isAuth);
  return (
      <Switch>
        {!state.isAuth && <Route path="/auth" exact component={Auth}></Route>}
        {state.isAuth && <Route path="/profile" component={Profile} />}
        {state.isAuth && <Route path="/feed" component={Feed} />}
        <Redirect to={state.isAuth ? "/feed" : "/auth"} />
      </Switch>
  );
}

export default App;
