import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElid);
    return updateObject(state, {results: updatedArray})
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})})
        case actionTypes.DELETE_RESULT:
            // make a leaner switch case statement
            return deleteResult(state, action);
    }
    return state;
}

export default reducer;