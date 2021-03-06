import React,{Component} from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import Paper from '@material-ui/core/Paper'


class SignUpPage extends Component{
    state={
        name:'',
        email:'',
        aadhar:'',
        password:'',
        confirm_password:'',
        open: false,
        vertical: 'top',
        horizontal: 'center',
        message:''
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };    

    handleClick = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };

    signup=()=>{
      if(this.state.password==this.state.confirm_password){
        let new_user={
          name:this.state.name,
          email:this.state.email,
          aadhar:this.state.aadhar,
          password:this.state.password,
          user_type:"user"
        }
        axios.post('https://rocky-atoll-55276.herokuapp.com/users',new_user,{
          header:{
            'Content-type':'application/json'
          }
        }).then((res)=>{
          this.setState({
            message:"Successful signup"
          })
          this.handleClick()
          setTimeout(() => {
            window.location.href="/login"
          }, 2000);
        }).catch((err)=>{
          this.setState({
            message:"Something went wrong. Please try again."
          })
          this.handleClick()
        })
      }
      else{
        this.setState({
          message:"Password and Confirm Password are different."
        })
        this.handleClick()
      }
    }

    render(){
      const { vertical, horizontal, open } = this.state;
        return(
            <div className="signup_main_div">
            <Paper className="rounded width_less">
            <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.message}</span>}
        />
                <Typography component="p" className="accidents_heading">Signup Page</Typography>
                <TextField
          id="outlined-name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        /><br></br>    
        <TextField
          id="outlined-name"
          label="E-mail"
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
          variant="outlined"
        /><br></br>
          <TextField
          id="outlined-name"
          label="Aadhar Number"
          value={this.state.aadhar}
          onChange={this.handleChange('aadhar')}
          margin="normal"
          variant="outlined"
        /><br></br>
        <TextField
          id="outlined-name"
          label="Password"
          value={this.state.password}
          onChange={this.handleChange('password')}
          type="password"
          margin="normal"
          variant="outlined"
        /><br></br>
          <TextField
          id="outlined-name"
          label="Confirm Password"
          value={this.state.confirm_password}
          onChange={this.handleChange('confirm_password')}
          type="password"
          margin="normal"
          variant="outlined"
        /><br></br>
        <Button onClick={this.signup} className="signup_btn">Sign Up</Button>
        </Paper>
            </div>
        )
    }
}

export default SignUpPage