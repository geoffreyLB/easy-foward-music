import {
  SPOTIFY_SET_ACCESS_TOKEN,
  SPOTIFY_SET_TOKEN_TYPE,
  SPOTIFY_SET_EXPIRESIN,
  SPOTIFY_FETCH_PROFIL_DATA,
  SPOTIFY_FETCH_PLAYLIST_DATA,
  DEEZER_SET_ACCESS_TOKEN,
  DEEZER_SET_TOKEN_TYPE,
  DEEZER_SET_EXPIRESIN,
  DEEZER_FETCH_PROFIL_DATA,
  DEEZER_FETCH_PLAYLIST_DATA,
} from '@actions/actions';
import axios from 'axios';

// Spotify
export const setAccessTokenSpotify = accessToken => {
  return {
    type: SPOTIFY_SET_ACCESS_TOKEN,
    payload: accessToken,
  };
};

export const setTokenTypeSpotify = tokenType => {
  return {
    type: SPOTIFY_SET_TOKEN_TYPE,
    payload: tokenType,
  };
};

export const setExpiresInSpotify = expiresIn => {
  return {
    type: SPOTIFY_SET_EXPIRESIN,
    payload: expiresIn,
  };
};

export const fetchProfilDataSpotify = profilData => {
  return {
    type: SPOTIFY_FETCH_PROFIL_DATA,
    payload: profilData,
  };
};

export const fetchPlaylistDataSpotify = playlistData => {
  return {
    type: SPOTIFY_FETCH_PLAYLIST_DATA,
    payload: playlistData,
  };
};

export const fetchSpotifyProfilApi = async (configHeaders, dispatch) => {
  try {
    const result = await axios.get(SPOTIFY_PROFIL, configHeaders);
    dispatch(fetchProfilDataSpotify(result.data));
  } catch (err) {
    console.error('Error to fetch Spotify profile data');
  }
};

export const fetchSpotifyPlaylistApi = async (configHeaders, dispatch) => {
  try {
    const result = await axios.get(SPOTIFY_PROFIL_PLAYLISTS, configHeaders);
    dispatch(fetchPlaylistDataSpotify(result.data));
  } catch (err) {
    console.error('Error to fetch Spotify playlist data');
  }
};

// Deezer
export const setAccessTokenDeezer = accessToken => {
  return {
    type: DEEZER_SET_ACCESS_TOKEN,
    payload: accessToken,
  };
};

export const setExpiresInDeezer = expiresIn => {
  return {
    type: DEEZER_SET_EXPIRESIN,
    payload: expiresIn,
  };
};

export const fetchProfilDataDeezer = profilData => {
  return {
    type: DEEZER_FETCH_PROFIL_DATA,
    payload: profilData,
  };
};

export const fetchPlaylistDataDeezer = playlistData => {
  return {
    type: DEEZER_FETCH_PLAYLIST_DATA,
    payload: playlistData,
  };
};

export const fetchDeezerProfilApi = async (configHeaders, access_token, dispatch) => {
  try {
    const result = await axios.get(`${CORS_ANYWHERE}${DEEZER_PROFIL}?access_token=${access_token}`,
    configHeaders);
    dispatch(fetchProfilDataDeezer(result.data));
  } catch (err) {
    console.error('Error to fetch Deezer profile data');
  }
};

export const fetchDeezerPlaylistApi = async (configHeaders, deezerProfilData, dispatch) => {
  try {
    const result = await axios.get(`${CORS_ANYWHERE}${DEEZER_API}${deezerProfilData.id}/playlists`,
    configHeaders);
    dispatch(fetchPlaylistDataDeezer(result.data));
  } catch (err) {
    console.error('Error to fetch Deezer playlist data');
  }
};
