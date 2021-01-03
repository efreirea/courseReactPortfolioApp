import  {SET_GUESS,SET_GAME_STARTED,DRAW_CARD_RESULTS,GUESS} from '../actions/types';

const DEFAULT_GAME_STATE={
    currentGuess: null,
    correctGuesses : 0
}
const EVENS = ['2', '4', '6', '8','0'];
const ODDS = ['ACE', '3', '5', '7','9'];

const gameStateReducer = (state = DEFAULT_GAME_STATE,action) =>{
    // console.log('state',state);
    // console.log('action',action);
    switch (action.type) {
        case SET_GUESS:
            return {
                ...state,
                currentGuess : action.currentGuess,
            };
            break;
        case SET_GAME_STARTED:
            return DEFAULT_GAME_STATE;
            break;
        case DRAW_CARD_RESULTS:
            if(
                (state.currentGuess===GUESS.EVEN && EVENS.includes(action.value))
                ||(state.currentGuess===GUESS.ODD&& ODDS.includes(action.value))
            ){
                return {...state,correctGuesses : state.correctGuesses +1}
            }
            return state;
            break;
        default:
            return state;
    }


}
export default gameStateReducer;
