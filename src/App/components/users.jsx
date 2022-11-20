import React, { useState } from "react";
// import SearchStatus from "./searchStatus";

const Users = (props) => {
  console.log("props", props);
  const params = [
    "Имя",
    "Качества",
    "Профессия",
    "Встретился, раз",
    "Оценка",
    "",
  ];

  return (
    <>
      {/* <SearchStatus length={props.users.length} /> */}
      {props.users.length > 0 && (
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
            {props.users.map(
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
                      onClick={() => props.onDelete(_id)}
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
