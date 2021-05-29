import React, { useContext } from "react";
import "./Info.css";
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
    const classes={};

    const {state, dispatch} = useContext(AuthContext);
    
    return(
        <div class="container pt-3 info d-flex">
    <div class="card p-3">
        <div class="d-flex align-items-center justify-content-around">
            <div class="image"> 
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" class="rounded img" /> 
            </div>
            <div class=" details ml-3 w-50">
                <h4 class="mb-0 mt-0">Alex Morrision</h4> <span className="username">Senior Journalist</span>
                <div class="p-2 mt-2 bg-primary d-flex justify-content-around rounded text-white stats">
                    <div class="d-flex flex-column"> <span class="articles">Posts</span> <span class="number1">38</span> </div>
                    <div class="d-flex flex-column"> <span class="followers">Followers</span> <span class="number2">980</span> </div>
                    <div class="d-flex flex-column"> <span class="rating">Following</span> <span class="number3">89</span> </div>
                </div>
                <div class="button mt-2 d-flex flex-row align-items-center"> 
                    <button class="btn btn-sm btn-outline-primary w-100">Edit Profile</button> 
                    <button class="btn btn-sm btn-primary w-100 ml-2">Add Post</button> 
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Info;