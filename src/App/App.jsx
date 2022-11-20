import React, { useState } from "react";
import Users from "./components/users";
import API from "./components/api";

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const handleDeleteItem = (_id) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== _id));
  };
  return (
    <>
      <Users users={users} onDelete={handleDeleteItem} />
    </>
  );
};

export default App;
