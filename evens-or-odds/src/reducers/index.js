import settingsReducer from './settings';
import deckReducer from './deck'
import gameStateReducer from './gameState'
import {combineReducers} from 'redux'


export default combineReducers({
    settings: settingsReducer,
    deck:deckReducer,
    gameState: gameStateReducer
});


// import  {SET_GAME_STARTED,EXPAND_INSTRUCTIONS,FETCH_DECK_RESULTS,FETCH_DECK_ERROR} from '../actions/types';
//
// const DEFAULT_SETTINGS={
//     gameStarted  : false,
//     instructionsExpanded:false
// }
//
// const rootReducer = (state = DEFAULT_SETTINGS,action) =>{
//     console.log('state',state);
//     console.log('action',action);
//     switch (action.type) {
//         case SET_GAME_STARTED:
//             return {
//                 ...state,
//                 gameStarted : action.gameStarted,
//             };
//             break;
//         case EXPAND_INSTRUCTIONS:
//             return {
//                 ...state,
//                 instructionsExpanded: action.instructionsExpanded
//             };
//             break;
//         case FETCH_DECK_RESULTS:
//             const {remaining,deck_id} = action;
//             return{
//                 ...state,
//                 remaining,
//                 deck_id,
//                 fetchStatus : action.fetchStatus
//
//             };
//             break;
//         case FETCH_DECK_ERROR:
//             const {message} = action;
//             return{
//                 ...state,
//                 message,
//                 fetchStatus : action.fetchStatus
//
//             };
//             break;
//         default:
//             return state;
//     }
//
//
// }
// export default rootReducer;
