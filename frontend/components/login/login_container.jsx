import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_action';
import Login from './login';

const mapStateToProps = ({ errors }, ownProps)  => {
    // debugger;
    return {
        // errors: errors.session,
        // formType: 'login'
        
        toggleLoginModal: ownProps.toggleLoginModal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(login(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// import { connect } from 'react-redux';
// import { createNewUser } from '../../actions/session_action';
// import Signup from './sign_up';

// const mapDispatchToProps = dispatch => ({
//     createNewUser: formUser => dispatch(createNewUser(formUser)),
// });

// export default connect(null, mapDispatchToProps)(Signup);
