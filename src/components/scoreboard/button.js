import React , { useState } from 'react';
import './button.css'

const Button = ({index,id}) =>{
    return(
        <button className='buton' id = {id}>{index+1}</button>
    )
}

export default Button