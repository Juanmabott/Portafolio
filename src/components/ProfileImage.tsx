import React from 'react';
import './ProfileImage.css';

const ProfileImage: React.FC = () => {
  return (
    <div className="profile-image">
      <img src="./img/pfp.jpg" alt="Foto de perfil" />
    </div>
  );
};

export default ProfileImage;
