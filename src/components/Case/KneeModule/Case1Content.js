import React from "react";
import Placeholder from '../placeholder.jpeg';
import ImagePage from '../ImagePage';
import RadioQuiz from '../RadioQuiz';
import CheckBoxQuiz from '../CheckBoxQuiz';
import AnswerInfo from "../AnswerInfo";

export function Case1Content(props){

const Case1Data = [
    {
        type: "quiz",
        title: "What is the most likely diagnosis?",
        answerOptions: [
            {answerText: "Degenerative medial meniscus tear", isCorrect: false},
            {answerText: "Osteoarthritis", isCorrect: true},
            {answerText: "Patellar tendinopathy", isCorrect: false},
            {answerText: "Gout", isCorrect: false}

        ]
    },
    {
        type: "quiz",
        title: "Assuming osteoarthritis exists, which investigation would be most useful?",
        answerOptions: [
            {answerText: "Bone Scan", isCorrect: false},
            {answerText: "AP and Lateral X-Ray right knee", isCorrect: false},
            {answerText: "MRI right knee", isCorrect: false},
            {answerText: "Standing AP and Lateral X-Ray right knee", isCorrect: true}
        ]

    },
    {
        type: "image",
        title: "X-ray views to keep in mind",
        bodyElements: [
            {bodyImage: "Skyline view is best to assess for patellofemoral OA:", imageURL: "../placeholder.jpeg"},
            {bodyImage: "Tunnel view is best to look for loose bodies, femoral condyle lesions and lateral compartment OA:", imageURL: "../placeholder.jpeg"},
            {bodyImage: "Oblique view is best to assess suspected tibial plateau fracture:", imageURL: "../placeholder.jpeg"}
        ]
    },
    {
        type: "quiz",
        title: "Select all the radiographic findings seen in the X-ray.",
        answerOptions: [
            {answerText: "Medial tibiofemoral joint space narrowing", isCorrect: true},
            {answerText: "Lateral tibiofemoral joint space narrowing", isCorrect: false},
            {answerText: "Mariginal osteophytes", isCorrect: true},
            {answerText: "Subchondral cysts", isCorrect: true},
            {answerText: "Subchondral sclerosis", isCorrect: true}

        ]
    },
    {
        type: "quiz",
        title: "Select all management options for the condition depicted on the previous x-ray.",
        answerOptions: [
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
        ]
    },
    {
        type: "quiz",
        title: "Which type of brace would be most helpful for unicompartmental osteoarthritis?",
        answerOptions:[
            {answerText: "Air Cast Walker", isCorrect: false},
            {answerText: "Patellar brace", isCorrect: false},
            {answerText: "Unloader brace", isCorrect: true},
            {answerText: "ACL custom brace", isCorrect: false}
        ]
    },
    {
        type: "text",
        title: "Further rescources:",
    }
];

return(
    <>
<RadioQuiz title="What is the most likely diagnosis?" answerOptions ={[
    {value: 1, answerText: "Degenerative medial meniscus tear", isCorrect: false, message: "The patient population and chronic nature of this case is in keeping with a degenerative medial meniscus tear, however there are no mechanical symptoms,  no discomfort at rest, and Thessaly and McMurray's tests are negative. A degenerative medial meniscus tear develops over years and presents in older adults without a traumatic incident. Pain with pivoting or knee twisting and knee catching or locking would be more indicative of this diagnosis. Patients often complain of baseline discomfort. There will be medial joint line tenderness on exam, but no effusion. Knee ROM may be reduced and not smooth. A positive Thessaly and McMurray test would help differentiate this from other diagnoses. Note that a degenerative meniscus tear may co-exist with osteoarthritis."},
    {value: 2, answerText: "Osteoarthritis", isCorrect: true, message: ""},
    {value: 3, answerText: "Patellar tendinopathy", isCorrect: false},
    {value: 4, answerText: "Gout", isCorrect: false}

]}/>

<RadioQuiz title="Assuming osteoarthritis exists, which investigation would be most useful?" answerOptions={[
     {value: 1, answerText: "Bone Scan", isCorrect: false},
     {value: 2, answerText: "AP and Lateral X-Ray right knee", isCorrect: false},
     {value: 3, answerText: "MRI right knee", isCorrect: false},
     {value: 4, answerText: "Standing AP and Lateral X-Ray right knee", isCorrect: true}
]}/>

<ImagePage title= "X-ray views to keep in mind" bodyElements = {[
            {bodyImage: "Skyline view is best to assess for patellofemoral OA:", imageURL: Placeholder},
            {bodyImage: "Tunnel view is best to look for loose bodies, femoral condyle lesions and lateral compartment OA:", imageURL: Placeholder},
            {bodyImage: "Oblique view is best to assess suspected tibial plateau fracture:", imageURL: Placeholder}
 ]} />
<RadioQuiz title= "Select all the radiographic findings seen in the X-ray." answerOptions = {[
            {value: 1, answerText: "Medial tibiofemoral joint space narrowing", isCorrect: true},
            {value: 2, answerText: "Lateral tibiofemoral joint space narrowing", isCorrect: false},
            {value: 3, answerText: "Mariginal osteophytes", isCorrect: true},
            {value: 4, answerText: "Subchondral cysts", isCorrect: true},
            {value: 5, answerText: "Subchondral sclerosis", isCorrect: true}

        ]} />
<CheckBoxQuiz title= "Select all the radiographic findings seen in the X-ray." imageURL= {Placeholder} answerOptions = {[
            {value: 1, answerText: "Medial tibiofemoral joint space narrowing", isCorrect: true},
            {value: 2, answerText: "Lateral tibiofemoral joint space narrowing", isCorrect: false},
            {value: 3, answerText: "Mariginal osteophytes", isCorrect: true},
            {value: 4, answerText: "Subchondral cysts", isCorrect: true},
            {value: 5, answerText: "Subchondral sclerosis", isCorrect: true}]}
            correct={["Medial tibiofemoral joint space narrowing", "Mariginal osteophytes", "Subchondral cysts", "Subchondral sclerosis"]}/>


</>
);

}

export default Case1Content;