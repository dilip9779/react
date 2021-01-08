// SideBar.js

import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./Signup";
import Main from "./Main";

export default class SideBar extends Component {
    render(){
        return (<Router>
            <div className="sidebar-menu">
            <div className="sidebar-header">
                <div className="logo">
                <Link to={"/"}>React</Link>
                </div>
            </div>
            <div className="main-menu">
                <div className="menu-inner">
                    <nav>
                        <ul className="metismenu" id="menu">
                          <li><Link to={"/"}><i className="fa fa-edit"></i><span>Add/Delete</span></Link></li>  
                          <li><Link to={"/sign-in"}><i className="fa fa-sign-in"></i><span>Login</span></Link></li>
                          <li><Link to={"/sign-up"}><i className="fa fa-sign-out"></i><span>Sign up</span></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div className="App">  
        <div className="auth-wrapper">
            <div className="auth-inner">
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
            </Switch>
            </div>
        </div>
        </div>
        </Router>
        )
    }
}