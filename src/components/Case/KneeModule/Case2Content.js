import React from "react";
import Placeholder from '../placeholder.jpeg';
import ConclusionPage from '../ConclusionPage';
import RadioQuiz from '../RadioQuiz';
import CheckBoxQuiz from '../CheckBoxQuiz';
import { Button} from 'antd';
import TextPage from '../TextPage';
import { selectNextPage,selectPage,selectNextOrNot } from "./kneeModSlice";
import { useSelector, useDispatch } from 'react-redux';
import { removeNext,increament,hide } from "./kneeModSlice";

const Case2Content = (props)=>{
    const dispatch = useDispatch();
    const page = useSelector(selectPage)

    function on_Click(e){
        dispatch(increament())
    }
    if (page == 0){
        return(
            <div>
                <CheckBoxQuiz title="What are the 3 acute traumatic knee injuries that cause large effusions?" answerOptions ={[
            {value: 1, answerText: "ACL Tear", isCorrect: true},
            {value: 2, answerText: "MCL Tear", isCorrect: false},
            {value: 3, answerText: "PCL Tear", isCorrect: false},
            {value: 4, answerText: "Patellar dislocation", isCorrect: true},
            {value: 5, answerText: "Intra-articular fracture", isCorrect: true},
            {value: 6, answerText: "Fibular head or neck fracture", isCorrect: false}
        ]}
            correct={["ACL Tear", "Patellar dislocation", "Intra-articular fracture"]}

message={<p>

        ACL tear, patellar dislocation and intra-articular fracture are the 3 acute traumatic knee injuries that cause LARGE effusions. <br></br>
        2: MCL tear- there may be soft tissue swelling, but there should be limited or absent effusion<br></br>
        3: PCL tear - moderate effusion<br></br>
        6: Fibular head or neck fracture - there may be swelling over the area of fracture, but there should be limited or absent joint effusion <br></br> <br></br>
        See here for more details on these diagnoses: <a href="/DifferentialDiag"></a>
</p>
    }
/>
            </div>
        )
    }
    if (page == 1){
        return(
            <div>
                <CheckBoxQuiz title="What are the 2 traumatic causes of a moderate effusion?" answerOptions={[
            {value: 1, answerText: "PCL Tear", isCorrect: false},
            {value: 2, answerText: "MCL Tear", isCorrect: false},
            {value: 3, answerText: "Meniscus Tear", isCorrect: false},
             {value: 4, answerText: "Partial ACL Tear", isCorrect: true}
]}
correct={["PCL Tear", "Meniscus Tear"]}
message={
   <p> PCL tear and meniscus tear are the 2 traumatic causes of a moderate effusion.
   2: MCL tear- limited or absent swelling
   4: Partial ACL tear- limited or absent swelling
   See differential diagnosis chart for knee <a href='/DifferentialDiag'>here</a>.
   </p>
}
/>
            </div>
        )
    }
    if (page == 2){
        return(
            <div>
                <RadioQuiz title= "What is the most-likely diagnosis and which patient population is typically most at risk of non-contact ACL injuries?" answerOptions = {[
            {value: 1, answerText: "ACL Tear and female athletes involved in pivoting sports"},
            {value: 2, answerText: "ACL Tear and male athletes involved in pivoting sports"},
            {value: 3, answerText: "PCL Tear and female athletes involved in pivoting sports"},
            {value: 4, answerText: "PCL tear and male athletes involved in pivoting sports"}
 ]} 
        correct={1}
        message={<p>
            The correct answer is an ACL tear and female athletes involved in pivoting sports. <br></br><br></br>

            ACL Tear: Plant and turn mechanism, unable to weight bear right away, immediate knee pain and swelling. See <a href='/DifferentialDiag'>here</a> for more details
            Overall, female athletes have the highest rates of ACL tears, as women engaged in pivoting sports sustain ACL tears at significantly higher rates than men participating in the same activity. It remains unclear what factors are responsible. Researchers have proposed several explanations to account for this disparity, including:
            <li>Quadriceps-dominant deceleration (and hamstring under-recruitment and weakness)</li>
            <li>Increased valgus knee angulation with pivoting, deceleration, or landing</li>
            <li> Effects of estrogen (on ligament laxity)</li>
            <li>Discrepancies in Q angle and bone length
                    <li>Recall: The <a href='https://www.youtube.com/watch?v=WjF7bV_eRYs'>Q angle</a> is made by drawing a line from the anterior superior iliac spine to the patella and a second line from the patella to the tibial tubercle. The relatively wide pelvis and short femur of women creates a larger Q angle.</li>
                    </li>
            <li>Decreased intercondylar notch width</li>
            <br></br>Note: A PCL tear occurs from posterior forces on tibia with a flexed knee, non-contact hyperflexion with a plantar-flexed foot, or hyperextension injury. It causes a moderate effusion. 
</p>
        }
 
 />
 <Button  onClick={on_Click} className="submitButton">Next</Button>
            </div>
        )
    }
    if (page == 3){
        return(
            <div>
                <RadioQuiz title= "You walk in to assess this patient. What is the best physical exam test to assess the ACL?" answerOptions = {[
            {value: 1, answerText: "Anterior Drawer", isCorrect: true},
            {value: 2, answerText: "Pivot Shift", isCorrect: false},
            {value: 3, answerText: "Lachman’s Test", isCorrect: true}]}
            correct={3}
            message={
                <p>
                    The best ACL test is the Lachman’s Test.

                    Recall the physical exam tests for the ACL: 
                    <a href='https://www.youtube.com/watch?v=CQ4t_m4VQ7Y&list=PLK4gDzAV3RHKHkA1-42qH0-eUBFLhrnda&index=9'>Anterior drawer</a>: Sens 48% Spec 87% - Performed at 90 degrees knee flexion but lacks sufficient sensitivity.
                    <a href='https://www.youtube.com/watch?v=2TPfLOcxbTI'>Pivot shift</a>: Sens 61% Spec 97% - Easier to perform in a chronic injury. Note that this test is very specific, and a positive test indicates an ACL tear with high confidence. 
                    <a href='https://www.youtube.com/watch?v=ZvneZlW7O5s'>Lachman’s</a>: Sens 87% Spec 93%, LR (Likelihood Ratio) +42 – This is by far the best test when performed correctly at ~30 degrees of knee flexion with patient’s hamstring tendons fully relaxed.

                    See how to do these tests <a href='/History'>here</a> <br></br><br></br>

                    See positive results on these tests <a href='https://www.youtube.com/watch?v=vEQw-G1Vr18'>here</a> 


                </p>
            } />
            </div>
            
        )
    }
    if (page == 4){
        return(
            <div>
                <RadioQuiz title = "Is an x-ray indicated in this acute knee injury if Mike cannot weight bear in the ED?" answerOptions = {[
            {value: 1, answerText: "Yes", isCorrect: false},
            {value: 2, answerText:"No", isCorrect: false}
             ]}
            correct={1}
            message={<p>
                Yes, as he was not able to weight-bear immediately following the injury and in the ED.<br></br><br></br>

                Recall the <a href='https://www.mdcalc.com/ottawa-knee-rule'>Ottawa Knee Rules:</a> <br></br><br></br>

                Knee X-rays only required if one of the following conditions are met:<br></br>
                &ensp;   A)  Age 55 or older<br></br>
                &ensp;   B)  Tenderness at the fibular head<br></br>
                &ensp;   C)  Isolated tenderness of the patella<br></br>
                &ensp;   D)  Unable to flex knee to 90 degrees<br></br>
                &ensp;   E)  Inability to walk four weight-bearing steps immediately after the injury and in the emergency department<br></br><br></br>

                <b>Clinical Pearl:</b> If there is tibial plateau (medial or lateral) tenderness, make sure to order oblique views.

</p>
            }
    />
            </div>
        )
    }
    if (page == 5){
        return(
            <div>
                <RadioQuiz title = "What X-ray finding is pathognomonic for an ACL tear?" 
    
                answerOptions={[
                    {value: 1, answerText: "Deep sulcus (terminalis) sign", isCorrect: false},
                    {value: 2, answerText: "Segond fracture", isCorrect: false},
    ]}
    correct={2}
    message={
        <p>
            Segond avulsion fracture is pathognomonic for an ACL tear.<br></br>
            <img height='300' src={Placeholder}/><br></br>
            <small>Case courtesy of Dr Hani Makky Al Salam, <a href="https://radiopaedia.org/">Radiopaedia.org</a>. From the case <a href="https://radiopaedia.org/cases/10536">rID: 10536</a></small>
            <br></br>Explanation: The segond fracture is highly associated with ACL tears, however the exact pathology of this fracture is still debated. The postero-lateral subluxation of the knee occurs with an ACL tear. This may result in an avulsion fracture of lateral tibia due to traction on the lateral capsular ligament, fibres of the iliotibial tract (ITT) , the anterior oblique band (AOB), and/or the Anterolateral ligament (ALL).

            <br></br><br></br>Note: A deep sulcus (terminalis) sign can be seen in an ACL tear. This represents depression on the lateral femoral condyle at the terminal sulcus, a junction between the weight bearing tibial articular surface and the patellar articular surface of the femoral condyle. 
            <img height='300' src={Placeholder}/><br></br>
            <small> <br></br>
            Roberts CC, Towers JD, Spangehl MJ et-al. Advanced MR imaging of the cruciate ligaments. Radiol. Clin. North Am. 2007;45 (6): 1003-16, vi-vii. doi:10.1016/j.rcl.2007.08.007 - Pubmed citation
            <br></br>Bertrand Sonnery-Cottet, Matthew Daggett, Jean-Marie Fayard, Andrea Ferretti, Camilo Partezani Helito, Martin Lind, Edoardo Monaco, Vitor Barion Castro de Pádua, Mathieu Thaunat, Adrian Wilson, Stefano Zaffagnini, Jacco Zijl, Steven Claes. Anterolateral Ligament Expert Group consensus paper on the management of internal rotation and instability of the anterior cruciate ligament - deficient knee. (2017) Journal of Orthopaedics and Traumatology. 18 (2): 91. doi:10.1007/s10195-017-0449-8 - Pubmed</small>
 
        </p>
    }
    />
            </div>
        )
    }

    if (page == 6){
        return(
            <div>
                <CheckBoxQuiz title="What are the treatment options for an ACL tear? Select all that apply." answerOptions={[
            {value: 1, answerText: "Rest, ice, compression, elevation (RICE)", isCorrect: false},
            {value: 2, answerText: "Physiotherapy", isCorrect: false},
            {value: 3, answerText: "The use of an ACL brace", isCorrect: false},
            {value: 4, answerText: "Lifestyle modifications", isCorrect: true},
            {value: 5, answerText: "Ligament reconstruction", isCorrect: false}
        ]}
correct={["Rest, ice, compression, elevation (RICE)", "Physiotherapy", "The use of an ACL brace", "Lifestyle modifications", "Ligament reconstruction"]}
message={
   <p>

Treatment individualized to patient based on activity level, age, demands, and concomitant pathology.<br></br><br></br>

<b>If on field/court</b>, stop ongoing activities until diagnosis is clear. Once evaluated by trainer/physician, a compression-ice bandage should be applied to slow the bleeding into the joint, followed by RICE therapy (i.e. rest, ice, compression, elevation). The athlete should weightbearing as tolerated on crutches in the acute phase.

<br></br><br></br>Early physiotherapy is recommended for all patients regardless of whether they are surgical candidates. <br></br> <br></br>

<b>Non-operative treatment</b>: Physiotherapy and lifestyle modifications are key. <br></br>
<li>Indicated for low demand patients with decreased laxity and recreational athletes not participating in cutting/pivoting activities. Many low demand patients may achieve sufficient functional stability with conservative treatment, and will not require surgery.</li> 
<li>The patient is initially weightbearing as tolerated on crutches, followed with early ROM and strengthening (typically 3 months of supervised physiotherapy).</li>
<li>Custom made ACL braces may be helpful to provide some level of stability</li> <br></br>

Refer to orthopedic surgery for <b>operative treatment</b>: Ligament reconstruction <br></br>
<li>Indicated for those with a high demand lifestyle, e.g. younger, more active patients, children, and older active patients (age &gt;40 is not a contraindication if high demand athlete).</li>
<li>Early physiotherapy is recommended to achieve full ROM and improve strength (as many surgeons recommend delaying ligament reconstruction until the athlete has full ROM and no more than mild swelling).
<li>Lack of pre-operative motion is a risk factor for postoperative arthrofibrosis </li></li>


   </p>
}
/>
            </div>
        )
    }

    if (page == 7){
        return(
            <div>
                <ConclusionPage title="Further Resources:" content={
    <p>
    
    https://www.orthobullets.com/knee-and-sports/3008/acl-tear <br></br><br></br>
    
    https://orthoinfo.aaos.org/en/treatment/acl-injury-does-it-require-surgery/
    </p>
}/>
            </div>
        )
    }
    
}
export default Case2Content;