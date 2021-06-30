import React from 'react'
import './progressPage.css'
import NavBar from '../Navigation Bar/NavBar'
import PostModQuizInfo from './postModQuizInfo'
import Footer from './footer'
import Case from './caseStudy'
const ProgressPage = (resulat) =>{
    function handleSelect(e){

    }
    // nA and hA will later be read from the user's info in our database
    const nA = 2;
    const hA = resulat;
    var cases = [{name:"Case 1",progress:90},{name:"Case 2",progress:60},{name:"Case 3",progress:10},{name:"Case 4",progress:0},{name:"Case 5",progress:0}]
    return(
        <div>
            <NavBar/>
            <div className="rowss1">
                <div className="columnss1">
                    <button className="buttonss" id='1' onClick={handleSelect}>Knee</button>
                </div>
                <div className="columnss1">
                    <button className="buttonss" id='2' onClick={handleSelect}>Hip</button>
                </div>
                <div className="columnss1">
                    <button className="buttonss" id='3' onClick={handleSelect}>Shoulder</button>
                </div>
            </div>
            <p className='mainTextP'>Case Studies</p>
            {cases.map(e=>{
                return(
                    <Case name={e.name} progress = {e.progress}/>
                )
            })}
            <PostModQuizInfo N_of_Attempts={nA} Highest_Attempt={hA}/>
            <Footer progress = {60}/>
        </div>
         
    )
}
export default (ProgressPage)