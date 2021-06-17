import React from 'react';
import '../Case/Styles/AnswerInfo.css';
export function AnswerInfo(props) {
    return(
        <div className="answerinfo">
           {props.message}
        </div>


    )
}

export default AnswerInfo;