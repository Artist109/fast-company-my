import React from "react";

function Bookmark(props) {
  console.log("Bookmark", props.bookmark === false);
  return (
    <button>
      {props.bookmark === false ? (
        <i className="bi bi-bookmark-heart" style={{ color: "blue" }}></i>
      ) : (
        <i className="bi bi-bookmark-heart-fill" style={{ color: "blue" }}></i>
      )}
    </button>
  );
}

export default Bookmark;
