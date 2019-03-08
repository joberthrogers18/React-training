import { combineReducers } from 'redux';

import dashboardReducer from '../dashboard/dashboardReducer';
import tabReducer from '../common/tab/tabReducer';
import BillingCycleReaducer from '../billingCycles/billingCyclesReducer';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    billingCycles:  BillingCycleReaducer
});

export default rootReducer;