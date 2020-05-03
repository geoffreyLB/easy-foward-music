import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import {
  setAccessTokenSpotify,
  setTokenTypeSpotify,
  setExpiresInSpotify,
  fetchProfilDataSpotify,
  fetchPlaylistDataSpotify,
  fetchSpotifyProfilApi,
  fetchSpotifyPlaylistApi,
} from '@actions/actionCreators';

const UserSpotifyContainer = WrappedComponent => ({ location }) => {
  const dispatch = useDispatch();
  const spotifyProfilData = useSelector(state => state.spotify.profil);
  const spotifyPlaylistData = useSelector(state => state.spotify.playlist);

  // Hash Token
  const { hash } = location;
  const hashValues = queryString.parse(hash);
  const { access_token, expires_in, token_type } = hashValues;

  // Token headers for the get request
  const configHeaders = {
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${access_token}` },
  };

  useEffect(() => {
    dispatch(setAccessTokenSpotify(access_token));
    dispatch(setTokenTypeSpotify(token_type));
    dispatch(setExpiresInSpotify(expires_in));
  }, [access_token, token_type, expires_in]);

  useEffect(() => {
    if (access_token) {
      fetchSpotifyProfilApi(configHeaders, dispatch);
    }
  }, [access_token, SPOTIFY_PROFIL]);

  useEffect(() => {
    if (access_token) {
      fetchSpotifyPlaylistApi(configHeaders, dispatch);
    }
  }, [access_token, SPOTIFY_PROFIL_PLAYLISTS]);

  return (
    <div>
      <WrappedComponent
        spotifyProfilData={spotifyProfilData}
        spotifyPlaylistData={spotifyPlaylistData}
      />
    </div>
  );
};

UserSpotifyContainer.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
  }).isRequired,
  hashValues: PropTypes.shape({
    access_token: PropTypes.string.isRequired,
    expires_in: PropTypes.string.isRequired,
    token_type: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserSpotifyContainer;
