import React from 'react'
import ProgressBar from '../progressBar/progressBar';
import './caseStudy.css'

const Case = ({name,progress}) =>{
    const progres = progress;
    const label = name;
    return(
        <div className = "rows">
            <div className = "columns">{label}</div>
            <div className = "columns1"><ProgressBar completed={progres} /></div>
        </div>
         
    )
}
export default (Case)