import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Images from "./Images";
import Info from "./Info";
import authContext from "../../store/context/auth";
//import { useMediaQuery } from 'react-responsive';

// const getProfile = async () => {
//     const idToken = await firebase.auth().currentUser.getIdToken(true)
//     const res = await axios({
//             url: "http://localhost:3001/user/profile",
//             method: 'GET',
//             headers: {
//                 idToken: idToken
//             }
//         })
//     return res;
// }


const Profile = (props) => {
    const [state, setState] = useState({
        user:{
            followers: [],
            following: []
        },
        posts: []
     })

    // useEffect(() => {
    //     getProfile()
    //     .then(res => {
    //         setState(res.data);
    //     })  
    // },[]);

    //const isSmall = useMediaQuery({ query: '(max-width: 900px)' });

    return <div className="bg-white pb-5 mb-5 shadow-lg mx-auto rounded" style = {{maxWidth: '900px'}}>
        <Info data = {state} />
        <Images />
        </div> 
        
}

export default Profile;