import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import { playlistReducer } from './playlist_reducer';
import { artistReducer } from './artist_reducer';
import { albumReducer } from './album_reducer';
import { trackReducer } from './track_reducer';

export default combineReducers({
  users: usersReducer,
  playlists: playlistReducer,
  artists: artistReducer,
  albums: albumReducer,
  tracks: trackReducer
});