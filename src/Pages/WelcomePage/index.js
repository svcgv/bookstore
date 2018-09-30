import React from 'react'
import {Link} from 'react-router-dom'

class Welcome extends React.Component{
    render(){
        return(
            <div>
                welCome
                <Link to='/login'>login</Link>
            </div>
        )
    }
}

export default Welcome