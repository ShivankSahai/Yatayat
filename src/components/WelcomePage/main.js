import React,{Component} from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

class WelcomePage extends Component{
    render(){
        return(
            <div className="welcome_page_div">
            <Paper className="rounded">
                <Typography component="p" className="welcome_heading">Welcome to Yatayat!!</Typography>
                <Typography component="p" className="tagline">Saving lives is what matters to us.</Typography>
                <Button onClick={()=>{window.location.href="/login"}} className="login_btn">Login</Button><br></br>
                <Button onClick={()=>{window.location.href="/signup"}} className="signup_btn">Sign Up</Button>
                </Paper>
            </div>
        )
    }
}

export default WelcomePage