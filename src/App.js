import React, { Component } from 'react';
import {HashRouter,Route,Link,Switch} from 'react-router-dom'

import Home from './home'
import About from './About'
 class App extends Component {
    render() {
        return (
            <div>        
                <h1>App</h1>        
                <ul>          
                    <li>
                        <Link to="/home/error">Home</Link>
                    </li>         
                    <li>
                        <Link to="/home/home">About</Link>
                    </li>          
                    <li>
                        <Link to="/about">Inbox</Link>
                    </li>        
                </ul>    
        
            </div>

        );
    }
}


export default App