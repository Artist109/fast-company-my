import React from "react";

function Bookmark({ id, bookmark, onToogle }) {
  // console.log("Bookmark", props);
  return (
    <button onClick={() => onToogle(id)}>
      {bookmark === false ? (
        <i className="bi bi-bookmark-heart" style={{ color: "blue" }}></i>
      ) : (
        <i className="bi bi-bookmark-heart-fill" style={{ color: "blue" }}></i>
      )}
    </button>
  );
}

export default Bookmark;
