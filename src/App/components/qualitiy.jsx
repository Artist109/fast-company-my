import { queryAllByTestId } from "@testing-library/react";
import React from "react";

function Quality(props) {
  return (
    <>
      {Object.values(props).map((qual) => (
        <button key={qual._id} className={"badge primary m-2 bg-" + qual.color}>
          {qual.name}
        </button>
      ))}
    </>
  );
}

export default Quality;
