import React, {useState, setState,useEffect} from "react";
import NavBar from '../Navigation Bar/NavBar';
import Placeholder from './placeholder.jpeg';
import { Button, Radio, Input, Space } from 'antd';
import AnswerInfo from './AnswerInfo';
import '../Case/Styles/RadioQuiz.css';
import { useSelector, useDispatch } from 'react-redux';
import { addNext,reveal,increament } from "./kneeModSlice";
import Popup from './Popup';
import { selectNextOrNot } from "./kneeModSlice";

var checkedAns = 1;

const RadioQuiz = (props) => {
  const dispatch = useDispatch();
  const hid = useSelector(selectNextOrNot)
  console.log("radio",hid)
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    checkedAns=e.target.value;
    console.log(checkedAns);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [submit,setSubmit] = useState(true)

  const togglePopup = e =>{
    console.log(checkedAns);
    console.log(props.correct);
    if(props.correct != checkedAns){
    setIsOpen(!isOpen);}
    else{
      setIsHidden(!isHidden)
      setIsDisabled(!isDisabled)
    setSubmit(!submit)
    }
  }
  
  const next =e =>{
    setIsHidden(!isHidden)
    setIsDisabled(!isDisabled)
    dispatch(increament())
    setSubmit(!submit)
  }

  if(props.images == null)
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
		    <Radio disabled={isDisabled} className = "radioOption" value={answerOption.value}>{answerOption.answerText}</Radio>
	        ))}
        </Space>
        </Radio.Group>
        </div>
        {!isHidden && submit &&
      <Button  onClick={togglePopup} className="submitButton">Submit</Button>
      }
      {isOpen && <Popup title = "Incorrect"
      content={<>
        <p>N/A</p>
      </>}
      handleClose={togglePopup}
    />}
    {isHidden &&
    <AnswerInfo message={props.message}/>
    }
    {!submit &&
      <Button  onClick={next} className="submitButton2">Next</Button>
      }
        </div>
        </div>
    </div>)
    else{
        return(
            <div>
            <div><NavBar/></div>
    
            <div className="Container">
            
            <div className="RadioQuizPage">
            <h1 className="Title">{props.title}</h1>
            <div className='answer-section'>
          <Radio.Group onChange={onChange} value={value}>
              <div className="radioImageContainer">
                {props.images.map((image)=> (
                    <img className = "RadioImage" src={image.src}/>
                ))}</div>
                <div className="radioOptionsContainer">
                {props.answerOptions.map((answerOption) => (
                <Radio disabled={isDisabled} className = "radioOption" value={answerOption.value}>{answerOption.answerText}</Radio>
                ))}
                </div>
           
            </Radio.Group>
            </div>
            {!isHidden && submit &&
      <Button  onClick={togglePopup} className="submitButton">Submit</Button>
      }
      {isOpen && <Popup title = "Incorrect"
      content={<>
        <p>N/A</p>
      </>}
      handleClose={togglePopup}
    />}
    {isHidden &&
    <AnswerInfo message={props.message}/>
    }
    {!submit &&
      <Button  onClick={next} className="submitButton">Next</Button>
      }
            </div>
            </div>
        </div>

        )
    }
}
export default RadioQuiz;