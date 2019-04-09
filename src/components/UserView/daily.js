import React,{Component} from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'

class DailySchedules extends Component{
    state={
        start:'',
        destination:'',
        data:''
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };    

    fetchdaily=()=>{
        axios.get('https://rocky-atoll-55276.herokuapp.com/daily',{},{
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            console.log(res)
            this.setState({
                data:res.data
            })
        })
    }

    render(){
        let flag1=0
        let flag2=0
        let flag3=0
        return(
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
                /><br></br><br></br>

                <Typography component="p" className="little_big">Enter Destination</Typography>
                <TextField
                id="outlined-name"
                label="Destination"
                value={this.state.destination}
                onChange={this.handleChange('destination')}
                margin="normal"
                variant="outlined"
                /><br></br><br></br>

                <Button onClick={this.fetchdaily} variant="contained" color="primary" className="bold">Find transport</Button><br></br><br></br>
                </div>
            </Paper>
                {
                    this.state.data && this.state.data.map((val,ind)=>(
                        <div className="results">
                            {this.state.data && <div className="daily_options">
                            <div>
                            <Typography component="p" className="accidents_heading m_top w">Bus schedule</Typography>
                            {
                                val.bus.map((value,index)=>(
                                    <div>
                                        {value.from==this.state.start && value.to==this.state.destination && <Paper className="accident_paper">
                                            <Typography component="p" className="addr">{value.name}</Typography>
                                            <Typography component="p" className="addr">{value.station}</Typography>
                                            <Typography component="p" className="addr">{value.time}</Typography>
                                            <span className="display_none">{flag1=1}</span>
                                        </Paper>}
                                    </div>
                                ))
                            }
                            {flag1==0 && <Paper className="accident_paper">
                                            <Typography component="p" className="addr center">None</Typography>
                            </Paper>}
                            </div>
                            <div>
                            <Typography component="p" className="accidents_heading w">Train schedule</Typography>
                            {
                                val.train.map((value,index)=>(
                                    <div>
                                        {value.from==this.state.start && value.to==this.state.destination && <Paper className="accident_paper">
                                            <Typography component="p" className="addr">{value.name}</Typography>
                                            <Typography component="p" className="addr">{value.station}</Typography>
                                            <Typography component="p" className="addr">{value.time}</Typography>
                                            <span className="display_none">{flag2=1}</span>
                                        </Paper>}
                                    </div>
                                ))
                            }
                            {flag2==0 && <Paper className="accident_paper">
                                            <Typography component="p" className="addr center">None</Typography>
                            </Paper>}
                            </div>
                            <div>
                            <Typography component="p" className="accidents_heading w">Metro schedule</Typography>
                            {
                                val.metro.map((value,index)=>(
                                    <div>
                                        {value.from==this.state.start && value.to==this.state.destination && <Paper className="accident_paper">
                                            <Typography component="p" className="addr">{value.name}</Typography>
                                            <Typography component="p" className="addr">{value.station}</Typography>
                                            <Typography component="p" className="addr">{value.time}</Typography>
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
        )
    }
}

export default DailySchedules