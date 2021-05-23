import React, { useContext } from "react";
import classes from "./Info.module.css";
import firebase from "../../firebase";
import * as actions from "../../store/actions/auth"
import AuthContext from "../../store/context/auth";
import { Redirect } from "react-router";

const logout = (dispatch) => {
    firebase.auth().signOut()
        .then(() => {
            console.log("successful");
            dispatch(actions.logout());
        })
}

const Info = () => {

    const {state, dispatch} = useContext(AuthContext);
    
    if (!state.isAuth){
        return <Redirect to="/auth" />
    }

    return <div className={classes.Info}>
        <div className={classes.Flexbox}>
            <div className={classes.Img}  />
        
        <div className={classes.Details}>
            <div className={classes.Username}>Username  <button onClick={() => logout(dispatch)}>Logout</button></div>
            <div className={classes.Flexbox1}>
                <span><strong>12</strong> posts</span>
                <span><strong>153</strong> Followers</span>
                <span><strong>200</strong> Following</span>
            </div>
            <div>
                <p className={classes.Name}>Name</p>
                <p>Bio</p>
            </div>
        </div>
        </div>
    </div>
}

export default Info;