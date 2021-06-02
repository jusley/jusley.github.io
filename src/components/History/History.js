import React from "react";
import NavBar from '../Navigation Bar/NavBar';
import './History.css';
 
export function History (props){
   return(
       <div class="contents">
           
           <div><NavBar/></div>

                <div class="back">
                    <a href="/" > &#60; Back to Homepage</a>
                </div>
           
           

           <div id="menu-id" class="menu">
               <ul>
                    <li><a href="#history">History for Knee Pain</a></li>
                    <li><a href="#chief">Chief Complaint: Knee Pain</a></li>
                    <li><a href="#history-presenting">History of Presenting Illness</a>
                        <ul>
                            <li><a href="#mechanisms">Mechanisms of injury</a></li>
                            <li><a href="#pain">Pain characteristics ("OPQRST")</a></li>
                            <li><a href="#associated-symptoms">Associated symptoms</a></li>
                            <li><a href="#systemic-symptoms">Systemic symptoms</a></li>
                            <li><a href="#impact">Impact on function</a></li>
                        </ul>
                    </li>
                    <li><a href="#past-medical">Past Medical History</a></li>
                    <li><a href="#medications">Medications</a></li>
                    <li><a href="#social">Social History</a></li>
                    <li><a href="#family">Family History</a></li>
                    <li><a href="#review">Review of System</a></li>
                    <li><a href="#red-flags">Red Flags on History</a></li>
               </ul>
            </div>

            <section id="history">
                <h1>History for Knee Pain</h1>
            </section>

            <section id="chief">
                <h2>Chief Complaint: Knee Pain</h2>
                <p className="history-p">History can provide diagnostic clues to risk stratify patients! </p>
            </section>

            <section id="history-presenting">
                <h2>History of Presenting Illness</h2>
            </section>

            <section id="mechanisms">
                <p className="history-p">
                1. <strong>Mechanism of injury </strong> (e.g. direct blow vs. foot planted vs. decelerating or stopping suddenly vs. landing from a jump vs. twisting vs. hyperextension)
                Include ability to weight-bear following injury
                </p>
            </section>

            <section id="pain">
                <p className="history-p">
                2. <strong>Pain characteristics (“OPQRST”):</strong> <br></br>
                <blockquote>a. Onset (rapid vs. insidious)
                    <blockquote>i. Did pain begin following an acute traumatic event or is pain delayed post activity?
                <blockquote>1. Pain immediately following an injury is concerning for possible structural damage to the knee. <br></br>
                2. Delayed pain suggests tendon strains, cartilage contusions, or minor soft tissue tears. <br></br>
                3. Inquire about recent changes in activity level</blockquote>
                </blockquote></blockquote>
                
              
                <blockquote>b. Position (anterior vs. posterior, medial vs. lateral, localized vs diffuse/vague)
                <blockquote>i. Pinpoint localization is generally possible following trauma to a specific ligament, tendon, or other palpable anatomic structure.<br></br>
                ii. Pain described as diffuse or vague may be secondary to injury of an intra-articular structure, a rheumatologic or infectious process, or from referred pain.
                </blockquote>
                </blockquote>
                
                <blockquote>c. Provoking/alleviating factors <br></br>
                <blockquote>i. Is the pain associated with activity (e.g. new exercise regimen, change in previous training habits, day-to-day activity over the preceding few months)?<br></br>
                ii. Which specific activities trigger pain?<br></br>
                <blockquote>1. E.g. stairs, sitting, walking, turning, ballistic movements, squatting, or weight-bearing.</blockquote>
                iii. Pain associated with activity should lead to further inquiry about training equipment (e.g. shoes, braces), training volume (e.g. training days per week, duration of training sessions), intensity, and any recent changes in such parameters.<br></br>
                <blockquote>1. As an example, anterior knee pain associated with sprinting or jumping is a classic part of the history of patellar tendinopathy.</blockquote>
                iv. Does pain improve with rest? <br></br>
                v. What treatment modalities have you tried? Were they effective? If so, how?<br></br>
                <blockquote>1. Quality (e.g. dull, sharp, achy)<br></br>
                2. Radiation<br></br>
                3. Severity<br></br>
                4. Timing/Duration <br></br>
                <blockquote>a. Intermittent vs. constant</blockquote>
                </blockquote>
                </blockquote>
                </blockquote>
                </p>
            </section>

            <section id="associated-symptoms">
                <p className="history-p">
                3. <strong>Associated symptoms:</strong> <br></br>
                <blockquote>a. Mechanical symptoms (e.g. popping, locking, clicking, and knee “giving way” suggest a traumatic, structural injury)
                <blockquote>i. Often suggesting a meniscal tear <br></br>
                ii. A “popping” sensation suggests ligamentous injury, (most often ACL or PCL), possibly complete rupture (third degree).<br></br>
                iii. Episodes of knee “giving way” suggest knee instability. May indicate patellar subluxation or ligamentous rupture. 
                </blockquote>
                </blockquote>
                <blockquote>b. Joint effusion (timing post-injury and size)
                <blockquote>i. Within hours of the time of the injury suggests a hemarthrosis or lipohemarthrosis from an intra-articular structure with vascularity i.e. ACL/PCL, tibial plateau fracture, or osteochondral injury. <br></br>
                ii. Slower onset (24-36 hours) of a mild to moderate effusion is consistent with meniscus injury or ligamentous sprain.<br></br>
                iii. Recurrent knee effusion after activity is consistent with meniscal injury.<br></br>
                iv. Swelling or erythema occurring without trauma may indicate an infectious, rheumatologic, or crystal-induced condition and diagnostic arthrocentesis is often indicated.
                </blockquote>
                </blockquote>
                <blockquote>c. Neurological symptoms (e.g. muscle weakness, stiffness, numbness, tingling) <br></br>
                <blockquote>i. E.g. shooting pain down leg</blockquote></blockquote>

                <blockquote>d. Morning stiffness<br></br>
                <blockquote>i. If so, how long does it take for joint(s) to loosen up?</blockquote></blockquote>
                </p>
            </section>

            <section id="systemic-symptoms">
                <p className="history-p">
                4. <strong>Systemic symptoms</strong> <br></br>
                <blockquote>a. Constitutional and infectious symptoms (e.g. fever, chills, night sweats, fatigue, unintentional weight loss, or rash)<br></br><br></br>
                b. Is there other joint involvement?<br></br><br></br>
                c. If present, further investigation of infectious, autoimmune, or neoplastic causes is necessary.
                </blockquote>
                </p>
            </section>

            <section id="impact">
                <p className="history-p">
                5. <strong>Impact on function</strong>
                <blockquote>a. Effect on activity level, occupation, activities of daily living (ADLs) and instrumental activities of daily living (iADLs), etc.<br></br><br></br>
                b. Is there nighttime awakening due to pain?
                </blockquote>
                </p>
            </section>            
            
            <section id="past-medical">
                <h2>Past Medical History</h2>
                <p className="history-p"> 1. Determine if there is a history of injury or surgery to the affected knee. <br></br>
                    <blockquote> a. A past history of knee injury is the most accurate predictive risk factor for future knee injury, as a new injury could be a complication of an old or concurrent injury. 
                        <blockquote> i. For example, patellofemoral pain can develop in patients who alter their running gait due to discomfort from chronic Achilles tendinopathy. </blockquote></blockquote>
                    
                    <blockquote>b. Inquire about the type of injury, duration of disability, use of medications, and the rehabilitation program.</blockquote>

                    <blockquote>c. Prior surgical repairs can "wear out" or fail, leading to recurrence of the initial condition. </blockquote>
                    <blockquote>d. All patients with prior injury or surgery experience some degree of deconditioning while injured and recovering. This deconditioning, combined with poor or incomplete rehabilitation, predisposes to new injuries. </blockquote>
                
                    2. Is there a history of any systemic or auto-immune diseases, such as rheumatoid arthritis, gout, or pseudogout? <br></br> <br></br>
                    3. Ask about risk factors for tendon rupture: diabetes mellitus, rheumatoid arthritis, systemic lupus erythematosus, and renal failure (on dialysis).<br></br> <br></br>
                    4. Ask about cardiovascular disease risk factors (increases risk of popliteal artery aneurysm)<br></br> <br></br>
                    5. Ask about a history of tuberculosis, HIV, and cancer (for metastases).
                </p>
            </section>

            <section id="medications">
                <h2>Medications</h2>
                <p className="history-p">1. Inquire about recent fluoroquinolone use, especially in combination with oral glucocorticoids, as these are associated with tendinopathy and tendon rupture.<br></br> <br></br>
                    2. What have they tried for analgesia? (including dosages and duration)
                </p>
            </section>

            <section id="social">
                <h2>Social History</h2>
                <p className="history-p"> 1. Level of activity <br></br> <br></br>
                    2. Occupation- i.e. how injury may impact it. It may also contribute to injury.<br></br> <br></br>
                    3. Smoking- contributes to cardiovascular disease risk factors<br></br> <br></br>
                    4. Alcohol and protein consumption (gout risk factors)<br></br> <br></br>
                    5. Sexual history (for septic arthritis secondary to Neisseria gonorrhoeae): <br></br> 
                    <blockquote>a. # of partners in last year, # of partners in last 3 months, whether they use protection, past history of STI, cervical/urethral discharge or pain</blockquote>
                    </p>
            </section>

            <section id="family">
                <h2>Family History</h2>
                <p className="history-p">1. Osteoarthritis <br></br> <br></br>
                    2. Autoimmune disease
                    </p>
            </section>

            <section id="review">
                <h2>Review of System</h2>
                <p className="history-p">1. Dysuria and uveitis may suggest reactive arthritis<br></br> <br></br>
                    2. Extra-articular manifestations of rheumatologic disease: <br></br> <br></br>
                    <blockquote>a. Dermatological: skin nodules, skin rash, mouth ulcers <br></br> <br></br>
                    b. Cardiac: chest pain <br></br> <br></br>
                    c. Respiratory: difficulty breathing<br></br> <br></br>
                    d. Gastrointestinal: change in bowel movements<br></br> <br></br>
                    e. Genitourinary: cervicitis, urethritis<br></br> <br></br>
                    f. Ocular: eye pain, eye redness, dry eyes <br></br> <br></br>
                    g. Vascular: Raynaud’s phenomenon = discoloration of fingers/toes secondary to cold/emotional stress </blockquote>
                </p>
            </section>

            <section id="red-flags">
                <h2>Red Flags on History</h2>
                <p className="history-p"> 1. Significant trauma and not weight bearing <br></br> <br></br>
                    2. Hot/painful/swollen joint with little movement <br></br> <br></br>
                    3. Severe pain/progressive symptoms<br></br> <br></br>
                    4. Bony tenderness/swelling<br></br> <br></br>
                    5. Nocturnal pain<br></br> <br></br>
                    6. Systemic symptoms<br></br> <br></br>
                    7. History of TB, HIV, cancer
                </p>
            </section>

            {/* <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js"></script>
            <script src="history.js"></script> */}

            {/* const scroll = new SmoothScroll('.menu a[href*="#"]',{speed:800}); */}
            
       </div>
      
   )
}

