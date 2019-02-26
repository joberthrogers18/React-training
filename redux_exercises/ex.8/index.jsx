import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'; // combinereducer create a pointer for all states and the amount of this is create a store like a component imutable but who can update
import { Provider } from 'react-redux'; // Could pass the states for components interns

import Field from './field';
import fieldReducer from './fieldReducer';

const reducers  = combineReducers({
    field: fieldReducer //field will be update when a dispatch will comes
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Teste' />
    </Provider>
,   document.getElementById('app'));

