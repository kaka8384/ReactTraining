import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import usersReducer from './35-1/reducer'
import UsersListContainer from './35-1/UsersListContainer'

const store = createStore(usersReducer)

ReactDOM.render(
    <Provider store={store}>
        <UsersListContainer />
    </Provider>,
    document.getElementById('root')
);