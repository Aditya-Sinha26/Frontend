import React,{useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import Display from './DisplayComponent';
import './Feed.css';
import Modal from "../Modal/Modal";
import {addPost} from "./utility";
import authContext from "../../store/context/auth";



const Feed=(props)=>{

    const [show,setShow]= useState(false);
    const [file,setFile]= useState(null);
    const [caption, setCaption] = useState("");

    const {state: authState} = useContext(authContext);

    const closeModal = () => {
        setShow(false);
        setFile(null);
        setCaption("");
    }

    const selectFile = (event) => {
        setFile(event.target.files[0]);
    }

    const upload = (event) => {
        addPost(event, file, caption, authState.userId)
        closeModal();
    }

    return(
        <>
            <div className="feed-header">
                <Navbar>
                    <span>
                    <i onClick={() => {setShow(true)}} className="fa fa-plus-square-o fa-2x py-0 addButton" aria-hidden="true"></i>
                       
                    </span>

                    <span>
                        <h2>Instagram</h2>
                    </span>
                    {/*<input placeholder="Search"/>*/}
                    <span>
                        {/*<img/>*/}
                        <Link to="/profile">
                            profile_name
                        </Link>
                    </span>
                </Navbar>
            </div>
            <div className="feed-body">
                <Display/>
            </div>
        </>
    );
}

export default Feed;