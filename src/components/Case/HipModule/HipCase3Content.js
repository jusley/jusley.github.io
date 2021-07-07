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
import Checkbox from "antd/lib/checkbox/Checkbox";

const HipCase2Content = (props)=>{
    const dispatch = useDispatch();
    const page = useSelector(selectPage)

    function on_Click(e){
        dispatch(increament())
    }
    if (page == 0){
        return(
            <div> 
                <TextPage title="Physical Exam" content={<p>
                  You complete a physical exam and find the following: <br></br>
                  <h2><b><a href="https://youtu.be/7_w5taOXwRY?t=10" className="linkStyle">Palpation:</a></b></h2>
                      <li>&nbsp;&nbsp;&nbsp;Maximal tenderness over the adductor belly and myotendinous junction</li>
                  
                  <h2><b><a href="https://youtu.be/3lTv4gpRWxg?t=43" className="linkStyle" >Passive ROM: </a></b></h2>
                  <li>&nbsp;&nbsp;&nbsp;Hip abduction was slightly limited and painful</li>
                  
                    <h2><b><a href="https://youtu.be/k12rDoTog4w?t=68" className="linkStyle" >Resisted ROM:</a></b></h2>
                    <li>&nbsp;&nbsp;&nbsp;Hip adduction was painful and notably weaker</li>
                    <li>&nbsp;&nbsp;&nbsp;Hip abduction was slightly weaker but without pain</li>
                
                </p>}
/>
            </div>
        )
    }
    if (page == 1){
        return(
            <div>
                <RadioQuiz title="Based on the history and physical exam, what is the most likely diagnosis?" answerOptions={[
            {value: 1, answerText: "Adductor strain (pulled groin)"},
            {value: 2, answerText: "Osteoarthritis"},
            {value: 3, answerText: "Athletic pubalgia (sports hernia)"},
             {value: 4, answerText: "Stress Fracture"},
             {value: 5, answerText: "Acetabular Labral Injury"}
]}
correct={1}
message={
   <p>    The following features are characteristic of a grade 1 adductor strain: <br></br>
       Mechanism of injury of rapid hip extension, abduction and external rotation (eg hockey stride). <br></br>
       Pain on palpation, pain with abduction ROM, pain with contraction, and slight limitation in strength.
 
   </p>
}
/>
            </div>
        )
    }
    if (page == 2){
        return(
            <div> 
            
                <RadioQuiz title="What additional tests would you order to confirm diagnosis?" answerOptions={[
            {value: 1, answerText: "MRI"},
            {value: 2, answerText: "Plain film xray"},
            {value: 3, answerText: "Diagnosis can be made with history and physical exam alone"},
             {value: 4, answerText: "CT scan"},
]}
correct={3}
message={
   <p>   Correct - No further tests needed to confirm diagnosis.
 
   </p>
}
/>
            </div>
        )
    }
    if (page == 3){
        return(
            <div>
                <CheckBoxQuiz title= "What following treatments would you suggest at this time? Choose all that apply" answerOptions = {[
            {value: 1, answerText: "Stop playing hockey as it will continue to worsen the problem", isCorrect: true},
            {value: 2, answerText: "NSAIDs are not recommended for pain relief", isCorrect: false},
            {value: 3, answerText: "Apply ice to groin area to help with pain", isCorrect: true},
            {value: 4, answerText: "Referral to rehabilitation specialist for gradual stretching and strengthening program", isCorrect: true},
            {value: 5, answerText: "Groin strapping (usually done by physio or athletic therapist)", isCorrect: false},
            {value: 6, answerText: "Referral to orthopedic surgeon", isCorrect: true}
            
        ]}
            correct={["Stop playing hockey as it will continue to worsen the problem", "Apply ice to groin area to help with pain", "Referral to rehabilitation specialist for gradual stretching and strengthening program", "Groin strapping (usually done by physio or athletic therapist)"]}
            message={
                <p>
                <b>Stop playing hockey: </b> This will exacerbate the strain <br></br>
                <b>Apply ice to groin area: </b> the POLICE principle (protection, optimal loading, ice compression, and elevation) is recommended<br></br>
                <b>Referral to rehabilitation specialist for gradual stretching and strengthening program: </b> Interdisciplinary care is recommended<br></br>
                <b>Groin strapping: </b> This would be helpful during RTP protocol before games.<a href="https://www.youtube.com/watch?v=WvPclt4iYzM">Link</a><br></br>
                </p>
            } />
            </div>
            
        )
    }
    if (page == 4){
        return(
            <div>
                <RadioQuiz title = "What most important criteria would you use for return to play?" answerOptions = {[
             {value: 1, answerText: "After 5 weeks of rest"},
             {value: 2, answerText: "80% Adductor strength compared to the opposite side"},
             {value: 3, answerText: "When the patient can run without pain"},
              {value: 4, answerText: "When the patient feels ready"},
             ]}
            correct={2}
            message={<p>
               This is the most important criteria for return to play.
</p>
            }
    />
            </div>
        )
    }
   
    if (page == 5){
        return(
            <div>
            <RadioQuiz title = "What suggestions can you give to Erik to reduce his risk of adductor strains in future hockey seasons?" answerOptions = {[
         {value: 1, answerText: "Practice proper skating technique"},
         {value: 2, answerText: "Don’t skip the warm-up"},
         {value: 3, answerText: "Both A and B"},
          {value: 4, answerText: "None of the above, there is no way to reduce the risk of adductor strains."},
         ]}
        correct={3}
        message={<p>
           Both proper skating technique and ensuring that muscles are adequately warmed up will decrease the risk of a future adductor strain
</p>
        }
/>
        </div>
        )
    }
    if(page == 6){
        return(
            <div>
                <ConclusionPage title = "Case Completed" content={
                    <p>
                        You have completed Hip Module Case 3, you may now proceed to the Post-Module Quiz.
                    </p>
                }
                    
                    text="Post-Module Quiz" URL="/"/>
            </div>
        )
    }
    
}
export default HipCase2Content;