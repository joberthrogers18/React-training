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
import UseCallbackExample from './hooks/UseCallback';
import UseMemoExample from './hooks/useMemo';
import useRefExample from './hooks/useRefexample';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/usestateandeffect" component={UseStateandEffectExample}/>
                <Route path="/contextapi" component={ContextExample} />
                <Route path="/usereducerexample" component={UseReducerExample} />
                <Route path="/usecallbackexample" component={UseCallbackExample} />
                <Route path="/usememoexample" component={UseMemoExample} />
                <Route path="/userefexample" component={useRefExample} />
                <Redirect to="/usestateandeffect" />
            </Switch>
        </Router>
    )
}