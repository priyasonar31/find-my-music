import { createSlice } from '@reduxjs/toolkit';
import { asycStatus } from '../../utils/constants'
import { fetchArtistTopSongs } from "./thunk";
const initialState = {
  albumList: [],
  albumListLoader: "initial",
}

export const favArtistAlbumSlice = createSlice({
  name: 'favArtistAlbum',
  initialState,
  reducers: {
    updateLikedSongs: (state, { payload }) => {
      const id = payload.id;
      const list = state.albumList.map((al) => ({
        ...al,
        isSelected:  al.id === id ? !al.isSelected : al.isSelected
      }));
      state.albumList = list;
    }
  },
  extraReducers(builder) {
    builder.addCase(
      fetchArtistTopSongs.pending,
      (state) => {
        state.albumListLoader = asycStatus.PENDING;
      }
    ).addCase(
      fetchArtistTopSongs.fulfilled,
      (state, { payload }) => {
        state.albumListLoader = asycStatus.SUCCESS;
        state.albumList = payload;
        return state;
      }
    ).addCase(
      fetchArtistTopSongs.rejected,
      (state) => {
        state.albumListLoader = asycStatus.FAILURE;
        return state;
      }
    )
  }
})

export const { updateLikedSongs } = favArtistAlbumSlice.actions;

export default favArtistAlbumSlice.reducer;