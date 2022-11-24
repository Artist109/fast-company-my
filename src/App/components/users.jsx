import React from "react";
import User from "./user";

const Users = (props) => {
  console.log("Users", props);
  return (
    <>
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
            <User
              name={name}
              profession={profession}
              qualities={qualities}
              completedMeetings={completedMeetings}
              rate={rate}
              bookmark={bookmark}
            />
            <td key="col-7">
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
    </>
  );
};
export default Users;
