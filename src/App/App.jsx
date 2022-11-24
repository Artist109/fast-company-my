import React, { useState } from "react";
import API from "./components/api";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

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

  const handleToogleBookmark = (id, bookmarkUserState) => {
    // setUsers((prevState) =>
    //   prevState.map((user) =>
    //     user.bookmark === true && user._id === id
    //       ? { ...user, bookmark: false }
    //       : { ...user, bookmark: true }
    //   )
    // );
    console.log("handleToogleBookmark", id, bookmarkUserState);
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
