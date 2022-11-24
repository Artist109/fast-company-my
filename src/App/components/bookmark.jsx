import React from "react";

function Bookmark(props) {
  // console.log("Bookmark", props);
  return (
    <button onClick={() => props.onToogle(props.id, props.bookmark)}>
      {props.bookmark === false ? (
        <i className="bi bi-bookmark-heart" style={{ color: "blue" }}></i>
      ) : (
        <i className="bi bi-bookmark-heart-fill" style={{ color: "blue" }}></i>
      )}
    </button>
  );
}

export default Bookmark;
