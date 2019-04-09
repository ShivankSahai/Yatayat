import React,{Component} from 'react'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import WelcomePage from './WelcomePage/main.js'
import LoginPage from './LoginPage/main.js'
import SignUpPage from './SignUpPage/main.js'
import DriverView from './DriverView/main.js'
import HospitalView from './HospitalView/main.js'
import OrgView from './OrgView/main.js'
import PoliceView from './PoliceView/main.js'
import UserView from './UserView/main.js'
import TrafficCom from './UserView/traffic.js'
import AccidentCom from './UserView/accident.js'
import DailySched from './UserView/daily.js'
import LocationWise from './UserView/locationwise.js'

class Router extends Component{
    render(){
        return(
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="routes">
                    {!localStorage.getItem('yatayat_auth') &&
                        <Switch>
                            <Route path="/" exact component={WelcomePage} />
                            <Route path="/login" exact component={LoginPage} />
                            <Route path="/signup" exact component={SignUpPage} />
                            <Route path="/driver" exact component={DriverView} />
                            <Route path="/hospital" exact component={HospitalView} />
                            <Route path="/org" exact component={OrgView} />
                            <Route path="/police" exact component={PoliceView} />
                            <Route path="/user" exact component={UserView} />
                            <Route path="/user/traffic" exact component={TrafficCom} />
                            <Route path="/user/accident" exact component={AccidentCom} />
                            <Route path="/user/daily" exact component={DailySched} />
                            <Route path="/user/locationwise" exact component={LocationWise} />
                        </Switch>
                    }
                    {localStorage.getItem('yatayat_auth') &&
                        <Switch>
                            <Route path="/" exact component={WelcomePage} />
                            <Route path="/login" exact component={LoginPage} />
                            <Route path="/signup" exact component={SignUpPage} />
                            <Route path="/driver" exact component={DriverView} />
                            <Route path="/hospital" exact component={HospitalView} />
                            <Route path="/org" exact component={OrgView} />
                            <Route path="/police" exact component={PoliceView} />
                            <Route path="/user" exact component={UserView} />
                            <Route path="/user/traffic" exact component={TrafficCom} />
                            <Route path="/user/accident" exact component={AccidentCom} />
                            <Route path="/user/daily" exact component={DailySched} />
                            <Route path="/user/locationwise" exact component={LocationWise} />
                        </Switch>
                    }
                </div>
            </BrowserRouter>
        )
    }
}

export default Router