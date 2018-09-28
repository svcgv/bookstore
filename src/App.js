import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Welcome from './Pages/WelcomePage'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import HomePage from './Pages/HomePage'


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