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

const Info = ({ data }) => {

    const {state, dispatch} = useContext(AuthContext);
    
    return <div className={classes.Info}>
        <div className={classes.Flexbox}>
            <div className={classes.Img}  />
        
        <div className={classes.Details}>
            <div className={classes.Username}>{data.user.username}  <button onClick={() => logout(dispatch)}>Logout</button></div>
            <div className={classes.Flexbox1}>
                <span><strong>{data.posts.length}</strong> posts</span>
                <span><strong>{data.user.followers.length}</strong> Followers</span>
                <span><strong>{data.user.following.length}</strong> Following</span>
            </div>
            <div>
                <p className={classes.Name}>{data.user.name}</p>
                <p>{data.user.bio}</p>
            </div>
        </div>
        </div>
    </div>
}

export default Info;