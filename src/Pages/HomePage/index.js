import React from 'react'
import {NavLink,Route,Link,Switch} from 'react-router-dom'
import Mine from './Mine'
import Main from './Main'
class Home extends React.Component{
    render(){
        return(
            <div>    
                <Link to="/home/mine">mine</Link> 
                <Link to="/home/main">main</Link> 
                <Link to="/home">home</Link> 
                <Switch>
                    <Route exact path="/home/mine" component={Mine} />
                    <Route path="/home/main" component={Main} />
                </Switch>

            </div>
        )
    }
}

export default Home