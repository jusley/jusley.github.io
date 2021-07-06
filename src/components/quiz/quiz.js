import React from 'react';
import { useEffect, useState } from "react";
import Question from './question';
import {db,Readdb,check,userAnswers} from './functions';
import 'firebase/firestore';
import NavBar from '../Navigation Bar/NavBar';
import ScoreBoard from '../scoreboard/scoreboard'
import './quiz.css';



const Quiz = (props) =>{
    console.log(props)
    //id of the quiz
    const id = props.match.params.id;
    const[questions,setquestions]=useState([])
    var ar=[]
    var questAnswers = {}

    function handleSubmit(e){
    
        e.preventDefault();
        var counter = 0
        const max = Object.keys(questAnswers).length
        for(const i in userAnswers){
            if(JSON.stringify(userAnswers[i])===JSON.stringify(questAnswers[i])){
                counter++
            }
        }
        var total = (counter*100)/max
        if(total >= 80){
            console.log("passed with ",total)
        }
        else{console.log("failed with ",total)}
        window.location.href="/ProgressPage"
    }

    async function getquest(){
        var arr = await Readdb(id)
        return arr
    }

    ar = getquest()
    ar.then(function(result){
        setquestions(result)
    })

    if(questions){
        return(
            <div className="contents">
                <div className="contents">
                    <NavBar />
                    <h2 className="title">
                        Post Module Quiz
                    </h2>
                    <ScoreBoard questions={questions}/>
                    {questions && questions.map((question,index) =>{
                        questAnswers[question.id]=question.answer
                        return(
                            <Question quiz={question} index={index} key={question.id}/>
                        )
                    })}
                    <button className="button" onClick={handleSubmit}>submit</button>
                </div>
            </div>  
        )
    }else{
        return(
            <div className="contents">
                <div><NavBar /></div>
                <div className="contents">
                  <span className="contents">loading</span>
                </div>
            </div> 
        )
    }
}

export default (Quiz)