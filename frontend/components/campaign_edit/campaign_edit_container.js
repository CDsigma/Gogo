import { connect } from 'react-redux';
import { createNewCampaign } from '../../actions/campaign_actions';
import CampaignEditForm from './campaign_edit_form';

const mapStateToProps = ({ errors }, ownProps) => {
    return {
        // errors: errors.session,
        // toggleSignUpModal: ownProps.toggleSignUpModal
    };
};

const mapDispatchToProps = dispatch => ({
    updateCampaign: formCampaign => dispatch(updateCampaign(formCampaign)),
});

export default connect(null, mapDispatchToProps)(CampaignEditForm);
