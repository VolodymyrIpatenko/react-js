import React from 'react';

const UserForm = ({ userData, onChange }) => {
  return (
    <form className="user-form">
      <input
        onChange={onChange}
        type="text"
        name="firstName"
        className="user-form__input"
        value={userData.firstName}
      />
      <input
        onChange={onChange}
        type="text"
        name="lastName"
        className="user-form__input"
        value={userData.lastName}
      />
    </form>
  );
};

export default UserForm;