import React from "react";
import NavBar from '../Navigation Bar/NavBar';
import './Case.css';
import Placeholder from './placeholder.jpeg';

export function Case(props) {
    return (
    <div>
        <div><NavBar/></div>

        <div className="Case">
        <img className='place-holder' src= {Placeholder} alt = 'placeholder' max-width = "700" />
            <div className ="textInfo">
                <div className = "textTitle">{props.title}</div>
                <div className = "textBody" >
                    {props.body}
                </div>
                <a href={props.link} className="getstarted-button">Get Started</a>
                   
                
                
            </div>
           
</div>
</div>)
}
export default Case;