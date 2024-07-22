import { createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from '../../utils/apiInstance';

export const fetchRecommendedSongs = createAsyncThunk(
    'recommend',
    async (payload, { rejectWithValue }) => {
        try {
            const queryParams = Object.values(payload);
            const response = await apiInstance.get(`http://localhost:5001/.netlify/functions/api/gen-ai/recommended-songs?options=${queryParams}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    });