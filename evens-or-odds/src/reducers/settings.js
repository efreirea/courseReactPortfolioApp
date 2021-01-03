import  {SET_GAME_STARTED,EXPAND_INSTRUCTIONS} from '../actions/types';

const DEFAULT_SETTINGS={
    gameStarted  : false,
    instructionsExpanded:false
}

const settingsReducer = (state = DEFAULT_SETTINGS,action) =>{
    // console.log('state',state);
    // console.log('action',action);
    switch (action.type) {
        case SET_GAME_STARTED:
            return {
                ...state,
                gameStarted : action.gameStarted,
            };
            break;
        case EXPAND_INSTRUCTIONS:
            return {
                ...state,
                instructionsExpanded: action.instructionsExpanded
            };
            break;
        default:
            return state;
    }


}
export default settingsReducer;
