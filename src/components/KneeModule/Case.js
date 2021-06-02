import React from "react";
import { Fragment } from "react";
import NavBar from '../Navigation Bar/NavBar';
import './Case.css';
import Placeholder from './placeholder.jpeg';

export function Case(props) {
    return (
    <div>
        <div><NavBar/></div>

        <div className="Case1">
            <div className ="textInfo">
                <h1>Case 1</h1>
                <p>John is a 55 year-old male who presents to your office with a 1 year history of insidious
                    onset  <br></br>medial right knee pain worse after prolonged sitting, relieved by gentle exercise 
                    and no pain <br></br>at rest. He has occasional swelling and uses Advil PRN. On exam, he has a mild
                    effusion, full <br></br>extension but reduced flexion, and medial joint line tenderness. Thessaly
                    and McMurray tests.
                </p>

                <div className="quizStart">
                    <button className="getstarted-button">Get Started</button>
                    {/* <Link exact to "/" className="get-started-button">GetStarted</Link> */}
                </div>
            </div>
            <img className='place-holder' src= {Placeholder} alt = 'placeholder' height = "600" id="ph" />

            
        </div>

    </div>

    )
}