import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_action';
import { createNewCampaign } from '../../actions/campaign_actions';
import StartMyCampaignButton from './start_my_campaign_button';

const mapStateToProps = ({ session, entities }) => {
    // debugger;
    if (typeof entities.user[1] !== 'undefined') {
        return {
            currentUserModal: session.currentUser,
            currentUserId: entities.user[1].id
        };
    } else {
        return {
            currentUserModal: session.currentUser,
            currentUserId: entities.user[1]
        };
    }
};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    createNewCampaign: formUser => dispatch(createNewCampaign(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(StartMyCampaignButton);
