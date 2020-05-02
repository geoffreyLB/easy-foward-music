import {
  SET_ACCESS_TOKEN,
  SET_TOKEN_TYPE,
  SET_EXPIRESIN,
  FETCH_PROFIL_DATA,
  FETCH_PLAYLIST_DATA,
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
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case SET_TOKEN_TYPE:
      return {
        ...state,
        tokenType: action.payload,
      };
    case SET_EXPIRESIN:
      return {
        ...state,
        expiresIn: action.payload,
      };
    case FETCH_PROFIL_DATA:
      return {
        ...state,
        profil: action.payload,
      };
    case FETCH_PLAYLIST_DATA:
      return {
        ...state,
        playlist: action.payload,
      };
    default:
      return state;
  }
};

export default spotifyReducer;
