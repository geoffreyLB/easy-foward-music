import {
  SET_ACCESS_TOKEN,
  SET_TOKEN_TYPE,
  SET_EXPIRESIN,
  FETCH_PROFIL_DATA,
  FETCH_PLAYLIST_DATA,
} from '@actions/actions';
import axios from 'axios';

export const setAccessToken = accessToken => {
  return {
    type: SET_ACCESS_TOKEN,
    payload: accessToken,
  };
};

export const setTokenType = tokenType => {
  return {
    type: SET_TOKEN_TYPE,
    payload: tokenType,
  };
};

export const setExpiresIn = expiresIn => {
  return {
    type: SET_EXPIRESIN,
    payload: expiresIn,
  };
};

export const fetchProfilData = profilData => {
  return {
    type: FETCH_PROFIL_DATA,
    payload: profilData,
  };
};

export const fetchPlaylistData = playlistData => {
  return {
    type: FETCH_PLAYLIST_DATA,
    payload: playlistData,
  };
};

export const fetchSpotifyProfilData = async (configHeaders, dispatch) => {
  try {
    const result = await axios.get(SPOTIFY_PROFIL, configHeaders);
    dispatch(fetchProfilData(result.data));
  } catch (err) {
    console.error('Error to fetch Spotify profile data');
  }
};

export const fetchSpotifyPlaylistData = async (configHeaders, dispatch) => {
  try {
    const result = await axios.get(SPOTIFY_PROFIL_PLAYLISTS, configHeaders);
    dispatch(fetchPlaylistData(result.data));
  } catch (err) {
    console.error('Error to fetch Spotify playlist data');
  }
};
