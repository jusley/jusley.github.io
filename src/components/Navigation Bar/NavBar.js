import React from 'react';
import Homepage from '../Homepage/Homepage';
import MSKlogo from './MSKlogo.svg';
import newLogo from './logo.svg'
import About from '../About/About';
import {Link, BrowserRouter as Router, NavLink, Switch} from 'react-router-dom';
import './NavBar.css';


export function NavBar(props) {
    return(
        <nav>
            <div className='navbar-header'>
            <div className='nav-logo2'>
                <img className='nav-logo' src= {newLogo} alt = 'logo' height = "55" />
            </div>
                <div className='nav-button'>  
                </div>

                <div className="navigation">
                    <Link exact to="/" className="nav-button">Home</Link>
                    <Link exact to="/About" className="nav-button">About</Link>
                    <Link exact to="/Profile" className="nav-button">Profile</Link>
                 </div>
            </div>
        </nav>


    )
}

export default NavBar;