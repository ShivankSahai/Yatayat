import React,{Component} from 'react'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import WelcomePage from './WelcomePage/main.js'

class Router extends Component{
    render(){
        return(
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="routes">
                    {!localStorage.getItem('yatayat_auth') &&
                        <Switch>
                            <Route path="/" exact component={WelcomePage} />
                        </Switch>
                    }
                    {localStorage.getItem('yatayat_auth') &&
                        <Switch>
                            <Route path="/" exact component={WelcomePage} />
                        </Switch>
                    }
                </div>
            </BrowserRouter>
        )
    }
}

export default Router