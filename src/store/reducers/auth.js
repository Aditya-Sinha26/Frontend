import * as actionTypes from "../actions/actionTypes";

const reducer = (state, action) => {

    switch(action.type){
        case actionTypes.START_AUTH:
            return{...state, loading: true}
        case actionTypes.AUTH_SUCCESS:
            return{ ...state, loading: false, username: action.username, isAuth: true }
        case actionTypes.AUTH_FAIL:
            return{ ...state, loading: false, error: action.error}
        case actionTypes.LOGOUT:
            return{ ...state, isAuth: false, username: null}
        default:   
            return state
    }

}

export default reducer;