import React from "react";
import NavBar from '../Navigation Bar/NavBar';
import './PhysicalExam.css';

export function PhysicalExam (props){
    return(
        <div className="background">
            <div><NavBar/></div>

            <div class="backButton">
                <a href="/" > &#8810; Back to Homepage</a>
            </div>

            <section id="physicalEx">
                <h1>Knee Physical Exam</h1>
            </section>

            <section id="position">
                <h2 className="titleH">Position</h2>
                <p className="paragraphP">Patient lying supine on bed or standing.</p>
            </section>

            <section id="draping">
                <h2 className="titleH">Draping</h2>
                <p className="paragraphP">Exposed from mid-thigh downward to feet with ground covered.</p>
            </section>

            <section id="inspection">
                <h2 className="titleH">Inspection (from front, side and back)</h2>
                <p className="paragraphP">
                1. Gait <br></br><br></br> <blockquote>
                    a. Ask the patient to walk the length of the room and back<br></br><br></br>
                    b. Antalgic gait (limping): patient minimizes the amount of time that the affected leg bears weight<br></br><br></br>
                    c. Assess gait cycle, range of motion, ability to turn, and height of steps.</blockquote>
                2. Assess symmetry: compare knees to joints above and below and to the other side<br></br><br></br>
                3. Assess muscle bulk<br></br><br></br>
                4. Look for varus (“bowleg deformity or genu varum) and valgus (knock-knee deformity or genu valgum) <br></br>deformity 
                (best seen from the front with the patient standing), squinting patella, pes planus (flatfoot), pes <br></br>cavus (high arch) and pronation of feet. <br></br><br></br>
                5. Assess flexion (genu procurvatum) and extension (genu recurvatum) abnormalities from the lateral aspect of the knee.<br></br><br></br>
                6. Have patient lay supine on examining table for rest of examination<br></br><br></br>
                7. SEADS<br></br><br></br> <blockquote>
                    a. 	Swelling: loss of concavities beside the patella, baker’s cyst in the popliteal fossa<br></br><br></br>
                    b. 	Erythema<br></br><br></br>
                    c. 	Atrophy: Quadriceps muscle, specifically the vastus medialis obliquus (VMO). Assess posterior aspect <br></br>of the knee (e.g. atrophy may be seen in disuse atrophy or lower motor neuron lesion).<br></br><br></br>
                    d. 	Deformities: Done previously while the patient was standing. <br></br><br></br>
                    e. 	Skin changes (e.g. scars, bruising, psoriasis plaques)</blockquote>

                </p>
            </section>

            <section id="inspectionKnee">
                <h2 className="titleH">Inspection of the knee</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TsN1QoSMZ_Q?start=55" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>

            <section id="quadriceps">
                <h2 className="titleH">Quadriceps Atrophy on Inspection</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UIT9OGDB1wY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        </div>
    )
}