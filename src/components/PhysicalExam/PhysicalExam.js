import React from "react";
import NavBar from '../Navigation Bar/NavBar';
import './PhysicalExam.css';
import vidPlaceholder from './placeholderPic.jpeg';

export function PhysicalExam (props){
    return(
        <div className="background">
            <div><NavBar/></div>

            <div class="backButton">
                <a href="/" > &#8810; Back to Homepage</a>
            </div>

            <div id="indexId" className="indexId">
                <ul>
                    <li><a href="#physicalEx">Knee Physical Exam</a></li>
                    <li><a href="#inspection">Inspection (from front, side and back)</a></li>
                    <li><a href="#palpation">Palpatation</a></li>
                </ul>
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
                    1. Gait <br></br> <blockquote>
                        a. Ask the patient to walk the length of the room and back<br></br><br></br>
                        b. Antalgic gait (limping): patient minimizes the amount of time that the affected leg bears weight<br></br><br></br>
                        c. Assess gait cycle, range of motion, ability to turn, and height of steps.</blockquote>
                    2. Assess symmetry: compare knees to joints above and below and to the other side<br></br><br></br>
                    3. Assess muscle bulk<br></br><br></br>
                    4. Look for varus (“bowleg deformity or genu varum) and valgus (knock-knee deformity or genu valgum) <br></br>deformity 
                    (best seen from the front with the patient standing), squinting patella, pes planus (flatfoot), pes <br></br>cavus (high arch) and pronation of feet. <br></br><br></br>
                    5. Assess flexion (genu procurvatum) and extension (genu recurvatum) abnormalities from the lateral aspect of the knee.<br></br><br></br>
                    6. Have patient lay supine on examining table for rest of examination<br></br><br></br>
                    7. SEADS<br></br> <blockquote>
                        a. 	Swelling: loss of concavities beside the patella, baker’s cyst in the popliteal fossa<br></br><br></br>
                        b. 	Erythema<br></br><br></br>
                        c. 	Atrophy: Quadriceps muscle, specifically the vastus medialis obliquus (VMO). Assess posterior aspect <br></br>of the knee (e.g. atrophy may be seen in disuse atrophy or lower motor neuron lesion).<br></br><br></br>
                        d. 	Deformities: Done previously while the patient was standing. <br></br><br></br>
                        e. 	Skin changes (e.g. scars, bruising, psoriasis plaques)</blockquote>
                </p>
            </section>

            <section id="inspectionKnee">
                <h2 className="subtitleH">Inspection of the knee</h2>
                <img className="vidPlaceholder" src={vidPlaceholder} alt="vid-Placeholder"></img>
                {/* <div id="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TsN1QoSMZ_Q?start=55" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> */}
            </section>

            <section id="quadriceps">
                <h2 className="subtitleH">Quadriceps Atrophy on Inspection</h2>
                <img className="vidPlaceholder" src={vidPlaceholder} alt="vid-Placeholder"></img>
            </section>

            <section id="palpation">
            <h2 className="titleH">Palpation:</h2>
                <p className="paragraphP">
                1. Flex the patient’s knee to 90° with their foot resting on the examination table. <br></br><br></br>
                2. Palpate the joint line for tenderness, starting at the tibial tuberosity and patellar tendon and then moving medially and laterally to the two femoral condyles and fibular head.<br></br><br></br>
                3. Palpate quadriceps and pes anserine (hamstring) tendons.<br></br><br></br>
                4. Palpate over the patella and compare the temperature to the leg; the knee should be slightly cooler. Assess facets, movement and apprehension of the patella.<br></br>
                <blockquote>a. Patellofemoral tracking is assessed by observing the patella for smooth motion while the patient contracts the quadriceps muscle. <br></br><br></br>
                b. Patellar Apprehension Test: With the patient’s knee fully extended lateral pressure is applied to the patella whilst simultaneously slowly flexing the knee joint. The presence of active resistance from the patient is suggestive of previous patellar instability and dislocation (as the patient is apprehensive about it recurring).</blockquote>
                5. Palpate suprapatellar, prepatellar, infrapatellar bursae for swelling/tenderness.<br></br><br></br>
                6. Palpate the popliteal fossa, looking for Popliteal/Baker’s cyst. A pulsatile mass may represent a popliteal aneurysm.<br></br><br></br>
                7. Palpate MCL, LCL and IT band insertion for swelling/tenderness. <br></br><br></br>
                8. Position patient supine with knee extended to assess for knee effusion: <br></br>
                <blockquote>a. Fluid wave or bulge sign: Useful to identify small joint effusions<br></br>
                <blockquote>i. Position the patient supine with the leg relaxed and knee extended.<br></br><br></br>
                ii. Bulge Sign: “Milk” fluid from medial pocket of joint to suprapatellar pouch. Then stroke the lateral fossa, looking for a bulge or ripple on the medial side of the joint. This indicates presence of an effusion as any excess fluid moves medially. </blockquote>
                b. Patellar Tap/Ballotment Test: It requires moderate to large joint effusion
                <blockquote>i. With the patient’s knee fully extended, empty the suprapatellar pouch by sliding your hand down the thigh to the upper border of the patella.<br></br><br></br>
                ii. Keep your hand in position and use your other hand to press downwards on the patella with your fingertips.<br></br><br></br>
                iii. If there is fluid present you will feel a distinct tap as the patella bumps against the femur.</blockquote>
                </blockquote>
                </p>
            </section>

            <section id="palpationKnee">
                <h2 className="subtitleH">Palpation of the Knee</h2>
                <img className="vidPlaceholder" src={vidPlaceholder} alt="vid-Placeholder"></img>
            </section>

            <section>
                <h2 className="subtitleH">Palpation with Joint Pathology</h2>
                <img className="vidPlaceholder" src={vidPlaceholder} alt="vid-Placeholder"></img>
            </section>

            <section>
                <h2 className="subtitleH">Fluid Wave or Bulge Sign</h2>
                <img className="vidPlaceholder" src={vidPlaceholder} alt="vid-Placeholder"></img>
            </section>

            <section>
                <h2 className="subtitleH">Positive Fluid Wave or Bulge Sign</h2>
                <img className="vidPlaceholder" src={vidPlaceholder} alt="vid-Placeholder"></img>
            </section>

            <section>
                <h2 className="subtitleH">Patellar Tap or Ballotment Test</h2>
                <img className="vidPlaceholder" src={vidPlaceholder} alt="vid-Placeholder"></img>
            </section>
        </div>
    ) 
}