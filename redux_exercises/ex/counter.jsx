import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { inc, dec, stepChange} from './counterActions';

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input onChange={props.stepChange} value={props.counter.step} type="number" />
        <button onClick={props.dec}>Dec</button>
        <button onClick={props.inc}>Inc</button>
    </div>
)

const mapStateToProps = state => ({counter: state.counter})

const mapDispatchToProps = dispatch => bindActionCreators({inc, dec, stepChange}, dispatch);

//decorator the counter props
export default connect(mapStateToProps, mapDispatchToProps)(Counter);