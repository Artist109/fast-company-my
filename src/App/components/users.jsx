import React from "react";
import User from "./user";
import Quality from "./qualitiy";
import Bookmark from "./bookmark";

const Users = (props) => {
  const params = [
    "Имя",
    "Качества",
    "Профессия",
    "Встретился, раз",
    "Оценка",
    "Избранное",
    "",
  ];

  return (
    <>
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
                bookmark,
              }) => (
                <tr key={_id}>
                  <td key="col-1">{name}</td>
                  <td key="col-2">
                    <Quality {...qualities} />
                  </td>
                  <td key="col-3">{profession.name}</td>
                  <td key="col-4">{completedMeetings}</td>
                  <td key="col-5">{rate}</td>
                  <td>
                    <button
                      onClick={() => props.onToogleBookmark(_id, bookmark)}
                    >
                      <i
                        className="bi bi-bookmark-heart"
                        style={{ color: "blue" }}
                      ></i>
                    </button>
                  </td>
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
