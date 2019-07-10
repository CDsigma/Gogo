import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_action';
import IndieGogoOption from './indiegogo_option';

const mapStateToProps = ({ session }) => {
    return {
        currentUserId: session.currentUser
    };
};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndieGogoOption);
