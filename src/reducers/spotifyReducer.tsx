import {
  SPOTIFY_SET_ACCESS_TOKEN,
  SPOTIFY_SET_TOKEN_TYPE,
  SPOTIFY_SET_EXPIRESIN,
  SPOTIFY_FETCH_PROFIL_DATA,
  SPOTIFY_FETCH_PLAYLIST_DATA,
} from '@actions/actions';

type SpotifyState = {
  accessToken: string;
  tokenType: string;
  expiresIn: string;
  profil: object;
  playlist: object;
};

interface Action {
  type: string;
  payload: string | object;
}

const initialState: SpotifyState = {
  accessToken: '',
  tokenType: '',
  expiresIn: '',
  profil: {},
  playlist: {},
};

const spotifyReducer = (state = initialState, action: Action): object => {
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
