import React from "react";
import Quality from "./qualitiy";
import Bookmark from "./bookmark";

const User = (props) => {
  console.log("User", props);
  return (
    <>
      <td key="col-1">{props.name}</td>
      <td key="col-2">
        <Quality {...props.qualities} />
      </td>
      <td key="col-3">{props.profession.name}</td>
      <td key="col-4">{props.completedMeetings}</td>
      <td key="col-5">{props.rate}</td>
      <td key="col-6">
        <Bookmark bookmark={props.bookmark} />
      </td>
    </>
  );
};

export default User;
