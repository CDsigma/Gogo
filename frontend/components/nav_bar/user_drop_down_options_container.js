import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_action';
import { createNewCampaign } from '../../actions/campaign_actions';
import UserDropDownOptions from './user_drop_down_options';

const mapStateToProps = ({ session, entities }) => {
    // debugger;
        return {
            // currentUserModal: session.currentUser,
            currentUserId: entities.user[1].id
    }
};

// const mapDispatchToProps = dispatch => ({
//     openModal: modal => dispatch(openModal(modal)),
//     // createNewCampaign: formUser => dispatch(createNewCampaign(formUser))
// });

export default connect(mapStateToProps, null)(UserDropDownOptions);
