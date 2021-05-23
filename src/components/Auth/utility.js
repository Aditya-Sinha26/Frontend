
import firebase from "../../firebase";
import * as actions from "../../store/actions/auth"
import axios from "axios";

export const authentication = (email, name,username,password, dispatch, signin) => {
    dispatch(actions.startAuth());
        const firebaseAuth = signin 
                                ? firebase.auth().signInWithEmailAndPassword(email, password)
                                : firebase.auth().createUserWithEmailAndPassword(email, password)
        firebaseAuth
            .then(userCredentials => {
                
                if (!signin){
                    const user={
                        userId:userCredentials.user.uid,
                        name:name,
                        username:username
                    }
                    console.log("request sent");
                    axios.post("http://localhost:9000/createUser",user)
                        .then(res => {
                            dispatch(actions.authSuccess(userCredentials.user.uid));
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }else{
                    dispatch(actions.authSuccess(userCredentials.user.uid));
                }
            })
            .catch(error => {
                console.log(error);
                dispatch(actions.authFail(error));
            })
}

export const checkAuthentication = (dispatch) => {
    firebase.auth().onAuthStateChanged((user) =>{
        if(user){
            dispatch(actions.authSuccess(user.uid))
        }    
    })
    
}
