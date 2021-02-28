import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

// merge reducers
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})

// custom middleware
const logger = store => {
    // next function to continue to reducer
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            // action continue to reducer
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
};

// for redux developer tool chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// need to add middleware to the store too
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

// Provider helps inject the store into the react components
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
