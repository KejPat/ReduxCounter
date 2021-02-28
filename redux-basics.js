// node js implementation
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer - will update the state. State is the current state which we initialise to initialState
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER') {
        // should not change the original state, the old state should be copied and then the counter can
        // be overridden.
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if(action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
}; 

// Store - needs to be initialised with a reducer
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription - informs if something has changed in the state. It is triggered whenever an action is dispatched
store.subscribe(() => {
    console.log('[Subscription]', store.getState);
});

// Dispatching Action - argument passed in is the action written as type: '...'. After this you can add 
// other arguments
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
