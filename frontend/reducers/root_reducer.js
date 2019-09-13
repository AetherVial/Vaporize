import { combineReducers } from 'redux';
import entitiesReducer from './entities/entities_reducer';
import { sessionReducer } from './session/session_reducer';
import errorsReducer from "./errors/errors_reducer";
import searchReducer from './search_reducer';

export default combineReducers({
  entities: entitiesReducer,
  search: searchReducer,
  session: sessionReducer,
  errors: errorsReducer
});