import React,{Component} from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

class UserView extends Component{
    render(){
        return(
            <div className="main_div center user_view">
            <Paper className="rounded width_little_less">
                <Typography component="p" className="accidents_heading">Welcome</Typography><br></br><br></br>
                <Button className="user_btn" onClick={()=>{window.location.href="/user/traffic"}} variant="contained" color="primary">Report Traffic</Button>
                <Button className="user_btn" onClick={()=>{window.location.href="/user/accident"}} variant="contained" color="primary">Report Accident</Button><br></br><br></br>
                <Button className="user_btn" onClick={()=>{window.location.href="/user/daily"}} variant="contained" color="primary">Daily Schedules</Button>
                <Button className="user_btn" onClick={()=>{window.location.href="/user/locationwise"}} variant="contained" color="primary">Location Based Transport</Button><br></br><br></br>
                </Paper>
            </div>
        )
    }
}

export default UserView