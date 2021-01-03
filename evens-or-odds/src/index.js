import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

const store=createStore(rootReducer,applyMiddleware(thunk));
console.log('store',store)
console.log(store.getState());
store.subscribe(()=> console.log(store.getState()));



// const action1 = startGame();
// store.dispatch(action1);
// store.dispatch(expandInstructions());
// store.dispatch(cancelGame());
// store.dispatch(hideInstructions());




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
