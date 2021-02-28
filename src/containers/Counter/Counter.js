import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                {/* refers to the property in mapStateToProps and actions in mapDispatchToProps*/}
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                {/* pass the values to the actions */}
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// which states do you want to control outside the container and which actions do you want to dispatch
// instructions on how the state managed by redux should be mapped to props used in this container
const mapStateToProps = state => {
    return {
        // add ctr and res as reducers are seperated
        ctr: state.ctr.counter,
        storedResults: state.res.results,
    };
}

// dispatch actions which will reach a reducer
const mapDispatchToProps = dispatch => {
    return{
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
        // need to pass values so can be used in the reducer files
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (resultElId) => dispatch(actionCreators.deleteResult(resultElId)),

    };
}

// connect is a function which returns a hoc
// if do not dispatch any actions then leave it out or if no state changes replace with null
export default connect(mapStateToProps, mapDispatchToProps)(Counter);