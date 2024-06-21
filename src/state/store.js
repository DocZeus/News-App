// store.js
import { configureStore } from '@reduxjs/toolkit';
import newsSlice from '../hooks/newsSlice';
import navbarSlice from '../hooks/navbarSlice';

export const store = configureStore({
    reducer: {
        navbar: navbarSlice,
        news: newsSlice,
    },
});