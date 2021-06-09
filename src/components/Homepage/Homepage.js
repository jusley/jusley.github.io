import React from "react";
import NavBar from '../Navigation Bar/NavBar';
import Skeleton from "../Skeleton/Skeleton";
import firebase from 'firebase';
import 'firebase/firestore';
import Quiz from '../quiz/quiz';
import './Homepage.css';

export function Homepage(props) {
    // /Quiz/FRurrHFbrWtNngRUKOzf
    // /Quiz/nnzzFVo694dNDrFwHwur
    return (
    <div>
        <div><NavBar /></div>
        <div className="welcome">
            <h2 className="message">Welcome to the MSK <br></br>teaching module.</h2>
            <h2 className="step1">Step 1</h2>
            <p className="step1P">Click the button on the joint to view its related cases.</p>  
            <h2 className="step2">Step 2</h2>
            <p className="step2P">Choose a case, read all its information. Answer all its <br></br>questions.</p> 
            <h2 className="step3">Step 3</h2>
            <p className="step3P">Complete the final post module quiz to receive a grade.</p> 
        </div>
        
        <div><Skeleton/></div>

        
        
    </div>
    )
}
