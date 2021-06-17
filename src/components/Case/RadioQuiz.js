import React, {useState, setState} from "react";
import NavBar from '../Navigation Bar/NavBar';
import Placeholder from './placeholder.jpeg';
import { Radio, Input, Space } from 'antd';


export function RadioQuiz (props) {

  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
    return (
    <div>
        <div><NavBar/></div>

        <div className="Container">
        
        <div className="RadioQuizPage">
        <h1 className="Title">{props.title}</h1>
        <div className='answer-section'>
      <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
	        {props.answerOptions.map((answerOption) => (
		    <Radio value={answerOption.value}>{answerOption.answerText}</Radio>
	        ))}
        </Space>
        </Radio.Group>
        </div>
        </div>
        </div>
    </div>)
}
export default RadioQuiz;

/*<Radio onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerText)}>{answerOption.answerText}</Radio>

const handleAnswerOptionClick = (isCorrect, ansText) => {
		if (isCorrect) {
			alert("Correct")
		}
        else{
           alert(ansText)
        }
	};
*/