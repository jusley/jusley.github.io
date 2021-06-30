import React from "react";
import Placeholder from '../placeholder.jpeg';
import ImagePage from '../ImagePage';
import TextPage from '../TextPage';
import RadioQuiz from '../RadioQuiz';
import CheckBoxQuiz from '../CheckBoxQuiz';
import { Button, Radio, Input, Space } from 'antd';
import { selectPage} from "./kneeModSlice";
import ConclusionPage from '../ConclusionPage';
import { useSelector, useDispatch } from 'react-redux';
import { removeNext,increament,hide } from "./kneeModSlice";

const Case3Content = (props)=>{
    const dispatch = useDispatch();
    const page = useSelector(selectPage)

    if (page == 0){
        return(
            <div>
                <RadioQuiz title="What is the most likely diagnosis?" answerOptions ={[
            {value: 1, answerText: "Medial meniscus tear", isCorrect: false},
            {value: 2, answerText: "MCL tear", isCorrect: true},
            {value: 3, answerText: "Patellar tendinopathy", isCorrect: false},
            {value: 4, answerText: "ACL tear", isCorrect: false}
]}
correct={1}
message={<p>The most likely diagnosis is A, Medial Meniscus Tear. <br></br><br></br>

    <b>Clinical features:</b> There are two main types of meniscus tears, acute and degenerative. In John’s case, given the acute onset of his symptoms, and a preceding event, we are more concerned of an acute etiology. In patients who are older with most insidious symptoms, a degenerative tear is likely suspected. It is important to note that in knees of patients &gt;50  years old with OA, surgery is no longer indicated in degenerative tears. 
    <br></br>Meniscal tears are more common in ACL deficient knees
    </p> 
    }
/>
            </div>
        )
    }

    if (page == 1){
        return(
            <div>
                <TextPage title= "Examination" content={<p>
                    <h1>Special Tests For Identifying Meniscal Tears</h1> <br></br>
                    <iframe width='420' height='315' src="https://www.youtube.com/embed/lwDFPAyGGgI"></iframe> <br></br>
                    The <b>McMurray test</b> is performed by flexing the patient's knee. To assess for medial meniscus, while palpating the joint line, the leg is externally rotated and extended. To assess for lateral meniscus, the leg is internally rotated and extended.

                    <br></br><br></br>Positive test - palpable pop/click or pain

                    </p>
                } />
 
            </div>
        )
    }
    if (page == 2){
        return(
            <div>
                <TextPage title= "Examination" content={<p>
                    <h1>Special Tests For Identifying Meniscal Tears</h1> <br></br>
                    <iframe width='420' height='315' src="https://www.youtube.com/embed/ebraZ4jM36A"></iframe> <br></br>
                    The <b>Thessaly test</b> is performed by having the patient stand on one leg. The leg is then flexed 20 degrees. They will then rotate over the tibia internally and externally. 

                    <br></br><br></br>Positive test - complaining of pain in joint line during rotation

                    <br></br><br></br>Was thought to be more accurate than McMurray and Apley, however new research has proved otherwise. History features are the most important aspect of diagnosing suspected meniscal tear.

                    <br></br><br></br>Sens 64%, Spec 53%


                    </p>
                } />
 
            </div>
            
        )
    }
    if (page == 3){
        return(
            <div>
                <TextPage title= "Examination" content={<p>
                    <h1>Special Tests For Identifying Meniscal Tears</h1> <br></br>
                    <iframe width='420' height='315' src="https://www.youtube.com/embed/_UU875CKpAU?list=PLK4gDzAV3RHKHkA1-42qH0-eUBFLhrnda"></iframe> <br></br>
                    The <b>Apley test</b> is completed by having the patient in prone position. You will tend bend the knee to 90 degrees. You will then provide axial compression while rotating the tibia right and left.
                    <br></br><br></br>Positive test - pain with pressure (suggests a meniscal injury) or popping/clicking
                    </p>
                } />
 
            </div>
        )
    }
    if (page == 4){
        return(
            <div>
                <RadioQuiz title = "What investigation would you order if you are suspecting a meniscal tear?" 
   
    answerOptions={[
        {value: 1, answerText: "Bone Scan", isCorrect: false},
        {value: 2, answerText: "Knee Ultrasound", isCorrect: false},
        {value: 3, answerText: "MRI knee", isCorrect: true},
        {value: 4, answerText: "Standing AP & Lateral X-ray right knee", isCorrect: false}
    ]}
    correct={3}
    message={
        <p>
            C: An MRI is the goal standard test to diagnose meniscus pathology since its an intra-articular finding. 
            <br></br> This will be required to identify the type of tear and plan for surgery. Indications for an MRI include: 
            <br></br>acute event with clear indications for meniscal injury in young patients, those with mechanical symptoms (catching, locking), and in those where an acute ligamentous injury (ACL/PCL) is also suspected 
        </p>
    }
    />
            </div>
        )
    }
    if (page == 5){
        return(
            <div>
                <TextPage title="MRI Findings" content={
    <p>
    John receives his MRI. On his report you note an oblique tear of his medial meniscus. His ACL, PCL, MCL, and LCL are in tact. <br></br><br></br>

    John asks you how we should go about treating his medial meniscus tear.

    </p>
}/>
            </div>
        )
    }

    if (page == 6){
        return(
            <div>
                <ConclusionPage title="Conclusion" content={
    <p>
    Despite trying conservative measures, John still reports catching, clicking, and continued swelling in his knee. He elects to pursue surgery. <br></br><br></br>

    After surgery, he completes gradually rehabilitation and is eventually able to return to his daily activities. 


    </p>
}/>
            </div>
        )
    }
    
}
export default Case3Content;