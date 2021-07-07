import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    page : 0,
    nextPage : false,
    hideOrNot : false,
};

export const kneeSlice = createSlice({
    name: 'knee',
    initialState,
    reducers:{
        increament:(state)=>{
            if(state.page <=6){
                state.page += 1
            }
        },
        decreament:(state)=>{
            if(state.page>0){
                state.page = state.page - 1
            }
        },
        addNext:(state)=>{
            state.nextPage = true
        },
        removeNext:(state)=>{
            state.nextPage = false
        },
        hide:(state)=>{
            state.hideOrNot = true
        },
        reveal:(state)=>{
            state.hideOrNot = false
        }
    }
})
export const{increament,decreament,addNext,removeNext,hide,reveal} = kneeSlice.actions;
export const selectNextPage = (state) => state.knee.nextPage;
export const selectPage = (state) => state.knee.page;
export const selectNextOrNot = (state) => state.knee.hideOrNot;
export default kneeSlice.reducer;