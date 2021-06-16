import React , { useState } from 'react';
import './button.css'
import { useSelector, useDispatch } from 'react-redux';
import {selectAnsweredQuest} from '../quiz/quizSlice'

const Button = ({index,id}) =>{
    const answeredQuest = useSelector(selectAnsweredQuest)
    if(answeredQuest.includes(id)){
        return(
            <button className='buton1' id = {id}>{index+1}</button>
        )
    }
    else{
        return(
            <button className='buton' id = {id}>{index+1}</button>
        )
    }
}

export default Button