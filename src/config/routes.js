import React from 'react';
import Main from '../components/Main';
import Artists from '../components/Artists';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'

export default (
    <Router history={hashHistory}>
        <Route path='/' component={Main} />
        <Route path='/artists' component={Artists} />

        <IndexRoute component={Main} />
    </Router>
);