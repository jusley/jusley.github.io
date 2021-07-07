import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../components/quiz/quizSlice';
import kneeSlice from '../components/Case/kneeModSlice';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    knee: kneeSlice
  },
});