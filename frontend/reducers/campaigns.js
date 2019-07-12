import { CREATE_CAMPAIGN } from '../actions/campaign_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    // debugger;
    switch (action.type) {
        case CREATE_CAMPAIGN:
            const currentCampaign = action.campaign
            return Object.assign({}, currentCampaign);
            // action.chirps.forEach(chirp => {
            //     chirps[chirp.id] = chirp;
            // });
            // return chirps;
        default:
            return state;
    }
}
