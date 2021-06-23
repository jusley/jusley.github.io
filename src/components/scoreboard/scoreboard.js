import React from 'react';
import './scoreboard.css';
import Button from './button'

export function ScoreBoard({questions}) {
    questions = questions
    return(
        <div className='board'>{questions && questions.map((question,index)=>{
            return(
                <Button index={index} id={question.id} />
            )
        })}</div>
    )
}

export default ScoreBoard;