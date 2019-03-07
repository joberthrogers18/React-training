import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Dashboard from '../dashboard/dashboard';
import billingCycle from '../billingCycles/billingCycle';

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Dashboard} ></Route>
        <Route path="/billingCycles" component={billingCycle} ></Route>
        <Redirect from='*' to='/'></Redirect>
    </Router>
)