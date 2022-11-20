import React from "react";
import Quality from "./qualitiy";

const User = (props) => {
  console.log(
    "props User",
    props.users.map((user) => user.qualities.map((qual) => qual))
  );
  const qualities = props.users.map((user) =>
    user.qualities.map((qual) => qual)
  );
  return <Quality qualities={qualities} />;
};

export default User;
