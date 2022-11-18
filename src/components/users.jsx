import React, { useState } from "react";
import API from "../api";
import { fetchAll } from "../api/fake.api/user.api";

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

  const handleDeleteItem = (_id) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== _id));
  };

  const countPeopleOntheParty = () => {
    console.log(users.length);
    return users.length < 2 || users.length > 4
      ? `${users.length} человек тусанёт с тобой сегодня`
      : `${users.length} человека тусанут с тобой сегодня`;
  };

  return users.length === 0 ? (
    <h1>
      <span className="badge bg-danger">Никто не тусанет с тобой сегодня</span>
    </h1>
  ) : (
    <>
      <h1>
        <span className="badge bg-primary">{countPeopleOntheParty()}</span>
      </h1>
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
            ({ _id, name, profession, qualities, completedMeetings, rate }) => (
              <tr key={_id}>
                <td key="col-1">{name}</td>
                <td key="col-2">
                  {Object.values(qualities).map((qual) => {
                    return (
                      <button className={"badge primary m-2 bg-" + qual.color}>
                        {qual.name}
                      </button>
                    );
                  })}
                </td>
                <td key="col-3">{profession.name}</td>
                <td key="col-4">{completedMeetings}</td>
                <td key="col-5">{rate}</td>
                <td key="col-6">
                  <span
                    className="btn bg-danger"
                    onClick={() => handleDeleteItem(_id)}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};
export default Users;
