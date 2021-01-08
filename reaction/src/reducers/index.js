import {combineReducers} from 'redux';
import messagesReducer from './messages';
import usernameReducer from './username';
import reactionsReducer from './reactions';

const rootReducer = combineReducers({
    messages: messagesReducer,
    username : usernameReducer,
    reactions: reactionsReducer
});


export default rootReducer;
