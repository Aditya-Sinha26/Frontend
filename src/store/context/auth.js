import React, { useReducer } from "react";
import authReducer from "../reducers/auth";

const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
    const [state, dispatch] = useReducer(authReducer, {
        isAuth: false,
        loading: false,
        error: null,
        userId: null
    })


    return <AuthContext.Provider value={{ state, dispatch }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;