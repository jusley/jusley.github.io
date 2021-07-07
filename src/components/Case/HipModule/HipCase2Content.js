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

const HipCase2Content = (props)=>{
    const dispatch = useDispatch();
    const page = useSelector(selectPage)

    function on_Click(e){
        dispatch(increament())
    }
    if (page == 0){
        return(
            <div> 
                <TextPage title="Please view these physical exam videos" content={<p>
                    <iframe width="420" height="315" src="https://www.youtube.com/embed/JWQ_a-k8qqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br></br><br></br>
                    <b>OBER’s Test (0.49-2.13 min)</b> <br></br>
                    Assess for tightness in tensor fasciae latae.<br></br>
                    Extend the hip and slowly lower the leg toward the table until motion is restricted<br></br><br></br><br></br>
                    <iframe width="420" height="315" src="https://www.youtube.com/embed/yluzGVcWEsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br></br><br></br>
                    <b>FABER Test (4.45-5.07 min)</b><br></br>
                    Assess for hip pain.<br></br>
                    Flex, abduct and externally rotate at the hip. Then place pressure at the knee.
                </p>}
/>
            </div>
        )
    }
    if (page == 1){
        return(
            <div>
                <RadioQuiz title="What is the most likely diagnosis?" answerOptions={[
            {value: 1, answerText: "Snapping hip"},
            {value: 2, answerText: "Greater trochanteric pain syndrome"},
            {value: 3, answerText: "Meralgia paresthetica (entrapment of the lateral femoral cutaneous nerve)"},
             {value: 4, answerText: "Acetabular labral tear"},
]}
correct={2}
message={
   <p>   Patients commonly present with lateral hip pain, point tenderness over greater trochanter with a positive FABER test. 
   </p>
}
/>
            </div>
        )
    }
    if (page == 2){
        return(
            <div> 
                <TextPage title="What is Greater Trochanteric Pain Syndrome?" content={<p>
                    Greater Trochanteric Pain Syndrome (GTPS) is a pain syndrome involving the structures of the lateral hip. <br></br> <br></br>
                    This condition was previously called trochanteric bursitis. However, only a small percentage of people with this condition have bursal inflammation<br></br> <br></br>
                    The current understanding is that GTPS occurs due to tendinopathy of the gluteus medius and/or minimus. <br></br>
                    <br></br> This may be contributed to by repetitive friction between the greater trochanter and iliotibial band which leads to microtrauma of the gluteus medius and/or minimus at their insertion site located at the greater trochanter. <br></br>
                    <br></br><b>Risk factors include: </b><br></br>
                    <li>Female</li>
                    <li>Age 40-60</li>
                    <li>Repetitive activity and manual overload</li>
                    <li>Abnnormal hip mechanics</li>
                    <li>Diabetes</li>
                    <li>Collagen vascular disorders</li>
                    <li>Seronegative spondyloarthritides</li> <br></br>
                    <b>Patients commonly present with:</b> <br></br>
                    <li>Lateral hip pain</li>
                    <li>Point tenderness over the greater trochanter</li>
                    <li>Positive FABER test</li>
                </p>}
/>
            </div>
        )
    }
    if (page == 3){
        return(
            <div>
                <RadioQuiz title= "Based on her history and physical exam findings, what investigations should you order next?" answerOptions = {[
            {value: 1, answerText: "Weight-bearing AP pelvis and lateral hip", isCorrect: true},
            {value: 2, answerText: "Ultrasound of the lateral hip", isCorrect: false},
            {value: 3, answerText: "MRI of the hip", isCorrect: true},
            {value: 4, answerText: "None", isCorrect: true},
            
        ]}
            correct={4}
            message={
                <p>
                   GTPS is a clinical diagnosis and imaging is not required in most cases, unless you are suspecting an alternative pathology. 
                </p>
            } />
            </div>
            
        )
    }
    if (page == 4){
        return(
            <div>
                <CheckBoxQuiz title = "Which of the following can be considered first line management for Greater Trochanteric Pain Syndrome? " answerOptions = {[
             {value: 1, answerText: "Bursectomy by an orthopedic surgeon"},
             {value: 2, answerText: "Corticosteroid injection into the bursa"},
             {value: 3, answerText: "Stretching ITB"},
              {value: 4, answerText: "Strengthening of gluteus medius"},
              {value: 5, answerText:"Ambulation with cane or walking pole"},
              {value: 6, answerText:"Rest and ice"},
              {value: 7, answerText:"Physiotherapy"}
             ]}
            correct={["Stretching ITB", "Strengthening of gluteus medius", "Ambulation with cane or walking pole", "Rest and ice", "Physiotherapy"]}
            message={<p>
                <b>Stretching ITB: </b> This can reduce tightness of the ITB <br></br>
                <b>Strengthening of gluteus medius: </b> This can reduce pain over the greater trochanter<br></br>
                <b>Ambulation with cane or walking pole: </b> This can improve the patient’s ability to ambulate<br></br>
                <b>Rest and ice: </b> This can reduce pain over the greater trochanter<br></br>
                <b>Physiotherapy: </b> The physical therapist can support the patient with exercises to reduce hip pain, strengthen gluteal muscles, and stretch the ITB. Note that it often takes 6-8 weeks of therapy before a significant improvement can be felt.

</p>
            }
    />
            </div>
        )
    }
   
    if (page == 5){
        return(
            <div> 
                <TextPage title="When should you consider cortisone injection?" content={<p>
                    A study in 2018 comparing education plus exercise vs. corticosteroid injection for GTPS showed that corticosteroid injection is inferior to exercise in terms of long term outcome. 
                    <br></br>The primary outcomes were mean pain intensity and global rating of change. <br></br><br></br>
                    In general cortisone injection should be considered in the following scenarios: <br></br>
                    <li>When there is intractable pain that limits the ability to participate in physiotherapy</li>
                    <li>As an adjunct to physiotherapy in patients who continue to experience pain despite exercise therapy</li>
                    <li>In the frail patient who is unable to participate in physiotherapy but who would benefit from pain control</li> <br></br> <br></br>

                    <small>Reference: https://www.bmj.com/content/361/bmj.k1662/related</small>


                </p>}
/>
            </div>
        )
    }
    if(page == 6){
        return(
            <div>
                <ConclusionPage title = "Additional Resources" content={
                    <p>
                        Ganderton C, Pizzari T, Cook J, Semciw A. Gluteus minimus and gluteus medius muscle activity during common rehabilitation exercises in healthy postmenopausal women. journal of orthopaedic and sports physical therapy. 2017;47(12):914-922
                        <li>Please review the appendix on the last two pages of the PDF for exercises that strengthen the gluteus medius and minimus</li>
                        <li>Note the clamshell exercise has the least amount of gluteus medius activation</li> <br></br><br></br>
                        For additional hip adductor and abductor strengthening videos, please click <a href="https://www.youtube.com/watch?v=B0Nvn_Xcs3I" className="linkStyle">here</a> and <a href="https://www.youtube.com/watch?v=avgynWnxTdk" className="linkStyle">here.</a> <br></br>
                        <a href="https://www.bmj.com/content/bmj/suppl/2018/05/02/bmj.k1662.DC1/melr042341.ww.pdf" className="linkStyle">Here</a> is another protocol for exercises for GTPS. <br></br>
                        <a href="https://www.youtube.com/watch?v=wzDoSQ8-GWY" className="linkStyle">Iliotibial band stretch, standing:</a><br></br>
                        <li>Cross your uninjured leg in front of the other leg and bend down and reach toward the inside of your back foot. Do not bend your knees. Hold this position for 15 to 30 seconds. Return to the starting position. Repeat 3 times.</li>
                        <br></br><br></br>
                        <a href="https://www.youtube.com/watch?v=OqpXCOGDjAI" className="linkStyle">Iliotibial band stretch, side-leaning:</a> <br></br>
                        <li>Stand sideways near a wall with your injured side closest to the wall. Place a hand on the wall for support. Cross the leg farther from the wall over the other leg. Keep the foot closest to the wall flat on the floor. Lean your hips into the wall. Hold the stretch for 15 to 30 seconds. Repeat 3 times.</li>
                    </p>
                }
                    
                    text="Next Module" URL="/Hip3Start"/>
            </div>
        )
    }
    
}
export default HipCase2Content;