import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';

import dashboardReducer from '../dashboard/dashboardReducer';
import tabReducer from '../common/tab/tabReducer';
import BillingCycleReaducer from '../billingCycles/billingCyclesReducer';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    billingCycles:  BillingCycleReaducer,
    form: formReducer //using redux form, this is work for all forms in application
});

export default rootReducer;