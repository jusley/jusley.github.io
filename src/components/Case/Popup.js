import React from "react";
import '../Case/Styles/Popup.css';
 
const Popup = props => {
  return (
    <div className="popup-box"> 
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <b className="PopupTitle">Incorrect</b>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;