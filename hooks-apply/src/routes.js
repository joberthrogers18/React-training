import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import UseStateandEffectExample from './hooks/Usestate-useeffect';
import ContextExample from './hooks/contextApi';
import UseReducerExample from './hooks/useReducerExample';


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/usestateandeffect" component={UseStateandEffectExample}/>
                <Route path="/contextapi" component={ContextExample} />
                <Route path="/usereducerexample" component={UseReducerExample} />
                <Redirect to="/usestateandeffect" />
            </Switch>
        </Router>
    )
}