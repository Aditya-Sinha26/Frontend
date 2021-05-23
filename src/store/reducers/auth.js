import * as actionTypes from "../actions/actionTypes";

const reducer = (state, action) => {

    switch(action.type){
        case actionTypes.START_AUTH:
            console.log('start');
            return{...state, loading: true}
        case actionTypes.AUTH_SUCCESS:
            return{ ...state, loading: false, isAuth: true, userId: action.userId}
        case actionTypes.AUTH_FAIL:
            return{ ...state, loading: false, error: action.error}
        case actionTypes.LOGOUT:
            return{ ...state, isAuth: false, userId: null}
        default:   
            return { isAuth: false, loading: false, error: null }
    }

}

export default reducer;