import { createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from '../../utils/apiInstance';

export const fetchTopShowerSongs = createAsyncThunk(
    'topPlaylist/shower',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiInstance.get(`http://localhost:5001/.netlify/functions/api/gen-ai/top-shower-songs`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    });

    export const fetchTopPartySongs = createAsyncThunk(
        'topPlaylist/party',
        async (payload, { rejectWithValue }) => {
            try {
                const response = await apiInstance.get(`http://localhost:5001/.netlify/functions/api/gen-ai/top-party-songs`);
                return response.data;
            } catch (err) {
                return rejectWithValue(err.response.data);
            }
        });