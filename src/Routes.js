import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'

export default function Routes() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
            </Switch>
        </React.Fragment>
    )
}
