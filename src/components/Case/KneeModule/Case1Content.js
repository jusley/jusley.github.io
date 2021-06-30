import React,{Component} from "react";
import Placeholder from '../placeholder.jpeg';
import ImagePage from '../ImagePage';
import TextPage from '../TextPage';
import RadioQuiz from '../RadioQuiz';
import CheckBoxQuiz from '../CheckBoxQuiz';
import { Button, Radio, Input, Space } from 'antd';
import { selectNextPage,selectPage,selectNextOrNot } from "./kneeModSlice";
import { useSelector, useDispatch } from 'react-redux';
import { removeNext,increament,hide } from "./kneeModSlice";
import p1 from './Knee_case1/1.jpg'
import p2 from './Knee_case1/2.jpg'
import acl from './Knee_case1/acl.jpg'
import aircast from './Knee_case1/aircast.jpg'
import patella from './Knee_case1/patella.jpg'
import unload from './Knee_case1/unload.jpg'
import osteo from './Knee_case1/osteo.png'
import tunnel from './Knee_case1/tunnel.jpg'

const Case1Content = (props)=>{
    const dispatch = useDispatch();
    const page = useSelector(selectPage)

    function on_Click(e){
        dispatch(increament())
    }
    if (page == 0){
        return(
            <div>
                <RadioQuiz title="What is the most likely diagnosis?" answerOptions ={[
            {value: 1, answerText: "Degenerative medial meniscus tear", isCorrect: false, message: "The patient population and chronic nature of this case is in keeping with a degenerative medial meniscus tear, however there are no mechanical symptoms,  no discomfort at rest, and Thessaly and McMurray's tests are negative. A degenerative medial meniscus tear develops over years and presents in older adults without a traumatic incident. Pain with pivoting or knee twisting and knee catching or locking would be more indicative of this diagnosis. Patients often complain of baseline discomfort. There will be medial joint line tenderness on exam, but no effusion. Knee ROM may be reduced and not smooth. A positive Thessaly and McMurray test would help differentiate this from other diagnoses. Note that a degenerative meniscus tear may co-exist with osteoarthritis."},
            {value: 2, answerText: "Osteoarthritis", isCorrect: true, message: ""},
            {value: 3, answerText: "Patellar tendinopathy", isCorrect: false},
            {value: 4, answerText: "Gout", isCorrect: false}
]}
correct={2}
message={<p>The most likely diagnosis is B, a knee osteoarthritis (OA).<br></br><br></br>

    Clinical features: Chronic, gradual-onset, vague or diffuse joint line tenderness in patients &gt;40, with or without an effusion. <br></br>
    Pain relieved by rest, worse with increased activity, sitting, or upon standing up (not worsened with gentle exercise).<br></br>
    Morning stiffness &lt;30 minutes.<br></br>
    Crepitus, reduced range of motion (ROM), and periarticular muscle atrophy are common.<br></br>
    Medial compartment OA is the most common. Note: intermittent effusions occur in patients when they increase their activity. <br></br>
    Risk factors include previous knee trauma, history of repetitive joint use, obesity (specifically for knee OA), and varus or valgus malalignment (leading to medial or lateral compartment OA respectively).</p> 
    }
/>
            </div>
        )
    }
    if (page == 1){
        return(
            <div>
                <RadioQuiz title="Assuming osteoarthritis exists, which investigation would be most useful?" answerOptions={[
            {value: 1, answerText: "Bone Scan", isCorrect: false},
            {value: 2, answerText: "AP and Lateral X-Ray right knee", isCorrect: false},
            {value: 3, answerText: "MRI right knee", isCorrect: false},
             {value: 4, answerText: "Standing AP and Lateral X-Ray right knee", isCorrect: true}
]}
correct={4}
message={
   <p> D - Standing/weight bearing AP x-ray right knee is the best view to assess medial and lateral compartment narrowing in OA. <br></br> See bilateral knee OA in the following image:<br></br><br></br>
   <img height='300' src={osteo}/>
   </p>
}
/>
            </div>
        )
    }
    if (page == 2){
        return(
            <div>
                <ImagePage title= "X-ray views to keep in mind" bodyElements = {[
            {bodyImage: "Skyline view is best to assess for patellofemoral OA:", imageURL: p1},
            {bodyImage: "Tunnel view is best to look for loose bodies, femoral condyle lesions and lateral compartment OA:", imageURL: tunnel},
            {bodyImage: "Oblique view is best to assess suspected tibial plateau fracture:", imageURL: p2}
 ]} />
 <Button  onClick={on_Click} className="submitButton">Next</Button>
            </div>
        )
    }
    if (page == 3){
        return(
            <div>
                <CheckBoxQuiz title= "Select all the radiographic findings seen in the X-ray." imageURL= {Placeholder} answerOptions = {[
            {value: 1, answerText: "Medial tibiofemoral joint space narrowing", isCorrect: true},
            {value: 2, answerText: "Lateral tibiofemoral joint space narrowing", isCorrect: false},
            {value: 3, answerText: "Mariginal osteophytes", isCorrect: true},
            {value: 4, answerText: "Subchondral cysts", isCorrect: true},
            {value: 5, answerText: "Subchondral sclerosis", isCorrect: true}]}
            correct={["Medial tibiofemoral joint space narrowing", "Mariginal osteophytes", "Subchondral cysts", "Subchondral sclerosis"]}
            message={
                <p>
                    Findings: Medial tibiofemoral joint space narrowing, marginal osteophytes, and subchondral sclerosis and cysts. <br></br>
                    Note: Almost everyone &gt;65 years of age shows signs of OA on x-ray, but only 33% are symptomatic.

                </p>
            } />
            </div>
            
        )
    }
    if (page == 4){
        return(
            <div>
                <CheckBoxQuiz title = "Select all management options for the condition depicted in the x-ray." imageURL = {Placeholder} answerOptions = {[
            {answerText: "Analgesia", isCorrect: false},
            {answerText:"Activity modification", isCorrect: false},
            {answerText:"Weight loss", isCorrect: false},
            {answerText:"Physiotherapy", isCorrect: false},
            {answerText:"Bracing", isCorrect: false},
            {answerText:"Glucosamine", isCorrect: false},
            {answerText:"Acupuncture", isCorrect: false},
            {answerText:"Viscosupplementation", isCorrect: false},
            {answerText:"Platelet-rich-plasma", isCorrect: false},
            {answerText:"Cortisone injection", isCorrect: false},
            {answerText:"Walking aid", isCorrect: false},
            {answerText:"Partial or Total Knee Replacement", isCorrect: false},
            {answerText:"Arthroscopic lavage or routine debridement", isCorrect: false},
            {answerText: "All of the above", isCorrect: true}
             ]}
            correct={["All of the above"]}
            message={<p>
                <b>Management options for knee osteoarthritis:</b><br></br>
                1. Analgesia (acetaminophen, NSAIDS (oral or topical), narcotics, duloxetine) <br></br>
                2. Activity modification (low impact exercises such as cycling or aquatics and may need to limit extreme ROMs)<br></br>
                3. Weight loss (10 lbs lost = 40 lbs less load on joint)<br></br>
                4. Glucosamine- still controversial but it is often worth a trial.<br></br>
                5. Physiotherapy – strengthening is beneficial<br></br>
                6. Acupuncture - some studies showing benefit<br></br>
                7. Bracing <br></br>
                8. Viscosupplementation<br></br>
                9. Platelet-rich-plasma<br></br>
                10. Cortisone injection<br></br>
                11. Walking aid such as cane (on opposite side)<br></br>
                12. Partial or total knee replacement<br></br>
                13: Arthroscopic lavage or routine debridement is no longer considered a management option. Do not refer an osteoarthritic knee for arthroscopy unless the patient has new onset catching pain indicating possible loose body. (It has been delisted by OHIP from insured services).
</p>
            }
    />
            </div>
        )
    }
    if (page == 5){
        return(
            <div>
                <RadioQuiz title = "Which type of brace would be most helpful for unicompartmental osteoarthritis?" 
    images = {[
        {src: aircast},
        {src: patella},
        {src: unload},
        {src: acl}
    ]}
    answerOptions={[
        {value: 1, answerText: "Air Cast Walker", isCorrect: false},
        {value: 2, answerText: "Patellar brace", isCorrect: false},
        {value: 3, answerText: "Unloader brace", isCorrect: true},
        {value: 4, answerText: "ACL custom brace", isCorrect: false}
    ]}
    correct={3}
    messge={
        <p>
            Option C or the Unloader Brace (it unloads affected compartment and realigns knee joint) is the most helpful. 
        </p>
    }
    />
            </div>
        )
    }
    if (page == 6){
        return(
            <div>
                <TextPage title="Further Resources:" content={
    <p>
    <h1 className="Subtitle">American College of Rheumatology Management Guideline:</h1>
    https://www.rheumatology.org/Portals/0/Files/Osteoarthritis-Guideline-Early-View-2019.pdf
    <h1 className="Subtitle">Osteoarthritis Tool for Family Physicians:</h1>
    https://www.arthritisalliance.ca/images/OA_Tool_Final_July_24_2017_ENG.pdf
    </p>
}/>
            </div>
        )
    }
    
}
export default Case1Content;