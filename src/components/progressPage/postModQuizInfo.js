import React from 'react'
import './postModQuizInfo.css'

const PostModQuizInfo = ({N_of_Attempts,Highest_Attempt}) =>{
    const nA = N_of_Attempts;
    const hA = Highest_Attempt;
    var pf ='';
    if(hA>=80){
        pf = 'P'
    }
    else{
        pf = 'F'
    }
    return(
        <div className='PMQ'>
            <div className="mainText">Post Module Quiz</div>
            <div class='row'>
                <div className ='secondaryText' class='column'>
                    <p className = 'secondaryText' >Number of attempts</p>
                    <p className = 'secondaryText' >{nA}</p>
                </div>
                <div className ='secondaryText' class='column3'>
                    <p className = 'secondaryText' >Highest Attempt Score</p>
                    <p className = 'secondaryText'>{hA}</p>
                </div>
                <div className ='secondaryText' class='column4'>
                    <p className = 'secondaryText' >Pass/Fail</p>
                    <p className = 'secondaryText' >{pf}</p>
                </div>
            </div>
        </div>
         
    )
}
export default (PostModQuizInfo)