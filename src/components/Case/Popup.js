import React from "react";
import '../Case/Styles/Popup.css';
 
const Popup = props => {
  if (props.title === "Incorrect"){
    return (
      <div className="popup-box"> 
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          <b className="PopupTitle">{props.title}</b>
          <div className="answeinfo2">{props.content}</div>
        </div>
      </div>
    );
  }
  else{
      return(
        <div>
        <div className="answerinfo">
        <span className="close-icon2" onClick={props.handleClose}>x</span>
        <div className="CorrectText">Correct</div>
        <div>{props.content}</div>
        </div>
        </div>
    )
  }
}
  
 
export default Popup;