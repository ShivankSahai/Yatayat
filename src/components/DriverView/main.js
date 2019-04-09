import React,{Component} from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'

class DriverView extends Component{
    state={
        start:'',
        destination:'',
        data:'',
        showData:false,
        places1:['Green Circle','Vevekananda Nagar','Gandhi Nagar','Old Katpadi'],
        places2:['Gorbachev Road','Lee Road','Fleming Road','Curie Road'],
        places:[]
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };

    alertAndShow=()=>{
        let a=this.state.start.split(' ').join('+')
        let b=this.state.destination.split(' ').join('+')
        if(this.state.destination=='CMC Vellore'){
            this.setState({
                places:this.state.places1
            })
        }
        else{
            this.setState({
                places:this.state.places2
            })
        }
        window.open(`https://www.google.com/maps/dir/${a}/${b}`)
        axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${a}&destination=${b}&key=AIzaSyCEF1MgrRBaktN47f3Xf_sb1POSHnDunY0`,{
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=>{
            console.log(res.data)
            this.setState({
                showData:true
            })
            axios.post('https://rocky-atoll-55276.herokuapp.com/traffic',{place:this.state.places,level: 'Ambulance Passing'},{
            headers:{
                'Content-Type': 'application/json'
            }
            })
        })
    }

    render(){
        return(
            <div className="main_div">
                <div className="main_div m_top">
                <Paper className="rounded width_less">
                <div className="center">
                <Typography component="p" className="accidents_heading">Ambulance Path</Typography><br></br>
                <Typography component="p" className="little_big">Enter start location</Typography>
                <TextField
                id="outlined-name"
                label="Location"
                value={this.state.start}
                onChange={this.handleChange('start')}
                margin="normal"
                variant="outlined"
                /><br></br>

                <Typography component="p" className="little_big">Enter destination</Typography>
                <TextField
                id="outlined-name"
                label="Location"
                value={this.state.destination}
                onChange={this.handleChange('destination')}
                margin="normal"
                variant="outlined"
                /><br></br><br></br>

                <Button onClick={this.alertAndShow} variant="contained" color="primary">Find path</Button>
                </div>

                {this.state.showData && this.state.destination=='CMC Vellore' && <div className="center">
                    <h2>Path passes through these areas</h2>

                    {
                        this.state.places1.map((val,ind)=>(
                            <p>{val}</p>
                        ))
                    }

                    <p className="red">Traffic Policemen have been alerted !</p>

                </div>}
                {this.state.showData && this.state.destination=='Chettinad Hospital, VIT Vellore' && <div className="center">
                    <h2>Path passes through these areas</h2>

                    {
                        this.state.places2.map((val,ind)=>(
                            <p>{val}</p>
                        ))
                    }

                    <p className="red">Traffic Policemen have been alerted !</p>

                </div>}
                </Paper>
            </div>
            </div>
        )
    }
}

export default DriverView