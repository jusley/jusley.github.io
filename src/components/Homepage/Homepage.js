import React from "react";
import NavBar from '../Navigation Bar/NavBar';
import Skeleton from "../Skeleton/Skeleton";
import firebase from 'firebase';
import 'firebase/firestore';
import Quiz from '../quiz/quiz';

export function Homepage(props) {
    // /Quiz/FRurrHFbrWtNngRUKOzf
    // /Quiz/nnzzFVo694dNDrFwHwur
    return (
    <div>
        <div><NavBar /></div>
        <div><Skeleton/></div>

        <div class="instructions">
            <h1>Instructions</h1>

            
                <span class="arrow" title="arrow icon"></span>
            
            <div class="steps">
                <h1>Step One &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
                    Step Two &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
                    Step Three
                </h1>
            </div>

            <div class="homepage-circles">
                    <span class="home-circle"></span>
                    <span class="home-circle"></span>
                    <span class="home-circle"></span>
            </div>

            <div class="section">
                <div>Click on the button on the join to view its <br></br>related cases.</div>
                <div>Choose a case, read and answer all its <br></br>information and questions.</div>
                <div>Complete the final post module quiz to <br></br>receive a grade.</div>
            </div>


        </div>   
    </div>

    )
}
