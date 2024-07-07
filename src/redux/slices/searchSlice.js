import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'https://memoryhub-backend.vercel.app'

// Async thunk to search item bt description
export const fetchItemsByDescription = createAsyncThunk('items/fetchByDescription',
    async (description, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_URL}/items/search/description`, {
                params: { q: description }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk to delete an item by ID
export const deleteItemById = createAsyncThunk(
    'items/deleteById',
    async (itemId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`${API_URL}/items/${itemId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk to add an item 
export const addItem = createAsyncThunk(
    'items/addItem',
    async ({ description, link, tags }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_URL}/items`, { description, link, tags });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk to update an item by ID
export const updateItemById = createAsyncThunk(
    'items/updateItemById',
    async ({ id, description, link, tags }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${API_URL}/items/${id}`, {
                description,
                link,
                tags
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const searchSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        status: 'idle',
        error: null,

    },
    reducers: {

    }, extraReducers: (builder) => {
        builder
            .addCase(fetchItemsByDescription.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchItemsByDescription.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchItemsByDescription.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(deleteItemById.pending, (state) => {

            })
            .addCase(deleteItemById.fulfilled, (state, action) => {

                // Remove the deleted item from the items array
                state.items = state.items.filter(item => item.id !== action.payload);
            })
            .addCase(deleteItemById.rejected, (state, action) => {

                state.error = action.payload;
            })
            .addCase(addItem.pending, (state) => {

            })
            .addCase(addItem.fulfilled, (state, action) => {

                state.items.push(action.payload);
            })
            .addCase(addItem.rejected, (state, action) => {

                state.error = action.payload;
            });

    },
})

// export const { } = searchSlice.actions
export default searchSlice.reducer;