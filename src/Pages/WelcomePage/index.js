import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import A from './Blog'
class Welcome extends React.Component{
    render(){
        return(
            <div>
                 {/* <Link to='/login'>
                 <Button variant="raised" color="primary">
                   login
                </Button> </Link>  */}
                <A />
            </div>
        )
    }
}

export default Welcome