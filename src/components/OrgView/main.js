import React,{Component} from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

class OrgView extends Component{
    render(){
        return(
            <div className="main_div"><br></br><br></br><br></br>
                <Paper className="rounded width_less">
                <div className="org_info center">
                <Typography component="p" className="accidents_heading">Upload daily schedules</Typography><br></br><br></br>
                <form>
                    <label>Bus Schedule: </label>
                    <input type="file" /><br></br><br></br>
                    <Button variant="contained" color="primary">Upload</Button><br></br><br></br><br></br>
                    <label>Train Schedule: </label>
                    <input type="file" /><br></br><br></br>
                    <Button variant="contained" color="primary">Upload</Button><br></br><br></br><br></br>
                    <label>Metro Schedule: </label>
                    <input type="file" /><br></br><br></br>
                    <Button variant="contained" color="primary">Upload</Button><br></br><br></br><br></br>
                </form>
                </div>
                </Paper>
            </div>
        )
    }
}

export default OrgView