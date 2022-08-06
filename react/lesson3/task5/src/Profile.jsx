import React from 'react';
import moment from "moment";
import "./index.scss";

const formatDate = date => moment('1991-01-17T11:11:11.819Z').format("DD MMM YYYY");

export default userData => {
  return (
    <div className="profile__name">
      {userData.firstName} {userData.lastName}. Was born {formatDate(userData.birthDate)} in {userData.birthPlace}
    </div>
  );
};