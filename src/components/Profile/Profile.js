import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Images from "./Images";
import Info from "./Info";
import authContext from "../../store/context/auth";
import firebase from "../../firebase";

const getProfile = async () => {
    const idToken = await firebase.auth().currentUser.getIdToken(true)
    const res = await axios({
            url: "http://localhost:3001/user/profile",
            method: 'GET',
            headers: {
                idToken: idToken
            }
        })
    return res;
}


const Profile = (props) => {
    const [state, setState] = useState({
        user:{
            followers: [],
            following: []
        },
        posts: []
    })

    useEffect(() => {
        getProfile()
        .then(res => {
            setState(res.data);
        })  
    },[]);

    return <React.Fragment>
        <Info data = {state} />
        <Images />
    </React.Fragment> 
        
}

export default Profile;