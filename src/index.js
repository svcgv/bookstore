import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch,BrowserRouter} from 'react-router-dom'
import App from './App'
import Home from './home'
import Welcome from './welcomePage'
import Errpage from './NotFound'

ReactDOM.render(
<HashRouter>  
    
        <Switch>
            <Route exact path="/" component={Welcome} /> 
            <Route exact path="/home" component={App}/> 
            <Route exact path="/login" component={App}/>
            <Route  component={Errpage}/>     
        </Switch>  
</HashRouter>
, document.getElementById('content'));