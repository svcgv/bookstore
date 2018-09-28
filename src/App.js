import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Welcome from './WelcomePage'
import Login from './Login'
import NotFound from './NotFound'
import HomePage from './HomePage'


function App() {
  return (
    <HashRouter>
        <Switch>
          <Route path='/' exact component={Welcome}/>
          <Route path='/login' component={Login}/>
          <Route path='/home' component={HomePage}/>
          <Redirect from='/*' to='/'></Redirect>
          <Route component={NotFound}/>     
        </Switch>     
    </HashRouter>
  )
}

export default App