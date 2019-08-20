import { connect } from 'react-redux';
import { updateCampaign } from '../../actions/campaign_actions';
import Contribute from './contribute';
import { closeModal } from '../../actions/modal_action';
import {getCampaign} from '../../actions/campaign_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        // errors: errors.session,
        // toggleSignUpModal: ownProps.toggleSignUpModal
        id: state.entities.campaigns.currentCampaign.id,
        funding: state.entities.campaigns.currentCampaign.funding
    };
};

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        updateCampaign: formCampaign => dispatch(updateCampaign(formCampaign)),
        closeModal: (modal) => dispatch(closeModal()),
        getCampaign: (campaignID) => dispatch(getCampaign(campaignID))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contribute);
