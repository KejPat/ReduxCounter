import * as actionTypes from './actionTypes';

// synchronous action creator
export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

// create async action creator which dispatches synchronous ones saveResult here
export const storeResult = (res) => {
    // async code
    return function(dispatch, getState) {
        // can get old state using getState 
        // const oldCounter = getState().ctr.counter;
        // console.log(oldCounter);
        setTimeout( () => {
            dispatch(saveResult(res))
        }, 2000);
    }
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};