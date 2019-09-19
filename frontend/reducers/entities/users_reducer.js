import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { UNFOLLOW_PLAYLIST, FOLLOW_PLAYLIST } from '../../actions/playlist_actions';

export const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let user = Object.values(state)[0]
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case FOLLOW_PLAYLIST:
      user.followedPlaylists.push(parseInt(Object.keys(action.playlist)[0]))
      newState = Object.assign({}, state, {[user.id]: user})
      return newState;
    case UNFOLLOW_PLAYLIST:
      user.followedPlaylists = user.followedPlaylists.filter(el => el != parseInt(Object.keys(action.playlist)[0]))
      newState = Object.assign({}, state, { [user.id]: user })
      return newState;
    default:
      return state;
  }
};

