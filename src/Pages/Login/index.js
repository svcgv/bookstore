import React from 'react'
import {Link} from 'react-router-dom'

class Login extends React.Component{
    render(){
        return(
            <div>login
                <Link to='/home'>home</Link>
            </div>
        )
    }
}

export default Login