import * as actionTypes from "./actionTypes";

export const checkAuth = () => {
    return {
        type: actionTypes.CHECK_AUTH
    }
}

export const startAuth = () => {
    console.log("dispatch start");
    return {
        type: actionTypes.START_AUTH
    }
}

export const authSuccess = (username) => {
    console.log("success");
    return {
        type: actionTypes.AUTH_SUCCESS,
        username: username
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = (error) => {
    return {
        type: actionTypes.LOGOUT
    }
}


