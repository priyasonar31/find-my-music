import { createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from '../../utils/apiInstance';

export const fetchArtistTopSongs = createAsyncThunk(
    'artist',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiInstance.get(`http://localhost:5001/.netlify/functions/api/top5/artist?name=${payload}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    });