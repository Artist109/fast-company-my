import React, { useState } from "react";
import Users from "./components/users";
import API from "./components/api";
import SearchStatus from "./components/searchStatus";

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const handleDeleteItem = (_id) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== _id));
  };
  return (
    <>
      <SearchStatus length={users.length} />
      <Users users={users} onDelete={handleDeleteItem} />
    </>
  );
};

export default App;
