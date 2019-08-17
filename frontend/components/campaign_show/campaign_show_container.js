import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_action';
import { getCampaign } from '../../actions/campaign_actions';
import CampaignShow from './campaign_show';

const mapStateToProps = (state, ownProps) => {
    // debugger;
    if (state.entities.campaigns.currentCampaign) {
        return {
            // campaigns: Object.values(state.entities.campaigns),
            id: ownProps.match.params.campaignId,
            campaign: state.entities.campaigns.currentCampaign
            // campaignDuration: state.entites.campaigns[0].campaign_duration
        };
    } else {
        return {
            id: ownProps.match.params.campaignId
        }
    }
};

const mapDispatchToProps = dispatch => ({
    getCampaign: (campaignID) => dispatch(getCampaign(campaignID)),
    openModal: modal => dispatch(openModal(modal)),
    // campaigns: Object.va() => dispatch(getCampaigns()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignShow);
