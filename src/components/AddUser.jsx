import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addUser } from "../redux/actions/actions";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  
  const handleSubmit = (event) => {
    dispatch(addUser(username));
    setUsername("");
    event.preventDefault();
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="nameField">Username</label>
          <input
            type="text"
            id="nameField"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" className="btn-submit" value="Add User" />
        </div>
      </form>
      <Link to="/age">Age</Link>
    </>
  );
};

export default AddUser;
