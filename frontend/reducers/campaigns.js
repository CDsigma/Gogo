import { RECEIVE_CAMPAIGN } from '../actions/campaign';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CAMPAIGN:
            const campaign = {};
            // action.chirps.forEach(chirp => {
            //     chirps[chirp.id] = chirp;
            // });
            // return chirps;
        default:
            return state;
    }
}
