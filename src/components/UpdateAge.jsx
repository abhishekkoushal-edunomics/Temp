import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAge } from "../redux/actions/actions";

const UpdateAge = () => {
  const users = useSelector((state) => state.users);
  const temp = useSelector((state) => state.temp);
  const [nameIndex, setNameIndex] = useState(0);
  const dispatch = useDispatch();
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setNameIndex(event.target.value);
  };
  const handleSubmit = (event)=>{
    dispatch(updateAge(nameIndex,age))
    event.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <select value={nameIndex} onChange={handleChange}>
          {users.map((user, index) => (
            <option value={index} key={index}>
              {user.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input type="submit" value="Update Age"/>
      </form>
    </>
  );
};
export default UpdateAge;
