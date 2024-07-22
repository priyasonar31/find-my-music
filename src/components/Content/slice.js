import { createSlice } from '@reduxjs/toolkit';
import { asycStatus } from '../../utils/constants'
import { fetchRecommendedSongs } from "./thunk";
const initialState = {
  recommendedSongsList: [],
  recommendedSongsLoader: asycStatus.INITIAL,
}

export const recommendedSongSlice = createSlice({
  name: 'recommendedSongs',
  initialState,
  reducers: {
    updateLikedSongs: (state, { payload }) => {
      console.log('payload-->', payload);
      const id = payload.id;
      const list = state.recommendedSongsList.map((al) => ({
        ...al,
        isSelected:  al.id === id ? !al.isSelected : al.isSelected
      }));
      state.recommendedSongsList = list;
    }
  },
  extraReducers(builder) {
    builder.addCase(
      fetchRecommendedSongs.pending,
      (state) => {
        state.recommendedSongsLoader = asycStatus.PENDING;
      }
    ).addCase(
      fetchRecommendedSongs.fulfilled,
      (state, { payload }) => {
        state.recommendedSongsLoader = asycStatus.SUCCESS;
        state.recommendedSongsList = payload;
        return state;
      }
    ).addCase(
      fetchRecommendedSongs.rejected,
      (state) => {
        state.recommendedSongsLoader = asycStatus.FAILURE;
        return state;
      }
    )
  }
})

export const {  updateLikedSongs } = recommendedSongSlice.actions;

export default recommendedSongSlice.reducer;