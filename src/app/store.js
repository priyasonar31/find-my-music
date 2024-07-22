import { configureStore } from '@reduxjs/toolkit';
import favArtistAlbumReducer from '../components/FavoriteArtistsPanel/slice';
import recommededSongReducer from '../components/Content/slice';
import topPlayListSongReducer from '../components/PlayListViewPanel/slice';

export const store = configureStore({
    reducer: {
        favArtistAlbum: favArtistAlbumReducer,
        recommendedSongs: recommededSongReducer,
        topPlaylistSongs: topPlayListSongReducer
    }
});