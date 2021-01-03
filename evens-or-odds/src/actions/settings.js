import  {SET_GAME_STARTED,EXPAND_INSTRUCTIONS} from './types';

export const startGame = ()=> {
        return {
            type : SET_GAME_STARTED,
            gameStarted : true
        }
};
export const cancelGame = ()=> {
        return {
            type : SET_GAME_STARTED,
            gameStarted : false
        }
};

export const expandInstructions = ()=> {
        return {
            type : EXPAND_INSTRUCTIONS,
            instructionsExpanded : true
        }
};
export const hideInstructions = ()=> {
        return {
            type : EXPAND_INSTRUCTIONS,
            instructionsExpanded : false
        }
};
