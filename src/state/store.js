// store.js
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../hooks/newsSlice';
import navbarSlice from '../hooks/navbarSlice';

export const store = configureStore({
    reducer: {
        navbar: navbarSlice,
        news: newsReducer,
    },
});