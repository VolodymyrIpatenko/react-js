import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const baseUrl = 'https://api.github.com/users';

const User = () => {
  const [userState, getUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`${baseUrl}/${userId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/js',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(alert('Cap we have error'));
      })
      .then(userData => getUserData(userData));
  }, [userId]);

  if (!userState) {
    return;
  }

  const { avatar_url, location, name } = userState;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;