import React, { useReducer } from "react";
import authReducer from "../reducers/auth";

const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
    const [state, dispatch] = useReducer(authReducer, {
        loading: false,
        error: null,
        username: 'test',
        isAuth: localStorage.getItem('auth'),
    })


    return <AuthContext.Provider value={{ state, dispatch }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;