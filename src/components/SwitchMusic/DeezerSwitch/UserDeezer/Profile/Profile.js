import React from 'react';
import UserDeezerContainer from '@components/SwitchMusic/DeezerSwitch/UserDeezer/UserDeezer.container/';

const Profile = ({ deezerProfilData }) => {
  const { name, link, picture_big } = deezerProfilData;
  return (
    <div className="user-deezer__profile-container">
      {Object.keys(deezerProfilData).length > 0 && (
        <div className="user-deezer__profile-container__infos">
          <img
            className="user-deezer__profile-container__infos__picture"
            key={picture_big}
            src={picture_big}
            alt={picture_big}
          />
        </div>
      )}
      <div className="user-deezer__profile-container__infos-user">
        <div>
          <span className="user-deezer__profile-container__infos__name">{name}</span>
        </div>
        <div className="user-deezer__profile-container__infos__to-deezer">
          <span>Lien vers profil Spotify :</span>{' '}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserDeezerContainer(Profile);
