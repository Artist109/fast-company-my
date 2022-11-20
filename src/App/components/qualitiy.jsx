import { queryAllByTestId } from "@testing-library/react";
import React from "react";

function Quality(props) {
  console.log(
    "Quality",
    Object.values(props).map((qual) => qual.name)
  );

  Object.values(props).map((qual) => {
    return (
      <button key={qual._id} className={"badge primary m-2 bg-" + qual.color}>
        {qual.name}
      </button>
    );
  });
}

export default Quality;
