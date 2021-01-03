import {FETCH_DECK_RESULTS,FETCH_DECK_ERROR,DRAW_CARD_RESULTS,DRAW_CARD_ERROR} from './types';

const API_ADDRESS = 'https://deckofcardsapi.com/api';

export const fetchDeckResult = deckJson =>{
    const {remaining, deck_id} = deckJson;
    return {type:FETCH_DECK_RESULTS,remaining,deck_id,fetchStatus: true};
};

export const fetchDeckError = (error) =>{
    const { message } = error;
    return {type:FETCH_DECK_ERROR, message, fetchStatus: false};
};

export const drawCardResult = cardJson =>{
    const {cards: [{image,value,suit,code}],remaining} = cardJson;
    return {type:DRAW_CARD_RESULTS,image,value,suit,code,remaining,fetchStatus: true};
};

export const drawCardError = (error) =>{
    const { message } = error;
    return {type:DRAW_CARD_ERROR, message, fetchStatus: false};
};


export const fetchNewDeck = () => (dispatch) =>{
    return fetch(`${API_ADDRESS}/deck/new/shuffle/`)
        .then(response => {
            if (!response.ok){
                throw Error('Unable to fetch data');
            }
            return response.json();
        })
        .then(json => {return dispatch(fetchDeckResult(json))})
        .catch((error)=>{
            return dispatch(fetchDeckError(error));
        });
};

export const fetchCard = (deck_id) => (dispatch) =>{
    return fetch(`${API_ADDRESS}/deck/${deck_id}/draw/`)
        .then(response => {
            if (!response.ok){
                throw Error('Unable to fetch card');
            }
            return response.json();
        })
        .then(json => {return dispatch(drawCardResult(json))})
        .catch((error)=>{
            return dispatch(drawCardError(error));
        });
};
