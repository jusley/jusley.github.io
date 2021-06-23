import React from 'react';
import '../Case/Styles/AnswerInfo.css';
export function AnswerInfo(props) {
    return(
        <div>
        <div className="answerinfo">
        <div className="CorrectText">Correct</div>
        <div>{props.message}</div>
        </div>
        </div>

    )
}

export default AnswerInfo;