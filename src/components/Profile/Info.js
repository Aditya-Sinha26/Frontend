import React, { useContext, useState } from "react";
import "./Info.css";
import firebase from "../../firebase";
import * as actions from "../../store/actions/auth"
import UploadModal from "../Modal/Modal";

const upload = () => {
    
}

const editProfile = () =>{
    
}

const Info = ({ data, same }) => {
    const classes={};
    const [modal, setModal] = useState({
        show: false,
        caption: false,
    });
    
    return(
        <>
            <UploadModal
                modal={modal}  
                closeModal={() => setModal({show: false, caption: false})} 
            />
            <div className="container pt-3 info d-flex">
                <div className="card p-3">
                    <div className="d-flex align-items-center justify-content-around">
                        <div className="image"> 
                            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="" className="rounded img" /> 
                        </div>
                        <div className=" details ml-3 w-50">
                            <h4 className="mb-0 mt-0">Alex Morrision</h4> <span className="username">Senior Journalist</span>
                            <div className="p-2 mt-2 bg-primary d-flex justify-content-around rounded text-white stats">
                                <div className="d-flex flex-column"> <span className="articles">Posts</span> <span className="number1">38</span> </div>
                                <div className="d-flex flex-column"> <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                <div className="d-flex flex-column"> <span className="rating">Following</span> <span className="number3">89</span> </div>
                            </div>
                            <div className="button mt-2 d-flex flex-row align-items-center"> 
                                <button 
                                    onClick={() => setModal({show: true, caption: false})}
                                    className="btn btn-sm btn-outline-primary w-100">
                                    { same ? "Edit Profile Pic" : "Follow"}
                                </button> 
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