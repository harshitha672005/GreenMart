// ProfileHeader.js
import React from 'react';

const ProfileHeader = ({ username }) => {
  return (
    <header>
      <h1>Welcome, {username}!</h1>
    </header>
  );
};

export default ProfileHeader;

