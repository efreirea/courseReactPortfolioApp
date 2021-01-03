import {SET_GUESS,GUESS} from './types';


export const setGuessOdd = () =>{
    return {
        type: SET_GUESS,
        currentGuess: GUESS.ODD
    };
}

export const setGuessEven = () =>{
    return {
        type: SET_GUESS,
        currentGuess: GUESS.EVEN
    };
}
