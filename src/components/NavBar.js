import React from 'react';
import Homepage from './Homepage';
import MSKlogo from '../MSKlogo.svg';
import {Link, BrowserRouter as Router, NavLink} from 'react-router-dom';
import './NavBar.css';


export function NavBar(props) {
    return(
        <nav>
            <div className='navbar-header'>

            <div className='nav-logo2'>
                <img className='nav-logo' src= {MSKlogo} alt = 'msklogo' height = "50" />
            </div>
            
            {/* <img className='nav-logo' src= {MSKlogo} alt = 'msklogo' height = "50" /> */}
            
                <div className='nav-button'>  
                </div>
                {/*
                We will add "to="/path"" to the other buttons when we create the pages. for now they are empty
                */}
                
                <div className="navigation">
                    <Router>
                        <Link to="/Homepage" className="nav-button">Home</Link>
                        <Link to="/About" className="nav-button">About</Link>
                        <Link className="nav-button">Profile</Link>
                    </Router>
                    
                 </div>
            </div>
        </nav>


    )
}

export default NavBar;