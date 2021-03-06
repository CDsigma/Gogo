import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './components/store/store';
import { createNewUser } from './actions/session_actions'

import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {

    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                user: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.createNewUser = createNewUser;
    window.dispatch = store.dispatch;
    window.store = store;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
