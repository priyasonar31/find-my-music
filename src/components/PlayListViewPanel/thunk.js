import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from '../../utils/constants';
import apiInstance from '../../utils/apiInstance';

export const fetchTopShowerSongs = createAsyncThunk(
    'topPlaylist/shower',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiInstance.get(`${API_BASE_URL}/gen-ai/top-songs`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    });

    export const fetchTopPartySongs = createAsyncThunk(
        'topPlaylist/party',
        async (payload, { rejectWithValue }) => {
            try {
                const response = await apiInstance.get(`${API_BASE_URL}/gen-ai/top-party-songs`);
                return response.data;
            } catch (err) {
                return rejectWithValue(err.response.data);
            }
        });