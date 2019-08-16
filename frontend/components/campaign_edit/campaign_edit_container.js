import { connect } from 'react-redux';
import { updateCampaign } from '../../actions/campaign_actions';
import CampaignEdit from './campaign_edit';

const mapStateToProps = ({ errors }, ownProps) => {
    // debugger
    return {
        // errors: errors.session,
        // toggleSignUpModal: ownProps.toggleSignUpModal
        id: ownProps.match.params.campaignId
    };
};

const mapDispatchToProps = dispatch => ({
    updateCampaign: formCampaign => dispatch(updateCampaign(formCampaign)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignEdit);
