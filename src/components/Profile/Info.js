import React, { useContext, useEffect, useState } from "react";
import "./Info.css";
import firebase from "../../firebase";
import * as actions from "../../store/actions/auth"
import UploadModal from "../Modal/Modal";
import axios from "axios";

const followUser = async (username, updatedProfile) =>{
    await axios.post('http://localhost:3001/user/follow', {
        hostId: localStorage.getItem('username'),
        targetId: username
    })
    await updatedProfile();
}

const unFollowUser = async (username, updatedProfile) => {
    await axios.post('http://localhost:3001/user/unfollow', {
        hostId: localStorage.getItem('username'),
        targetId: username
    })
    await updatedProfile();
}

const Info = ({ data, same, updatedProfile }) => {

    const [modal, setModal] = useState({
        show: false,
        caption: false,
    });
    console.log(data.followers.includes(localStorage.getItem('username')));
    const [follow, setFollow] = useState(false);
    
    useEffect(() => {
        setFollow(data.followers.includes(localStorage.getItem('username')))
    }, [data])

    return(
        <>
            <UploadModal
                modal={modal}  
                closeModal={() => setModal({show: false, caption: false})} 
                updatedProfile = {updatedProfile}
            />
            <div className="container pt-3 info d-flex">
                <div className="card p-3">
                    <div className="d-flex align-items-center justify-content-around">
                        <div className="image"> 
                            <img src={data.profileImg} alt="" className="rounded img" /> 
                        </div>
                        <div className=" details ml-3 w-50">
                            <h4 className="mb-0 mt-0">{data.name}</h4> <span className="username">{data.username}</span>
                            <div className="p-2 mt-2 bg-primary d-flex justify-content-around rounded text-white stats">
                                <div className="d-flex flex-column"> <span className="articles">Posts</span> <span className="number1">{data.posts}</span> </div>
                                <div className="d-flex flex-column"> <span className="followers">Followers</span> <span className="number2">{data.followers.length}</span> </div>
                                <div className="d-flex flex-column"> <span className="rating">Following</span> <span className="number3">{data.following.length}</span> </div>
                            </div>
                            <div className="button mt-2 d-flex flex-row align-items-center"> 
                                { same? 
                                    <button 
                                        onClick={() => setModal({show: true, caption: false})}
                                        className="btn btn-sm btn-outline-primary w-100">
                                        Edit Profile Pic
                                    </button> 
                                    :
                                    <button 
                                        onClick={follow ? () => unFollowUser(data.username, updatedProfile) : () => followUser(data.username, updatedProfile)}
                                        className="btn btn-sm btn-outline-primary w-100">
                                        { follow ? "UnFollow" : "Follow"}
                                    </button> 
                                }
                                <button 
                                    onClick={() => setModal({show: true, caption: true})}
                                    className="btn btn-sm btn-primary w-100 ml-2">
                                    { same ? "Add Post" : "Message"}
                                </button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info;