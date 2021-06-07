import React from "react";
import NavBar from '../Navigation Bar/NavBar';
import Skeleton from "../Skeleton/Skeleton";
import firebase from 'firebase';
import 'firebase/firestore';
import Quiz from '../quiz/quiz';
import {Link} from 'react-router-dom';

export function Homepage(props) {
    // /Quiz/FRurrHFbrWtNngRUKOzf
    // /Quiz/nnzzFVo694dNDrFwHwur
    return (
    <div>
        <div><NavBar /></div>
        <div><Skeleton/></div>
    </div>
    )
}
