import axios from "axios";
import React, { useContext, useEffect } from "react";
import Images from "./Images";
import Info from "./Info";
import authContext from "../../store/context/auth";

const Profile = (props) => {
    const {state} = useContext(authContext);

    useEffect(() => {
        axios.post("http://localhost:9000/profile", {userId: state.userId})
            .then(res => {
                console.log(res);
            })
    },[state.userId]);

    return <React.Fragment>
        <Info />
        <Images />
    </React.Fragment> 
        
}

export default Profile;