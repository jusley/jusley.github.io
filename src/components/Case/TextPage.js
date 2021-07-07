import React, {useState} from "react";
import { Button} from 'antd';
import NavBar from '../Navigation Bar/NavBar';
import Placeholder from './placeholder.jpeg';
import '../Case/Styles/ImagePage.css';
import { useSelector, useDispatch } from 'react-redux';
import { addNext,reveal,increament } from "./kneeModSlice";



export function ImagePage (props) {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(1);

    const next =e =>{
        dispatch(increament()) 
      }
    return (
    <div>
        <div><NavBar/></div>

        <div className="Container">
        <h1 className="Title">{props.title}</h1>
        <div>{props.content}</div>
        <Button  onClick={next} className="submitButton">Next</Button>
        </div>
    </div>)
}
export default ImagePage;