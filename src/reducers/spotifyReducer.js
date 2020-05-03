import {
  SPOTIFY_SET_ACCESS_TOKEN,
  SPOTIFY_SET_TOKEN_TYPE,
  SPOTIFY_SET_EXPIRESIN,
  SPOTIFY_FETCH_PROFIL_DATA,
  SPOTIFY_FETCH_PLAYLIST_DATA,
} from '@actions/actions';

const initialState = {
  accessToken: '',
  tokenType: '',
  expiresIn: '',
  profil: {},
  playlist: {},
}

const spotifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPOTIFY_SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case SPOTIFY_SET_TOKEN_TYPE:
      return {
        ...state,
        tokenType: action.payload,
      };
    case SPOTIFY_SET_EXPIRESIN:
      return {
        ...state,
        expiresIn: action.payload,
      };
    case SPOTIFY_FETCH_PROFIL_DATA:
      return {
        ...state,
        profil: action.payload,
      };
    case SPOTIFY_FETCH_PLAYLIST_DATA:
      return {
        ...state,
        playlist: action.payload,
      };
    default:
      return state;
  }
};

export default spotifyReducer;
