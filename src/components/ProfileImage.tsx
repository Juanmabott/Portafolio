import React from 'react';
import './ProfileImage.css';

const ProfileImage: React.FC = () => {
  return (
    <div className="profile-image-container">
      <div className="profile-image">
        <img src="./img/pfp.jpg" alt="Foto de perfil" />
      </div>
    </div>
  );
};

export default ProfileImage;
