import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../components/quiz/quizSlice';

export const store = configureStore({
  reducer: {
    quiz: quizReducer
  },
});