import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import queryString, { ParsedQuery } from 'query-string';
import {
  setAccessTokenDeezer,
  setExpiresInDeezer,
  fetchDeezerProfilApi,
  fetchDeezerPlaylistApi,
} from '@actions/actionCreators';

interface ILocation {
  location: {
    hash: string;
  };
}

interface IState {
  deezer: {
    profil: object;
    playlist: object;
  };
}

const UserDeezerContainer = WrappedComponent => ({ location }: ILocation) => {
  const dispatch = useDispatch();
  const deezerProfilData = useSelector((state: IState) => state.deezer.profil);
  const deezerPlaylistData = useSelector((state: IState) => state.deezer.playlist);

  // Hash Token
  const { hash } = location;
  const hashValues = queryString.parse(hash);
  const { access_token, expires }: ParsedQuery<string> = hashValues;

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
      fetchDeezerPlaylistApi(configHeaders, deezerProfilData.id, dispatch);
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

UserDeezerContainer.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default UserDeezerContainer;
