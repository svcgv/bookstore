import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import A from './Blog'
import connect from '../../Utils/connectUtil'
class Welcome extends React.Component{
    constructor(props){
        super(props)
    }

    successCall = (res)=>{
        console.log('this is res')
        console.log(res)
        console.log(res.text)
    }
    click = ()=>{
         connect('/addUser',{text:'sdfsdf',a:{aa:'asdasd'}},this.successCall)
    }

    render(){
        return(
            <div>
                 {/* <Link to='/login'> link</Link> 
                 <Button variant="raised" color="primary" onClick = {this.click}>
                   login
                </Button> */}
                <A />
            </div>
        )
    }
}

export default Welcome