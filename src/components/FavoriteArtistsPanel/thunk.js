import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from '../../utils/constants';
import apiInstance from '../../utils/apiInstance';

export const fetchArtistTopSongs = createAsyncThunk(
    'artist',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiInstance.get(`${API_BASE_URL}/top5/artist?name=${payload}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    });