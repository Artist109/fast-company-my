import React, { useState } from "react";
import API from "./components/api";
import User from "./components/user";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const handleDeleteItem = (_id) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== _id));
  };
  return (
    <>
      <User users={users} />;
      <SearchStatus length={users.length} />
      <Users users={users} onDelete={handleDeleteItem} />
    </>
  );
};

export default App;
