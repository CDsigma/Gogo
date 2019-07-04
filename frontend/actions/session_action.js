import * as SessionApiUtil from '../utils/session_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

// const user = {
//   id: 1,
//   username: "",
//   email: ""
// }

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const createNewUser = formUser => dispatch => {
        return SessionApiUtil.signup(formUser).then(user => dispatch(receiveCurrentUser(user)))
};

// export const login = formUser => dispatch => createSession(formUser)
//     .then(user => dispatch(receiveCurrentUser(user)));
export const login = user => dispatch => (
    SessionApiUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
    )
    // , err => (
    //     dispatch(receiveErrors(err.responseJSON))
    // )
    )
);

export const logout = () => dispatch => SessionApiUtil.deleteSession()
    .then(() => dispatch(logoutCurrentUser()));
