import  {FETCH_DECK_RESULTS,FETCH_DECK_ERROR,DRAW_CARD_RESULTS,DRAW_CARD_ERROR} from '../actions/types';

const DEFAULT_DECK={
    fetchStatus  : null,
    deck_id:'',
    card: {image:null,value:'',suit:'',code:''},
    remaining: 0,
    cardFetchStatus: false
}

const deckReducer = (state = DEFAULT_DECK,action) =>{
    // console.log('state',state);
    // console.log('action',action);
    switch (action.type) {
        case FETCH_DECK_RESULTS:
            const {remaining,deck_id} = action;
            return{
                ...state,
                remaining,
                deck_id,
                fetchStatus : action.fetchStatus

            };
            break;
        case FETCH_DECK_ERROR:
            const {message} = action;
            return{
                ...state,
                message,
                fetchStatus : action.fetchStatus

            };
            break;
        case DRAW_CARD_RESULTS:{
                const {image,value,suit,code,remaining} = action;
                return{
                    ...state,
                    remaining,
                    card:{image,value,suit,code},
                    cardFetchStatus : action.fetchStatus

                };
                break;
            }
        case DRAW_CARD_ERROR:{
                const {message} = action;
                return{
                    ...state,
                    message,
                    cardFetchStatus : action.fetchStatus

                };
                break;
            }
        default:
            return state;
    }


}
export default deckReducer;
