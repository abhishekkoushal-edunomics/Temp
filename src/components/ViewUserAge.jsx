import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ViewUserAge = () => {
  const users = useSelector((state) => state.users);
  const temp = useSelector(state => state.temp)

  return (
    <>
      <ul>
        {users.map((user, index) => (
          <li key={index}><span>{user.name}</span><br/><span>{user.age}</span></li>
        ))}
      </ul>
      <Link to="/user">User</Link>
    </>
  );
};
export default ViewUserAge;
