import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'https://memoryhub-backend.vercel.app'


export const fetchTags = createAsyncThunk(
    'tags/fetchTags',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_URL}/items/tags`);

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchItemsByTag = createAsyncThunk(
    'itemsByTag/fetchItemsByTag',
    async (tag, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_URL}/items/search/tag`, {
                params: { tag }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchTagsByTerm = createAsyncThunk(
    'tagsByTerm/fetchTagsByTerm',
    async (term, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_URL}/items/tags/search`, {
                params: { term }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        items: [],
        statusTags: 'idle',
        statusLinks: 'idle',
        error: null,
        click: ''
    },
    reducers: {
        selectTag: (state, action) => {
            state.click = action.payload;
        }
    }, extraReducers: (builder) => {
        builder
            .addCase(fetchTags.pending, (state) => {
                state.statusTags = 'loading';
            })
            .addCase(fetchTags.fulfilled, (state, action) => {
                state.statusTags = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(fetchTags.rejected, (state, action) => {
                state.statusTags = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchTagsByTerm.pending, (state) => {
                state.statusTags = 'loading';
            })
            .addCase(fetchTagsByTerm.fulfilled, (state, action) => {
                state.statusTags = 'succeeded';
                console.log(action.payload);
                state.categories = action.payload;
            })
            .addCase(fetchTagsByTerm.rejected, (state, action) => {
                state.statusTags = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchItemsByTag.pending, (state) => {
                state.statusLinks = 'loading';
            })
            .addCase(fetchItemsByTag.fulfilled, (state, action) => {
                state.statusLinks = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchItemsByTag.rejected, (state, action) => {
                state.statusLinks = 'failed';
                state.error = action.payload;
            });

    },
})
export const { selectTag } = categorySlice.actions
export default categorySlice.reducer;