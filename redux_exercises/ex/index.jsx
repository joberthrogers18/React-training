import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'; // combinereducer create a pointer for all states and the amount of this is create a store like a component imutable but who can update
import { Provider } from 'react-redux'; // Could pass the states for components interns

import Field from './field';

const reducers  = combineReducers({
    field: () => ({ value: 'Opa2' })
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Teste' />
    </Provider>
,   document.getElementById('app'));

