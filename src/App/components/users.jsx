import React, { useState } from "react";
import API from "../api";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const params = [
    "Имя",
    "Качества",
    "Профессия",
    "Встретился, раз",
    "Оценка",
    "",
  ];
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "человек тусанет";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
    if (lastOne === 1) return "человек тусанет";
    return "человек тусанет";
  };

  return (
    <>
      <h2>
        <span
          className={"badge " + (users.length > 0 ? "bg-primary" : "bg-danger")}
        >
          {users.length > 0
            ? `${
                users.length + " " + renderPhrase(users.length)
              } с тобой сегодня`
            : "Никто с тобой не тусанет"}
        </span>
      </h2>
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
            {users.map(
              ({
                _id,
                name,
                profession,
                qualities,
                completedMeetings,
                rate,
              }) => (
                <tr key={_id}>
                  <td key="col-1">{name}</td>
                  <td key="col-2">
                    {Object.values(qualities).map((qual) => {
                      return (
                        <button
                          key={qual._id}
                          className={"badge primary m-2 bg-" + qual.color}
                        >
                          {qual.name}
                        </button>
                      );
                    })}
                  </td>
                  <td key="col-3">{profession.name}</td>
                  <td key="col-4">{completedMeetings}</td>
                  <td key="col-5">{rate}</td>
                  <td key="col-6">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </>
  );
};
export default Users;
