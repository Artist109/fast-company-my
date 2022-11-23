import React from "react";
import Quality from "./qualitiy";

const User = (props) => {
  return (
    <>
      {Object.values(props).map((user) => (
        <button key={user._id}>{user.name}</button>
      ))}
    </>
  );
};

export default User;
