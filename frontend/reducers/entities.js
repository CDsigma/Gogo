import { combineReducers } from 'redux';
import campaignsReducer from './campaigns';
import usersReducer from './users_reducer'

export default combineReducers({
    campaigns: campaignsReducer,
    user: usersReducer
});
