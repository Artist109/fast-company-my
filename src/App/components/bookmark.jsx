import React from "react";

function Bookmark(props) {
  return function (status) {
    status === false ? (
      <i className="bi bi-bookmark-heart" style={{ color: "blue" }}></i>
    ) : (
      <i className="bi bi-bookmark-heart-fill" style={{ color: "blue" }}></i>
    );
  };
}

export default Bookmark;
