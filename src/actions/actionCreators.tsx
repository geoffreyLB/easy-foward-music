import {
  SPOTIFY_SET_ACCESS_TOKEN,
  SPOTIFY_SET_TOKEN_TYPE,
  SPOTIFY_SET_EXPIRESIN,
  SPOTIFY_FETCH_PROFIL_DATA,
  SPOTIFY_FETCH_PLAYLIST_DATA,
  DEEZER_SET_ACCESS_TOKEN,
  DEEZER_SET_EXPIRESIN,
  DEEZER_FETCH_PROFIL_DATA,
  DEEZER_FETCH_PLAYLIST_DATA,
} from '@actions/actions';
import axios from 'axios';

// Spotify
export const setAccessTokenSpotify = (accessToken: string): object => {
  return {
    type: SPOTIFY_SET_ACCESS_TOKEN,
    payload: accessToken,
  };
};

export const setTokenTypeSpotify = (tokenType: string): object => {
  return {
    type: SPOTIFY_SET_TOKEN_TYPE,
    payload: tokenType,
  };
};

export const setExpiresInSpotify = (expiresIn: string): object => {
  return {
    type: SPOTIFY_SET_EXPIRESIN,
    payload: expiresIn,
  };
};

export const fetchProfilDataSpotify = (profilData: object): object => {
  return {
    type: SPOTIFY_FETCH_PROFIL_DATA,
    payload: profilData,
  };
};

export const fetchPlaylistDataSpotify = (playlistData: object): object => {
  return {
    type: SPOTIFY_FETCH_PLAYLIST_DATA,
    payload: playlistData,
  };
};

export const fetchSpotifyProfilApi = async (
  configHeaders: object,
  dispatch: (fetchProfilDataSpotify: any) => void,
): Promise<object | void> => {
  try {
    const result = await axios.get(SPOTIFY_PROFIL, configHeaders);
    dispatch(fetchProfilDataSpotify(result.data));
  } catch (err) {
    console.error('Error to fetch Spotify profile data');
    window.location.assign(SWITCH_MUSIC_URL);
  }
};

export const fetchSpotifyPlaylistApi = async (
  configHeaders: object,
  dispatch: (fetchPlaylistDataSpotify: any) => void,
): Promise<object | void> => {
  try {
    const result = await axios.get(SPOTIFY_PROFIL_PLAYLISTS, configHeaders);
    dispatch(fetchPlaylistDataSpotify(result.data));
  } catch (err) {
    console.error('Error to fetch Spotify playlist data');
  }
};

// Deezer
export const setAccessTokenDeezer = (accessToken: string): object => {
  return {
    type: DEEZER_SET_ACCESS_TOKEN,
    payload: accessToken,
  };
};

export const setExpiresInDeezer = (expiresIn: string): object => {
  return {
    type: DEEZER_SET_EXPIRESIN,
    payload: expiresIn,
  };
};

export const fetchProfilDataDeezer = (profilData: object): object => {
  return {
    type: DEEZER_FETCH_PROFIL_DATA,
    payload: profilData,
  };
};

export const fetchPlaylistDataDeezer = (playlistData: object): object => {
  return {
    type: DEEZER_FETCH_PLAYLIST_DATA,
    payload: playlistData,
  };
};

export const fetchDeezerProfilApi = async (
  configHeaders: object,
  access_token: string,
  dispatch: (fetchProfilDataDeezer: any) => void,
): Promise<object | void> => {
  try {
    const result = await axios.get(
      `${CORS_ANYWHERE}${DEEZER_PROFIL}?access_token=${access_token}`,
      configHeaders,
    );
    dispatch(fetchProfilDataDeezer(result.data));
  } catch (err) {
    console.error('Error to fetch Deezer profile data');
    window.location.assign(SWITCH_MUSIC_URL);
  }
};

export const fetchDeezerPlaylistApi = async (
  configHeaders: object,
  deezerProfilDataId: string,
  dispatch: (fetchProfilDataDeezer: any) => void,
) => {
  try {
    const result = await axios.get(
      `${CORS_ANYWHERE}${DEEZER_API}${deezerProfilDataId}/playlists`,
      configHeaders,
    );
    dispatch(fetchPlaylistDataDeezer(result.data));
  } catch (err) {
    console.error('Error to fetch Deezer playlist data');
  }
};
