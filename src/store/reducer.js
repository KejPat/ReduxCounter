// OLD REDUCER FILE (NOT USED)
import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT:
            // One way of copying the old state so not to change the old state. It's not a deep clone so
            // the results array will stay the same
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            // this is a new object
            return newState;
        case actionTypes.DECREMENT:
            // shorter way of writing using the spread operator. Takes the properties of the old state and
            // override if anything changes
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
            // Use the filter function to make a copy of a new array and do something to it. The function
            // is executed on each element of an array and deteremines if the element follows are certain
            // condition
            const updatedArray = state.results.filter(result => result.id !== action.resultElid);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
}

export default reducer;