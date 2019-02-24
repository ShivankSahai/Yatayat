import React,{Component} from 'react'
import Typography from '@material-ui/core/Typography'

class WelcomePage extends Component{
    render(){
        return(
            <div className="welcome_page_div">
                <Typography component="p">Welcome to Yatayat!!</Typography>
            </div>
        )
    }
}

export default WelcomePage