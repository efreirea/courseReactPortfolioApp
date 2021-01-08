import {SET_USERNAME} from '../actions/types';

const DEFAULT_USERNAME='anonymous';

const usernameReducer = (state = DEFAULT_USERNAME,action) =>{
    switch (action.type) {
        case SET_USERNAME:
            const {username} = action;
            return username;
            break;
        default:
            return state;
    }
}

export default usernameReducer;
