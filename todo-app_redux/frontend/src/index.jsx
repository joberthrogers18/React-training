import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';

//Middlewares
import promise from 'redux-promise'; //make asynchronous call in actions creators (axios)
import multi from 'redux-multi'; // call more than one action creator when need (when add an task call search method to render the new tasks again)
import thunk from 'redux-thunk'; // call just when we need use the methods in certain sequence and we dont know when is over the request to api

import App from './main/app';
import reducers from './main/reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                            //*middlwares   *strore func  *parameter with reducers for store and devtool(tool in chrome for redux)
const store = applyMiddleware(thunk, multi,promise)(createStore)(reducers, devTools); //promise to wait the axios make the request async
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('app'));