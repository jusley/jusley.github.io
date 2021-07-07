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
        },
        remove:(state,action)=>{
            var temp = []
            for(var i = 0; i < state.anseredQuestions.length;i++){
                if(state.anseredQuestions[i] !== action.payload){
                    temp.push(state.anseredQuestions[i])
                }
            }
            state.anseredQuestions = temp;
        }
    }
})

export const{add,remove} = quizSlice.actions;
export const selectAnsweredQuest = (state) => state.quiz.anseredQuestions;
export default quizSlice.reducer;