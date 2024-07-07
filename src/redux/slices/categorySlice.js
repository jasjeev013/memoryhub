import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'https://memoryhub-backend.vercel.app/'


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
        status: 'idle',
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
                state.status = 'loading';
            })
            .addCase(fetchTags.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(fetchTags.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchTagsByTerm.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTagsByTerm.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log(action.payload);
                state.categories = action.payload;
            })
            .addCase(fetchTagsByTerm.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchItemsByTag.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchItemsByTag.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchItemsByTag.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });

    },
})
export const { selectTag } = categorySlice.actions
export default categorySlice.reducer;