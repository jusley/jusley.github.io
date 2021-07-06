import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './footer.css'

const Footer = ({progress}) =>{
    const percentage = progress;
    var message = "";
    var greeting = "";
    if(percentage == 100){
        greeting = "Congratulations!!"
        message = "You have completed all the case studies and reference materials for this module."
    }
    else if(percentage > 51 && percentage < 99){
        greeting="Almost There!"
    }
    else if(percentage==50){
        greeting="Halfway There!"
    }
    else if(percentage < 50 && percentage > 0){
        greeting="You Are Doing Great!"
    }
    else{
    }
    return(
        <div className='footer'>
            <div style ={{width:'20%',margin: '5%', paddingLeft: '22%'}}>
                <CircularProgressbar className = "progressCircle" value={percentage} text={`${percentage}%`} styles={{
                    path : {
                        stroke: 'white',
                        strokeWidth: '8'
                    },
                    text : {
                        fill : 'white',
                        fontFamily : 'din-2014, sans-serif',
                        fontSize : '80%'
                    },
                    trail : {
                        stroke: '#614168',
                        strokeWidth: '8'
                    }
                }} />
                <div className='footer2'>
                    <p className='mainText1'>
                        {greeting}
                    <p className='secondaryText1'>{message}</p></p>
                </div>
            </div>
        </div>
         
    )
}
export default (Footer)