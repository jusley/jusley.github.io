import React, {useState, setState} from "react";
import NavBar from '../Navigation Bar/NavBar';
import Placeholder from './placeholder.jpeg';

export function RadioQuiz (props) {

    const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			alert("Correct")
		}
        else{
           alert("Incorrect")
        }
	};
    return (
    <div>
        <div><NavBar/></div>

        <div className="RadioQuizPage">
        <h1 className="Title">{props.title}</h1>
        <div className='answer-section'>
	        {props.answerOptions.map((answerOption) => (
		    <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
	        ))}
        </div>
        </div>
    </div>)
}
export default RadioQuiz;