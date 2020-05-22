import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  deezerProfilData: PropTypes.InferProps<{ picture_big: string; name: string; link: string }>;
}

const Profile: React.FC<Props> = ({ deezerProfilData }) => {
  return (
    <div className="user-deezer__profile-container">
      {Object.keys(deezerProfilData).length > 0 && (
        <div className="user-deezer__profile-container__infos">
          <img
            className="user-deezer__profile-container__infos__picture"
            key={deezerProfilData.picture_big}
            src={deezerProfilData.picture_big}
            alt={deezerProfilData.picture_big}
          />
        </div>
      )}
      <div className="user-deezer__profile-container__infos-user">
        <div>
          <span className="user-deezer__profile-container__infos__name">
            {deezerProfilData.name}
          </span>
        </div>
        <div className="user-deezer__profile-container__infos__to-deezer">
          <span>Lien vers profil Deezer :</span>{' '}
          <a href={deezerProfilData.link} target="_blank" rel="noopener noreferrer">
            {deezerProfilData.link}
          </a>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  deezerProfilData: PropTypes.shape({
    picture_big: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default Profile;
