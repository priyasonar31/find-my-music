import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from '../../utils/constants';
import apiInstance from '../../utils/apiInstance';

export const fetchRecommendedSongs = createAsyncThunk(
    'recommend',
    async (payload, { rejectWithValue }) => {
        try {
            const queryParams = Object.values(payload);
            const response = await apiInstance.get(`${API_BASE_URL}/gen-ai/recommended-songs?options=${queryParams}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    });