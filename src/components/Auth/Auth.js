import React, {useContext, useEffect, useState} from 'react';
import "./Auth.css"
import authContext from "../../store/context/auth";
import Spinner from "../Spinner/Spinner";
import { Redirect } from 'react-router';
import { register, login } from "./utility"


const Auth = (props) => {
    const [signin, setSignin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [disabled, setDisabled] = useState(false);

    const {state, dispatch} = useContext(authContext);

    const switchHandler = (event) => {
        event.preventDefault();
        setSignin(prevState => {
            return !prevState;
        })
    }


    const submitHandler = (event) => {
        event.preventDefault();
        if(signin){
            login(email, password, dispatch)
        }else{
            register(email, name, username, password, dispatch);
        }
        
    }
    // userCredentials.user.uid
    useEffect(() => {
        const timer = setTimeout(() => {
            setDisabled(false)
            if (email.trim().length <= 0){
                setDisabled(true);
            }
            if (password.trim().length <= 0){
                setDisabled(true);
            }
            if (!signin && name.trim().length <= 0){
                setDisabled(true);
            }
            if (!signin && username.trim().length <= 0){
                setDisabled(true);
            }
        },500);
        return () => {
            clearTimeout(timer);
        }
    }, [email, password, name, username, signin]);


    let auth = <React.Fragment>
                    <div className="container Auth">
                        <p className="h2">Instagram</p>
                        {!signin && <p className="h6 lead">Sign up to see photos and videos from your friends.</p>}
                        <form className="form-group">
                            {!signin && <>
                            <input className="form-control" type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}/>
                            <input className="form-control" type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/></>}
                            <input className="form-control" type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                            <input className="form-control" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                            <button className="btn btn-primary align-self-start" disabled={disabled} onClick={submitHandler}>{signin ? "Sign In" : "Sign up"}</button>
                        </form>
                    </div>
                    <div className="container Switch">
                        <p className="d-inline-block">{signin ? "Don't have an account?" :"Have an account?"}</p>
                        <a href = "/" onClick={switchHandler}>{signin ? "Sign up" : "Log in"}</a>
                    </div>
                </React.Fragment>;

    if(state.loading){
        auth = <Spinner />
    }

    if(state.isAuth){
        auth = <Redirect to="/feed" />
    }

    return auth;
}

export default Auth;