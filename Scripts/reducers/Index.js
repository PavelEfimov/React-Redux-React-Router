import { combineReducers } from 'redux';

import listReducer from './ListsReducer';

const rootReducer = combineReducers({
    listReducer
});

export default rootReducer;