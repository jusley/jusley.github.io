import React from 'react';
import Homepage from './Homepage';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import './NavBar.css';


export function NavBar(props) {
    return(
        <nav>
            <div className='navbar-header'>
                <div className='nav-button'>Logo</div>
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