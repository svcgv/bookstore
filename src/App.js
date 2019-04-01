import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Welcome from './Pages/WelcomePage'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import HomePage from './Pages/HomePage'
import Technology from './Pages/publicPages/technology'
import Weekdays from './Pages/publicPages/weekdays'
import Notes from './Pages/publicPages/notes'
import LeetCode from './Pages/publicPages/leetCode'
import Photos from './Pages/publicPages/photos'


function App() {
  return (
    <HashRouter>
        <Switch>
          <Route path='/' exact component={Welcome}/>
          <Route path='/login' component={Login}/>
          <Route path='/home' component={HomePage}/>
          <Route path='/technology' component={Technology}/>
          <Route path='/weekdays' component={Weekdays}/>
          <Route path='/notes' component={Notes}/>
          <Route path='/leetCode' component={LeetCode}/>
          <Route path='/photos' component={Photos}/>
          <Redirect from='/*' to='/'></Redirect>
          <Route component={NotFound}/>     
        </Switch>     
    </HashRouter>
  )
}

export default App
