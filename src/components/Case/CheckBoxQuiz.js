import { Button, Checkbox, Space, Modal } from 'antd';
import {React, useState} from "react";
import NavBar from '../Navigation Bar/NavBar';
import AnswerInfo from './AnswerInfo';
import Popup from './Popup';
import '../Case/Styles/CheckBoxQuiz.css';

{/*TODO: 
  -> add submit button that is disabled when no answers are selected. 
  -> submit button: onClick check "checkedValues" and compare each item in array to true answers (props.answerOptions.isCorrect)
  -> if correct, display explanation component, else display popup
*/}

var checkedAns = [];

function onCheck(checkedValues) {
    console.log('checked = ', checkedValues);
    checkedAns = checkedValues;
  };
   
  export function CheckBoxQuiz (props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const togglePopup = () => {
      console.log(checkedAns);
      console.log(props.correct);
      if(!(JSON.stringify(props.correct) === JSON.stringify(checkedAns))){
      setIsOpen(!isOpen);}
      else{setIsHidden(!isHidden)
      setIsDisabled(!isDisabled)}
    }
    
    if(props.imageURL == null)
    return (
    <>
      <NavBar/>
      <div className="Container">
      <h1  className="Title">{props.title}</h1>
      <Space direction="vertical">
      <Checkbox.Group options={props.answerOptions.map(option=>option.answerText)} onChange={onCheck} />
      </Space>
      <Button  onClick={togglePopup} className="submitButton">Submit</Button>
      </div>
      {isOpen && <Popup
      content={<>
        {props.message}
      </>}
      handleClose={togglePopup}
    />}
    </>
  )
  else{
    return (
      <>
      <NavBar/>
    
      <div className="Container">
      <h1  className="Title">{props.title}</h1>
      <div> <img src={props.imageURL} className="quizPicture" alt="place holder" max-height="200"/> </div>
      <div><Checkbox.Group disabled={isDisabled} className = "CheckBoxQuiz" options={props.answerOptions.map(option=>option.answerText)} onChange={onCheck}/> </div>
     
      {!isHidden && 
      <Button  onClick={togglePopup} className="submitButton">Submit</Button>
      }
     
      {isOpen && <Popup
      content={<>
        <p className = "PopupMessage">{props.message}</p>
      </>}
      handleClose={togglePopup}
    />}
    {isHidden &&
    <AnswerInfo message={props.message}/>
    
    }
     </div>
    </>
    )

  }};
  export default CheckBoxQuiz;