import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import Logon from './pages/Logon'
import Register from './pages/Register'


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Logon } />
                <Route path="/register" component={ Register } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
