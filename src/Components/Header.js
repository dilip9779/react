// Header.js
import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
            <div className="header-area">
            <div className="row align-items-center">
                <div className="col-md-6 col-sm-8 clearfix">
                    <div className="nav-btn pull-left">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="col-md-6 col-sm-4 clearfix">
                    <ul className="notification-area pull-right">
                        <li id="full-view"><i className="ti-fullscreen"></i></li>
                        <li id="full-view-exit"><i className="ti-zoom-out"></i></li>
                    </ul>
                </div>
            </div>
        </div>  
        )
    }
}