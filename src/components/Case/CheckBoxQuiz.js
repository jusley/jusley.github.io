import { Button, Checkbox, Space, Modal } from 'antd';
import {React, useState} from "react";
import NavBar from '../Navigation Bar/NavBar';
import AnswerInfo from './AnswerInfo';
import Popup from './Popup';
import { useSelector, useDispatch } from 'react-redux';
import { addNext,reveal,increament } from "./KneeModule/kneeModSlice";
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
    const [submit,setSubmit] = useState(true)
    
    const dispatch = useDispatch();

    const togglePopup = () => {
      console.log(checkedAns);
      console.log(props.correct);
      if(!(JSON.stringify(props.correct) === JSON.stringify(checkedAns))){
      setIsOpen(!isOpen);}
      else{setIsHidden(!isHidden)
      setIsDisabled(!isDisabled)}
    }
    const togglePopup2 = e =>{
      setIsHidden(!isHidden)
      setIsDisabled(!isDisabled)
      setSubmit(!submit)
    }
    const next =e =>{
      dispatch(increament())
      setSubmit(!submit)
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
      {isOpen && <Popup title = "Incorrect"
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
     
      {!isHidden && submit &&
      <Button  onClick={togglePopup} className="submitButton">Submit</Button>
      }
      {!submit &&
      <Button  onClick={next} className="submitButton">Next</Button>
      }
     
      {isOpen && <Popup title = "Incorrect"
      content={<>
        <p className = "PopupMessage">{props.message}</p>
      </>}
      handleClose={togglePopup}
    />}
    {isHidden &&
     <Popup title = "Correct" content={props.message} handleClose={togglePopup2}/>
    
    }
     </div>
    </>
    )

  }};
  export default CheckBoxQuiz;