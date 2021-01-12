import React from 'react'
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import App from './App.js'


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' axact render={props => <App {...props} />} />
                <Redirect to ='/' /> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

