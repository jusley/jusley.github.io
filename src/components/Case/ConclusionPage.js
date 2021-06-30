import React, {useState} from "react";
import NavBar from '../Navigation Bar/NavBar';
import Placeholder from './placeholder.jpeg';
import { Button} from 'antd';
import '../Case/Styles/ImagePage.css';

export function ImagePage (props) {
    return (
    <div>
        <div><NavBar/></div>
        <div className="Container">
        <h1 className="Title">{props.title}</h1>
        <div>{props.content}</div>
        <Button href={props.URL} className="submitButton">{props.text}</Button>
        </div>
    </div>
    )}
export default ImagePage;