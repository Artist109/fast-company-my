import React, { useState } from "react";
import API from "./components/api";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  let updatedUsers = [];
  const params = [
    "Имя",
    "Качества",
    "Профессия",
    "Встретился, раз",
    "Оценка",
    "Избранное",
    "",
  ];

  const handleDeleteItem = (_id) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== _id));
  };
  console.log("prevState", users);
  console.log("prevState", updatedUsers);

  const handleToogleBookmark = (id, bookmarkUserState) => {
    console.log("handleToogleBookmark", id, bookmarkUserState);
    setUsers((prevState) =>
      prevState.map((user) =>
        user._id === id ? { ...user, bookmark: !bookmarkUserState } : user
      )
    );
  };

  return (
    <>
      <SearchStatus length={users.length} />
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              {params.map((param) => (
                <th key={param} scope="col">
                  {param}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <Users
              users={users}
              onDelete={handleDeleteItem}
              onToogle={handleToogleBookmark}
            />
          </tbody>
        </table>
      )}
    </>
  );
};

export default App;
