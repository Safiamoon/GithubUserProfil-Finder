import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App.js';
import UserDetails from './UserDetails.js';
import NavbarComponent from './components/Navbar.js';

const Routes = () => {
    return (
    <BrowserRouter>
        <NavbarComponent />
        <Switch>
            <Route path='/' exact render={props => <App {...props} />} />
            <Route
                path='/users/:username'
                exact
                render={props => <UserDetails {...props} />}
            />
            {/* For wrong router like localhost/dswejhew */}
            <Redirect to='/' />
        </Switch>
    </BrowserRouter>
    );
};

export default Routes;