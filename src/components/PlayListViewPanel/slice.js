import { createSlice } from '@reduxjs/toolkit';
import { asycStatus } from '../../utils/constants'
import { fetchTopShowerSongs, fetchTopPartySongs } from "./thunk";
const initialState = {
  showerPlayListSongs: [],
  partyPlayListSongs: [],
  playListLoader: asycStatus.INITIAL,
}

export const playListSongSlice = createSlice({
  name: 'playListSong',
  initialState,
  reducers: {
    updateLikedSongs: (state, { payload }) => {
      const id = payload.id;
      const list = state.showerPlayListSongs.map((al) => ({
        ...al,
        isSelected: al.id === id ? !al.isSelected : al.isSelected
      }));
      state.showerPlayListSongs = list;
    }
  },
  extraReducers(builder) {
    builder.addCase(
      fetchTopShowerSongs.pending,
      (state) => {
        state.playListLoader = asycStatus.PENDING;
      }
    ).addCase(
      fetchTopShowerSongs.fulfilled,
      (state, { payload }) => {
        state.playListLoader = asycStatus.SUCCESS;
        state.showerPlayListSongs = payload;
        return state;
      }
    ).addCase(
      fetchTopShowerSongs.rejected,
      (state) => {
        state.playListLoader = asycStatus.FAILURE;
        return state;
      }
    ).addCase(
      fetchTopPartySongs.pending,
      (state) => {
        state.playListLoader = asycStatus.PENDING;
      }
    ).addCase(
      fetchTopPartySongs.fulfilled,
      (state, { payload }) => {
        state.playListLoader = asycStatus.SUCCESS;
        state.partyPlayListSongs = payload;
        return state;
      }
    ).addCase(
      fetchTopPartySongs.rejected,
      (state) => {
        state.playListLoader = asycStatus.FAILURE;
        return state;
      }
    )
  }
})

// Action creators are generated for each case reducer function
export const { updateLikedSongs } = playListSongSlice.actions;

export default playListSongSlice.reducer;