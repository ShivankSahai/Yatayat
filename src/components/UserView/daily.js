import React,{Component} from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress'

class DailySchedules extends Component{
    state={
        start:'',
        destination:'',
        data:'',
        finding:false
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };    

    fetchdaily=()=>{
        this.setState({
            finding:true
        })
        axios.get('https://rocky-atoll-55276.herokuapp.com/daily',{},{
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            console.log(res)
            this.setState({
                data:res.data,
                finding:false
            })
        })
    }

    logout=()=>{
        localStorage.clear()
        window.location.href="/"
    }

    render(){
        let flag1=0
        let flag2=0
        let flag3=0
        return(
            <div>
                <div className="police_appbar">
                    <Typography component="p" className="yat_logo">YATAYAT</Typography>
                    <Typography onClick={this.logout} component="p" className="logout_btn">Logout</Typography>
                    <Typography onClick={()=>{window.location.href="/user/locationwise"}} component="p" className="logout_btn">Location based schedules</Typography>
                    <Typography onClick={()=>{window.location.href="/user/daily"}} component="p" className="logout_btn">Daily Schedules</Typography>
                    <Typography onClick={()=>{window.location.href="/user/accident"}} component="p" className="logout_btn">Accident</Typography>
                    <Typography onClick={()=>{window.location.href="/user/traffic"}} component="p" className="logout_btn">Traffic</Typography>    
            </div>
            <div className="main_div m_top">
            <Paper className="rounded width_less daily_div_down">
                <div className="center">
                <Typography component="p" className="accidents_heading">Daily Schedules</Typography><br></br>
                <Typography component="p" className="little_big">Enter Start</Typography>
                <TextField
                id="outlined-name"
                label="Start"
                value={this.state.start}
                onChange={this.handleChange('start')}
                margin="normal"
                variant="outlined"
                fullWidth
                /><br></br><br></br>

                <Typography component="p" className="little_big">Enter Destination</Typography>
                <TextField
                id="outlined-name"
                label="Destination"
                value={this.state.destination}
                onChange={this.handleChange('destination')}
                margin="normal"
                variant="outlined"
                fullWidth
                /><br></br><br></br>

                {!this.state.finding && <Button className="daily_show_btn bold" onClick={this.fetchdaily} variant="contained" color="primary">Find transport</Button>}
                {this.state.finding && <Button className="daily_show_btn bold" variant="outlined" color="primary">Finding<CircularProgress className="m_left" size={12} color="primary" /></Button>}
                <br></br><br></br>
                </div>
            </Paper>
                {
                    this.state.data && this.state.data.map((val,ind)=>(
                        <div className="results">
                            {this.state.data && <div>
                                <div className="center tcn_heading">
                                <Typography component="p" className="accidents_heading">Bus Schedule</Typography>
                            </div>
                            <div className="daily_options">
                            {
                                val.bus.map((value,index)=>(
                                    <div>
                                        {value.from==this.state.start && value.to==this.state.destination && <Paper className="accident_paper">
                                            <Typography component="p" className="addr"><span className="bold">Name:</span> {value.name}</Typography>
                                            <Typography component="p" className="addr"><span className="bold">Station:</span> {value.station}</Typography>
                                            <Typography component="p" className="addr"><span className="bold">Time:</span> {value.time}</Typography>
                                            <span className="display_none">{flag1=1}</span>
                                        </Paper>}
                                    </div>
                                ))
                            }
                            {flag1==0 && <Paper className="accident_paper">
                                            <Typography component="p" className="addr center">None</Typography>
                            </Paper>}
                            </div>
                            <div className="center tcn_heading">
                                <Typography component="p" className="accidents_heading">Train Schedule</Typography>
                            </div>
                            <div className="daily_options">
                            {
                                val.train.map((value,index)=>(
                                    <div>
                                        {value.from==this.state.start && value.to==this.state.destination && <Paper className="accident_paper">
                                        <Typography component="p" className="addr"><span className="bold">Name:</span> {value.name}</Typography>
                                            <Typography component="p" className="addr"><span className="bold">Station:</span> {value.station}</Typography>
                                            <Typography component="p" className="addr"><span className="bold">Time:</span> {value.time}</Typography>
                                            <span className="display_none">{flag2=1}</span>
                                        </Paper>}
                                    </div>
                                ))
                            }
                            {flag2==0 && <Paper className="accident_paper">
                                            <Typography component="p" className="addr center">None</Typography>
                            </Paper>}
                            </div>
                            <div className="center tcn_heading">
                                <Typography component="p" className="accidents_heading">Metro Schedule</Typography>
                            </div>
                            <div className="daily_options">
                            {
                                val.metro.map((value,index)=>(
                                    <div>
                                        {value.from==this.state.start && value.to==this.state.destination && <Paper className="accident_paper">
                                        <Typography component="p" className="addr"><span className="bold">Name:</span> {value.name}</Typography>
                                            <Typography component="p" className="addr"><span className="bold">Station:</span> {value.station}</Typography>
                                            <Typography component="p" className="addr"><span className="bold">Time:</span> {value.time}</Typography>
                                            <span className="display_none">{flag3=1}</span>
                                        </Paper>}
                                    </div>
                                ))
                            }
                            {flag3==0 && <Paper className="accident_paper">
                                            <Typography component="p" className="addr center">None</Typography>
                            </Paper>}
                            </div>
                            </div>}
                        </div>
                    ))
                }
                
            </div>
            </div>
        )
    }
}

export default DailySchedules