import React, {useState} from "react";
import NavBar from '../Navigation Bar/NavBar';
import Placeholder from './placeholder.jpeg';
import '../Case/Styles/ImagePage.css';

export function ImagePage (props) {
    return (
    <div>
        <div><NavBar/></div>

        <div className="Container">
        <h1 className="Title">{props.title}</h1>
        {props.bodyElements.map((bodyElements) => (
            <div>
		    <h1 className="Subtitle">{bodyElements.bodyImage}</h1>
            <img src={bodyElements.imageURL} className="Picture" alt="place holder" max-height="500"/>
            </div>
	    ))}
        </div>
    </div>)
}
export default ImagePage;