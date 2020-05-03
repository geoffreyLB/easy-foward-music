import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import {
  setAccessTokenDeezer,
  setExpiresInDeezer,
  fetchProfilDataDeezer,
  fetchPlaylistDataDeezer,
  fetchDeezerProfilApi,
  fetchDeezerPlaylistApi,
} from '@actions/actionCreators';

const UserDeezerContainer = WrappedComponent => ({ location }) => {
  const dispatch = useDispatch();
  const deezerProfilData = useSelector(state => state.deezer.profil);
  const deezerPlaylistData = useSelector(state => state.deezer.playlist);

  // Hash Token
  const { hash } = location;
  const hashValues = queryString.parse(hash);
  const { access_token, expires } = hashValues;

  // Token headers for the get request
  const configHeaders = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  };

  useEffect(() => {
    dispatch(setAccessTokenDeezer(access_token));
    dispatch(setExpiresInDeezer(expires));
  }, [access_token, expires]);

  useEffect(() => {
    if (access_token) {
      fetchDeezerProfilApi(configHeaders, access_token, dispatch);
    }
  }, [access_token, DEEZER_PROFIL]);

  useEffect(() => {
    if (Object.keys(deezerProfilData).length > 0) {
      fetchDeezerPlaylistApi(configHeaders, deezerProfilData, dispatch);
    }
  }, [deezerProfilData, access_token, DEEZER_PROFIL_PLAYLISTS]);

  return (
    <div>
      <WrappedComponent
        deezerProfilData={deezerProfilData}
        deezerPlaylistData={deezerPlaylistData}
      />
    </div>
  );
};

export default UserDeezerContainer;
