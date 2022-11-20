import React from "react";
import Quality from "./qualitiy";

const User = (props) => {
  //   console.log(
  //     "props User",
  //     props.users.map((user) => user.qualities.map((qual) => qual))
  //   );
  //   console.log(
  //     "user.id",
  //     props.users.map((user) => user._id)
  //   );
  const quals = props.users.map((user) =>
    user.qualities.map((qualArrs) => qualArrs)
  );
  //   return <Quality {...quals} />;
};

export default User;
