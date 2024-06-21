import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedCategory: 'general', // Default category
    searchTerm: '',
    searchVisible: false,
    themeToggle: 'light', // Default theme
};

const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setSearchVisible: (state, action) => {
            state.searchVisible = action.payload;
        },
        setThemeToggle: (state, action) => {
            state.themeToggle = action.payload;
        },
    },
});

export const { setSelectedCategory, setSearchTerm, setSearchVisible, setThemeToggle } = navbarSlice.actions;

export default navbarSlice.reducer;