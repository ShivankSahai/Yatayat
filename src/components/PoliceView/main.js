import React,{Component} from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import axios from 'axios';

class PoliceView extends Component{
    state={
        data:''
    }

    constructor(props){
        super(props)
        this.getData()
    }

    getData=()=>{
        axios.get('https://rocky-atoll-55276.herokuapp.com/traffic').then((res)=>{
            console.log(res.data)
            this.setState({
                data:res.data.reverse()
            })
        })
    }

    render(){
        setTimeout(() => {
            console.log('re rendered')
            this.getData()
        }, 5000);
        return(
            <div className="main_div">
                <div className="main_div">
                <div className="center tcn_heading">
                    <Typography component="p" className="accidents_heading">Traffic Congestions Nearby</Typography>
                </div>
                <div className="hospital_info">
                    {
                        this.state.data && this.state.data.map((val,ind)=>(
                            <Paper className="accident_paper">
                                <Typography component="p" className="addr">Address: {val.place}</Typography>
                                <Typography component="p" className="urg">Traffic: <span className={val.level}>{val.level}</span></Typography>
                                <Typography component="p" className="urg">Time: {val.time}</Typography>
                            </Paper>
                        ))
                    }
                </div>
                </div>
            </div>
        )
    }
}

export default PoliceView