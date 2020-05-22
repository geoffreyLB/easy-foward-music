import {
  DEEZER_SET_ACCESS_TOKEN,
  DEEZER_SET_EXPIRESIN,
  DEEZER_FETCH_PROFIL_DATA,
  DEEZER_FETCH_PLAYLIST_DATA,
} from '@actions/actions';

type DeezerState = {
  accessToken: string;
  expiresIn: string;
  profil: object;
  playlist: object;
};

interface Action {
  type: string;
  payload: string | object;
}

const initialState: DeezerState = {
  accessToken: '',
  expiresIn: '',
  profil: {},
  playlist: {},
};

const deezerReducer = (state = initialState, action: Action): object => {
  switch (action.type) {
    case DEEZER_SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case DEEZER_SET_EXPIRESIN:
      return {
        ...state,
        expiresIn: action.payload,
      };
    case DEEZER_FETCH_PROFIL_DATA:
      return {
        ...state,
        profil: action.payload,
      };
    case DEEZER_FETCH_PLAYLIST_DATA:
      return {
        ...state,
        playlist: action.payload,
      };
    default:
      return state;
  }
};

export default deezerReducer;
