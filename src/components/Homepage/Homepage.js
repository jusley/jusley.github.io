import React from "react";
import NavBar from '../Navigation Bar/NavBar';
import Skeleton from "../Skeleton/Skeleton";
import firebase from 'firebase';
import 'firebase/firestore';

export function Homepage(props) {
    return (
    <div>
        <div><NavBar /></div>
        <div><Skeleton/></div>
    </div>
    )
}
