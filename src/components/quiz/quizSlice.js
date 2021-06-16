import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    id:null,
    value:null,
    anseredQuestions:[]
}

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers:{
        add:(state,action)=>{
            if(!state.anseredQuestions.includes(action.payload)){
                state.anseredQuestions.push(action.payload)}
        }
    }
})

export const{add} = quizSlice.actions;
export const selectAnsweredQuest = (state) => state.quiz.anseredQuestions;
export default quizSlice.reducer;