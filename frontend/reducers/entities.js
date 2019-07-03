import { combineReducers } from 'redux';
import campaignsReducer from './campaigns';

export default combineReducers({
    campaigns: campaignsReducer
});
