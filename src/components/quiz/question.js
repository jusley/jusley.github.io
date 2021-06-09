import React , { useState } from 'react';
import {userAnswers} from './functions';
import './question.css'

const Question = ({quiz,index}) =>{
    const options = quiz.options
   
    function handleChange3(e){
        var element = document.getElementsByName(quiz.id);
        var answer = []
        for(var i=0;i<element.length;i++){
            if(element[i].checked){
                answer.push(element[i].value)
            }
        }
        userAnswers[quiz.id]=answer
    }
    function handleChange4(e){
        var element = document.getElementsByName(quiz.id);
        var answer = []
        for(var i=0;i<element.length;i++){
            if(element[i].checked){
                answer.push(element[i].value)
            }
        }
        userAnswers[quiz.id]=answer
    }
    if(quiz.answer.length>1){
        return(
            <div className="contents">
                    <h2 className="question">Question {index+1}</h2>
                    <div className="p">{quiz.state}</div>
                    <p></p>
                    {options.map(x=>{
                        return(
                            <div className="option">
                                <input type="checkbox" name={quiz.id} value={x} onChange={handleChange3}/>
                                <label>{x}</label>
                                <p></p>
                            </div>
                        )
                    })}
            </div>
        )
    }
    else{
        return(
            <div className="contents">
                <h2 className="question">Question {index+1}</h2>
                    <div className="p">{quiz.state}</div>
                    <p></p>
                    {options.map(x=>{
                        return(
                            <div className="option">
                                <input type="radio" name={quiz.id} value={x}onChange={handleChange4}/>
                                <label>{x}</label>
                                <p></p>
                            </div>
                        )
                    })}
            </div>
        )
    }
}
export default Question