import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Images from "./Images";
import Info from "./Info";
import authContext from "../../store/context/auth";

const getProfile = async (username, setUser, setPosts) => {
    console.log(username);
    const res = await axios({
            url: "http://localhost:3001/user/profile",
            method: 'POST',
            data: {
                username: username
            }
        })
    console.log(res.data);
    setUser({
        ...res.data.user, 
        posts: res.data.posts.length
    })
    setPosts(res.data.posts)
}


const Profile = (props) => {
    const { state: authState} = useContext(authContext);
    const [user, setUser] = useState({
        name: '',
        username: '',
        profileImg: '',
        posts: 0,
        followers: [],
        following: []
     })
     const [posts, setPosts] = useState([])
     const { username } = useParams();
    //  console.log(username);
     
    useEffect(() => {
        getProfile(username, setUser, setPosts); 
    },[]);

    return <div className="bg-white pb-5 mb-5 shadow-lg mx-auto rounded" style = {{maxWidth: '900px'}}>
        <Info
            data = { user }
            same = { username === authState.username }
            updatedProfile = {() => (getProfile(username, setUser, setPosts))}
        />
        <Images posts={posts} />
        </div> 
        
}

export default Profile;