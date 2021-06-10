import React from "react";
import Placeholder from '../placeholder.jpeg';
import ImagePage from '../ImagePage';

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

<ImagePage title= "X-ray views to keep in mind" bodyElements = {[
            {bodyImage: "Skyline view is best to assess for patellofemoral OA:", imageURL: Placeholder},
            {bodyImage: "Tunnel view is best to look for loose bodies, femoral condyle lesions and lateral compartment OA:", imageURL: Placeholder},
            {bodyImage: "Oblique view is best to assess suspected tibial plateau fracture:", imageURL: Placeholder}
 ]} />

);

}

export default Case1Content;