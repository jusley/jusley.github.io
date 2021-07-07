import React,{Component} from "react";
import Placeholder from '../placeholder.jpeg';
import ImagePage from '../ImagePage';
import ConclusionPage from '../ConclusionPage';
import RadioQuiz from '../RadioQuiz';
import CheckBoxQuiz from '../CheckBoxQuiz';
import TextPage from '../TextPage';
import { Button, Radio, Input, Space } from 'antd';
import { selectNextPage,selectPage,selectNextOrNot } from "../kneeModSlice";
import { useSelector, useDispatch } from 'react-redux';
import { removeNext,increament,hide } from "../kneeModSlice";

const HipCase1Content = (props)=>{
    const dispatch = useDispatch();
    const page = useSelector(selectPage)

    function on_Click(e){
        dispatch(increament())
    }
    if (page == 0){
        return(
            <div>
                <RadioQuiz title="What is the most sensitive physical exam sign for detecting hip osteoarthritis?" answerOptions ={[
            {value: 1, answerText: "Internal rotation of the hip", isCorrect: true},
            {value: 2, answerText: "External rotation of the hip", isCorrect: false},
            {value: 3, answerText: "Flexion of the hip", isCorrect: false},
            {value: 4, answerText: "Adduction of the hip", isCorrect: false}
]}
correct={1}
message={<p>Internal rotation of the hip is correct.<br></br><br></br>

Internal rotation of the hip is the most sensitive test for detecting OA because it is the first range of motion to be most obviously reduced
 (so called capsular pattern of restriction in a joint which also affects abduction. Flexion is reduced more than extension, especially in early stages of OA). <br></br><br></br>
 The FADIR test (Flexion, Adduction, Internal Rotation) combines several motions of the hip that may be affected by intra-articular pathology and is also a sensitive exam for hip OA. 
</p> 
    }
/>
            </div>
        )
    }
    if (page == 1){
        return(
            <div>
                <CheckBoxQuiz title="You suspect intra-articular problem. What investigations are indicated? Pick as many as you see fit." answerOptions={[
            {value: 1, answerText: "CBC"},
            {value: 2, answerText: "ESR"},
            {value: 3, answerText: "CRP"},
             {value: 4, answerText: "Joint aspiration looking for crystals"},
             {value: 5, answerText: "Weight bearing AP hip and pelvis x-ray"},
            {value: 6, answerText: "Weight bearing lateral hip and pelvis x-ray"},
            {value: 7, answerText: "MRI"}
]}
correct={["Weight bearing AP hip and pelvis x-ray", "Weight bearing lateral hip and pelvis x-ray"]}
message={
   <p>  Plain radiographs are indicated for assessment of osteoarthritis. <br></br><br></br>
       Features of osteoarthritis seen on x-rays include narrowing of the joint space, osteophytes, subchondral sclerosis, and subchondral cysts. <br></br>
       Note that weight bearing views are required to properly assess the joint space of the hip. 
   </p>
}
/>
            </div>
        )
    }
    if (page == 2){
        return(
            <div>
                <CheckBoxQuiz title= "What findings are common on standing x-ray for hip osteoarthritis? " imageURL={Placeholder} answerOptions={[
            {value: 1, answerText: "Chondrocalcinosis"},
            {value: 2, answerText: "Asymmetrical joint space narrowing"},
            {value: 3, answerText: "Subchondral cysts"},
             {value: 4, answerText: "Bone erosions"},
             {value: 5, answerText: "Subchondral sclerosis"},
            {value: 6, answerText: "Osteophytes"},
            {value: 7, answerText: "Massive joint effusion"}
]}
correct={["Asymmetrical joint space narrowing", "Subchondral cysts", "Subchondral sclerosis", "Osteophytes"]}
message={
   <p>  <b>Assymetrical joint space narrowing: </b> Joint destruction is asymmetrical in OA. <br></br><br></br>
       <b>Subchondral cysts:</b> These are fluid-filled space inside a joint that form in OA. <br></br><br></br>
       <b>Subchondral sclerosis:</b> There is thickening of the bone below the cartilage in OA. <br></br><br></br>
       <b>Osteophytes: </b>These are bone spurs that form near joints impacted by OA. 
   </p>
}
/>
 
            </div>
        )
    }
    if (page == 3){
        return(
            <div>
                <CheckBoxQuiz title= "George is diagnosed with mild to moderate hip OA based on x-rays and matching physical exam findings. What are the first line treatments for hip OA? (click all that apply)" answerOptions = {[
            {value: 1, answerText: "Physiotherapy", isCorrect: true},
            {value: 2, answerText: "Continue to stay active", isCorrect: false},
            {value: 3, answerText: "Patient education", isCorrect: true},
            {value: 4, answerText: "Intra-articular corticosteroid injection", isCorrect: true},
            {value: 5, answerText: "Intra-articular hyaluronic acid injection", isCorrect: true},
            {value: 6, answerText: "Weight loss", isCorrect: true},
            {value: 7, answerText: "Activity modification", isCorrect: true},
            {value: 8, answerText: "Medications such as Tylenol and NSAIDs", isCorrect: true},
            {value: 9, answerText: "Hip replacement", isCorrect: true}
        ]}
            correct={["Physiotherapy", "Continue to stay active", "Patient education", "Weight loss", "Activity modification", "Medications such as Tylenol and NSAIDs"]}
            message={
                <p>
                   Although all of the above are treatments for hip OA, conservative options such as these are first line.
                </p>
            } />
            </div>
            
        )
    }
    if (page == 4){
        return(
            <div>
                <RadioQuiz title = "After trialing conservative options, George is still quite symptomatic. He would like to consider an intra-articular injection. How should you counsel George?" answerOptions = {[
             {value: 1, answerText: "Advise that cortisone injections are dangerous and that he should avoid them"},
             {value: 2, answerText: "While there are some small risks, a cortisone injection is a viable option for pain relief."},
             {value: 3, answerText: "Newer injectables such as platelet rich plasma and hyaluronic acid have been shown to slow down or even reverse the progression of OA"},
              {value: 4, answerText: "Intra-articular hip injections are difficult to perform and must be done at specialized centres in the hospital."},
             ]}
            correct={2}
            message={<p>
                Risks of cortisone injection include: <br></br>
                - infection, bleeding, temporary flare up of pain, temporary rise in BP and blood sugar, tissue atrophy, and very rarely avascular necrosis. <br></br>
                However overall these risks are rare and therefore injections should be considered for pain relief.

</p>
            }
    />
            </div>
        )
    }
   
    if (page == 5){
        return(
            <div>
                <RadioQuiz title = "George is now doing well with cortisone injections. He comes to your office and ask when he would require a hip replacement? How do you counsel him?" answerOptions = {[
             {value: 1, answerText: "If he has significant pain despite non-surgical interventions, then it is time to consider hip arthroplasty"},
             {value: 2, answerText: "When his x-rays show that he has severe osteoarthritis, then he should be referred for surgery"},
             {value: 3, answerText: "The outcomes of hip replacements are not good, and therefore he should avoid getting surgery if possible"},
              {value: 4, answerText: "Surgeons will not operate on a patient who is younger than 65"},
             ]}
            correct={1}
            message={<p>
                The primary determinant for hip replacement is pain and function.
</p>
            }
    />
            </div>
        )
    }
    if(page == 6){
        return(
            <div>
                <ConclusionPage title = "Case Complete" content="You may now move onto Hip Module Case 2." text="Next Module" URL="/Hip2Start"/>
            </div>
        )
    }
    
}
export default HipCase1Content;