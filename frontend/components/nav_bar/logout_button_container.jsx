import { connect } from 'react-redux';
import { logout } from '../../actions/session_action';
import Logout from './logout_button';

const mapDispatchToProps = dispatch => ({
    logout: formUser => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Logout);
