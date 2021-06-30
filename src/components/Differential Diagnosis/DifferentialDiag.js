import React from "react";
import NavBar from '../Navigation Bar/NavBar';
import './DifferentialDiag.css';

export function DifferentialDiag (props){
    return(
        
        <div className="page-content">
            <div><NavBar/></div>

            <div class="back-button">
                <a href="/" > &#8810; Back to Homepage</a>
            </div>

            <table>
                <tr>
                    <th>Chief Complaint</th>
                    <th>Differential Diagnosis</th> 
                    <th>Distinguishing Features</th>
                    <th>Investigations</th>
                    <th>Treatment</th>
                </tr>
                <tr>
                    <td rowspan="2">Acute traumatic knee pain with <br></br>significant knee swelling</td>
                    <td>ACL tear</td>
                    <td>
                        <ol>
                        <li>History:</li>
                        a. Sudden deceleration <br></br>
                        b. Hyperextension and internal rotation of tibia on femur (i.e. plant and turn)<br></br>
                        <ol>
                        i. Usually non-contact<br></br>
                        ii. Landed awkwardly</ol>
                        <li>Exam:</li>
                        a. Large effusion (hemarthrosis)<br></br>
                            b. Quadriceps avoidance gait (does not actively extend knee)<br></br>
                            c. Posterolateral joint line tenderness<br></br>
                            d. Positive Lachman<br></br>
                            e. Positive pivot shift<br></br>
                            f. Positive anterior drawer
                        <li> Evaluate for meniscus or <br></br>concomitant ligamentous injuries <br></br>with McMurray's, varus/valgus <br></br>stress tests<br></br></li>
                        <li>Triad - ACL, MCL, medial<br></br> meniscus injury</li>
                        </ol>
                    </td>
                    <td>
                        <ol>
                        <li>X-ray to rule out fracture</li>
                        a. Second fracture X-ray is pathognomonic for a tear
                        <li>MRI to assess tear if surgery is considered</li>
                        </ol>
                    </td>
                    <td>
                        <ol>
                        <li>RICE<br></br></li>
                        <li>Early physio to achieve full ROM and strength<br></br></li>
                        <li>Referral to othopedic surgery to discuss repair</li>
                        </ol>
                    </td>
                </tr>
                <tr>
                    <td>Large meniscus tear</td>
                    <td>
                        <ol>
                        <li>History: </li>
                        a. Pivoting mechanism with knee partly flexed (e.g. stepping down, twisting)<br></br>
                        b. Immediate pain localizing to medial or lateral side<br></br>
                        c. Knee instability<br></br>
                        d. Locking, popping and clicking, especially with squatting and pivoting<br></br>
                        e. Delayed or intermittent swelling
                        <li>Exam: </li>
                        a. Moderate effusion<br></br>
                        b. Increased apin with squatting and/or twisting<br></br>
                        c. Jointline tenderness<br></br>
                        d. Loss of smooth passive flexion and extension<br></br>
                        e. May not be able to achieve full active flexion or extension<br></br>
                        f. Positive Thessaly<br></br>
                        g. Positive Apley's<br></br>
                        h. Positive McMurray
                        </ol>
                    </td>
                    <td>
                        <ol>
                            <li>X-ray to rule out fracture</li>
                            <li>X-ray knee series in patients &#x3e; 50 to assess for OA</li>
                            <li>MRI knee to assess tear if surgery is being considered</li>
                        </ol>
                    </td>
                    <td>
                        <ol>
                            <li>RICE</li>
                            <li>Physio</li>
                            <li>If young and healthy with mild/no OA, referral to orthopedics to discuss surgery</li>
                            <li>If &#x3e; 50 yrs, assess for OA before referral to surgeon (those with extensive OA would not benefit from surgery)</li>
                        </ol>
                    </td>
                </tr>
                
            </table>
            
        </div>
    )
}