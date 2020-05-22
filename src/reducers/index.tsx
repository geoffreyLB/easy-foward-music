import { combineReducers } from 'redux';
// Reducers
import spotifyReducer from '@reducers/spotifyReducer';
import deezerReducer from '@reducers/deezerReducer';

const easyForwardApp = combineReducers({
  spotify: spotifyReducer,
  deezer: deezerReducer,
});

export default easyForwardApp;
