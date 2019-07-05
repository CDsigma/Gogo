import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_action';
import Signup from './sign_up';

const mapStateToProps = ({ errors }, ownProps) => {
    return {
        toggleSignUpModal: ownProps.toggleSignUpModal
    };
};

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
