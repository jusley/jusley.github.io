import React, {useState, setState} from "react";
import NavBar from '../Navigation Bar/NavBar';
import Placeholder from './placeholder.jpeg';
import { Button, Radio, Input, Space } from 'antd';
import AnswerInfo from './AnswerInfo';
import '../Case/Styles/RadioQuiz.css';
import Popup from './Popup';

var checkedAns = 1;

export function RadioQuiz (props) {

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

  const togglePopup = () => {
    console.log(checkedAns);
    console.log(props.correct);
    if(props.correct != checkedAns){
    setIsOpen(!isOpen);}
    else{setIsHidden(!isHidden)
    setIsDisabled(!isDisabled)}
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
        {!isHidden && 
      <Button  onClick={togglePopup} className="submitButton">Submit</Button>
      }
      {isOpen && <Popup
      content={<>
        <p>{props.message}</p>
      </>}
      handleClose={togglePopup}
    />}
    {isHidden &&
    <AnswerInfo message={props.message}/>
    
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
            {!isHidden && 
      <Button  onClick={togglePopup} className="submitButton">Submit</Button>
      }
      {isOpen && <Popup
      content={<>
        <p>{props.message}</p>
      </>}
      handleClose={togglePopup}
    />}
    {isHidden &&
    <AnswerInfo message={props.message}/>
    
    }
            </div>
            </div>
        </div>

        )
    }
}
export default RadioQuiz;