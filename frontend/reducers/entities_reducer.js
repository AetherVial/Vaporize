import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import { playlistReducer } from './playlist_reducer';

export default combineReducers({
  users: usersReducer,
  playlists: playlistReducer
});