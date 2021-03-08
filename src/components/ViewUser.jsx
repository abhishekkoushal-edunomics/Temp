import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const ViewUser = () => {
  const users = useSelector((state) => state.users);
  const temp = useSelector(state => state.temp)
  return (
    <>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};
export default ViewUser;
