// reducers/newsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    articles: [],
    error: null,
    currentPage: 1,
    totalResults: 0,
    pageSize: 20,
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setArticles(state, action) {
            state.articles = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setTotalResults(state, action) {
            state.totalResults = action.payload;
        },
    },
});

export const { setArticles, setError, setCurrentPage, setTotalResults } = newsSlice.actions;

export default newsSlice.reducer;
