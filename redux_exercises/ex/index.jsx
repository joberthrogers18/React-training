import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'; // combinereducer create a pointer for all states and the amount of this is create a store like a component imutable but who can update
import { Provider } from 'react-redux'; // Could pass the states for components interns

import counterReducer from './counterReducer';
import Counter from './counter';

const reducers  = combineReducers({
    counter: counterReducer //field will be update when a dispatch will comes
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Counter/>
    </Provider>
,   document.getElementById('app'));

