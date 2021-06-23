import React from 'react'
import './progressPage.css'
import NavBar from '../Navigation Bar/NavBar'
import PostModQuizInfo from './postModQuizInfo'
import Footer from './footer'
import Case from './caseStudy'
const ProgressPage = (props) =>{
    function handleSelect(e){

    }
    // nA and hA will later be read from the user's info in our database
    const nA = 2;
    const hA = 90;
    var cases = [{name:"case 1",progress:90},{name:"case 2",progress:60},{name:"case 3",progress:10},{name:"case 4",progress:0},{name:"case 5",progress:0}]
    return(
        <div>
            <NavBar/>
            <div className="rowss1">
                <div className="columnss1">
                    <button className="buttonss" onClick={handleSelect}>Knee</button>
                </div>
                <div className="columnss1">
                    <button className="buttonss" onClick={handleSelect}>Hip</button>
                </div>
                <div className="columnss1">
                    <button className="buttonss" onClick={handleSelect}>Shoulder</button>
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