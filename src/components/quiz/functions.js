import firebase from 'firebase';
import 'firebase/firestore';
import { useEffect, useState } from "react";
import firebase_config from '../../config/firebase_config'

const db = firebase.firestore();
async function Readdb(id){
    const[quest,setquest]=useState([])
    useEffect(()=>{
        const quiz = []
        db.collection("modules").doc(id).get()
            .then(snapshot => {
                db.collection("quizzez").doc(snapshot.data().quizid).get()
                .then(snapshot2 => {
                    snapshot2.data().questions.forEach(q=>{
                        db.collection("questions").doc(q).get()
                        .then(snapshot => {
                            quiz.push(snapshot.data())
                            setquest(quest=> quest.concat(snapshot.data()))
                            
                        })
                    })
                }) 
            })
    },[])
    
            return quest
}

// useEffect(()=>{
    //     const quiz = []
    //     db.collection("modules").doc(id).get()
    //         .then(snapshot => {
    //             db.collection("quizzez").doc(snapshot.data().quizid).get()
    //             .then(snapshot2 => {
    //                 setquestIds(snapshot2.data().questions)
    //                 snapshot2.data().questions.forEach(q=>{
    //                     db.collection("questions").doc(q).get()
    //                     .then(snapshot => {
    //                         setquestions(questions=> questions.concat(snapshot.data()))
                            
    //                     })
    //                 })
    //             }) 
    //         })
    // },[])

const userAnswers = {}
export{ db,Readdb,userAnswers}