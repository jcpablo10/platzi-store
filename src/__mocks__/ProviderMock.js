import React from 'react';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import initalState from '../initialState'
import reducer from '../reducers'

const store = createStore(reducer, initalState);
const history = createBrowserHistory();

const ProviderMock = props => {
    <Provider store={}>
        <Router history={history}>
            {props.children}
        </Router>
    </Provider>
}