import { combineReducers } from 'redux';

import ResponsableReducer from '../../components/Show/showReducer';

export default combineReducers({
  responsable: ResponsableReducer,
});
