import React, { useContext } from "react";
import './App.css';
import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile";
import {Route,Redirect,Switch} from "react-router-dom";
import Feed from './components/Feed/Feed';
import AuthContext from "./store/context/auth";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";

const App = (props) => {
  const [show, setShow] = useState(false);
  const {state} = useContext(AuthContext);

  const toggle = () => {
    setShow((prevState) => !prevState);
  }

  return (
    <>
      <Navbar toggle={toggle}/>
      <Sidebar show={show} toggle={toggle}/>
      <Switch>
        {!state.isAuth && <Route path="/auth" exact component={Auth}></Route>}
        {state.isAuth && <Route path="/profile/:username" component={Profile} />}
        {state.isAuth && <Route path="/feed" component={Feed} />}
        <Redirect to={state.isAuth ? "/feed" : "/auth"} />
      </Switch>
    </>
  );
}

export default App;
