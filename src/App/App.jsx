import React, { useState } from "react";
import API from "./components/api";
import User from "./components/user";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import Bookmark from "./components/bookmark";

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const handleDeleteItem = (_id) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== _id));
  };

  const handleToogleBookmark = (id, bookmarkUserState) => {
    setUsers((prevState) =>
      prevState.map((user) =>
        user.bookmark === true && user._id === id
          ? { ...user, bookmark: false }
          : { ...user, bookmark: true }
      )
    );

    console.log(users);
  };

  return (
    <>
      <User users={users} />;
      <SearchStatus length={users.length} />
      <Users
        users={users}
        onDelete={handleDeleteItem}
        onToogleBookmark={handleToogleBookmark}
      />
    </>
  );
};

export default App;
