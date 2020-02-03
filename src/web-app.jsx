import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App.js';


ReactDOM.render(
    <Router history={ browserHistory}>
        <Route path="/" component={App}>

        </Route>
    </Router>
);
