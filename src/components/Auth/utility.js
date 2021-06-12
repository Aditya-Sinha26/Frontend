import * as actions from "../../store/actions/auth"
import axios from "../../axios";

export const register = async (email, name, username, password, dispatch) => {
    dispatch(actions.startAuth());
    const data = { email, name, username, password }
    try{
        const response = await axios.post('/auth/register', data);
        dispatch(actions.authSuccess(response.data.username));
        localStorage.setItem('auth', true);
    }
    catch(err){
        dispatch(actions.authFail(err.response.data.message));
    }
        
}

export const login = async (email, password, dispatch) => {
    const data = { email, password };
    try{
        const response = await axios.post('./auth/login', data);
        dispatch(actions.authSuccess(response.data.username));
        localStorage.setItem('auth', true);
    }
    catch(err){
        dispatch(actions.authFail(err.response.data.message));
    }
}

export const logout = async (event, dispatch) => {
    event.preventDefault();
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(actions.logout());
}