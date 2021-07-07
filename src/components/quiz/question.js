import React , { useState } from 'react';
import {userAnswers} from './functions';
import './question.css'
import { useSelector, useDispatch } from 'react-redux';
import {add, remove} from './quizSlice'

const Question = ({quiz,index}) =>{
    const dispatch = useDispatch();
    const options = quiz.options
    const id = quiz.id
    function handleChange3(e){
        var element = document.getElementsByName(quiz.id);
        var answer = []
        for(var i=0;i<element.length;i++){
            if(element[i].checked){
                answer.push(element[i].value)
            }
        }
        userAnswers[quiz.id]=answer
        dispatch(add(quiz.id))
        if(answer.length == 0){
            dispatch(remove(quiz.id))
        }
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
        dispatch(add(quiz.id))
        if(answer.length == 0){
            dispatch(remove(quiz.id))
        }
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