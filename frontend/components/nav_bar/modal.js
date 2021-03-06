import React from 'react';
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_action';
import Login from '../login/login';
import SignUp from '../sign_up/sign_up';
import ContributeContainer from '../contribute/contribute_container';
import {login, createNewUser} from '../../actions/session_actions'

const Modal = ({ modal, closeModal, login, errors, createNewUser}) => {

    if(!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'login':
            component = <Login login={login} openModal={openModal} closeModal={closeModal} errors={errors}/>;
            break;
        case 'signup':
            component = <SignUp createNewUser={createNewUser} openModal={openModal} closeModal={closeModal} errors={errors} />;
            break;
        case 'contribute':
            component = <ContributeContainer closeModal={closeModal}/>
            break;
        default:
            return null;
    }

    return (
        <div className="session-grey-background" onClick={closeModal}>
            <div className='modal-child' onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const msp = state => {
    return {
        modal: state.ui.modal,
        errors: state.errors.session
    }
}

const mdp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        login: (user) => dispatch(login(user)),
        createNewUser: (user) => dispatch(createNewUser(user))
    }
}

export default connect(msp, mdp)(Modal);