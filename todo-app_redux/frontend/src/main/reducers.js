import { combineReducers } from 'redux';
import todoReducer from '../todo/todoReducer'

const rootReducer = combineReducers({ //combine all reducers
    todo: todoReducer
})

export default rootReducer;