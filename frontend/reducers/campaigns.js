import { CREATE_CAMPAIGN, GET_ALL_CAMPAIGNS, GET_CAMPAIGN } from '../actions/campaign_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    // debugger;
    switch (action.type) {
        case CREATE_CAMPAIGN:
            const currentCampaign = { [action.campaign.id]: action.campaign }
            // debugger;
            return merge({}, state, currentCampaign);
            // action.chirps.forEach(chirp => {
            //     chirps[chirp.id] = chirp;
            // });
            // return chirps;
        case GET_ALL_CAMPAIGNS:
            return merge({}, state, action.campaigns);
        case GET_CAMPAIGN:
            // debugger;
            return merge({}, state, {currentCampaign: action.campaign});
        default:
            return state;
    }
}
