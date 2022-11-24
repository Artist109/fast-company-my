import React from "react";

function Bookmark(bookmarkState) {
  console.log("Bookmark", bookmarkState);
  return (
    <button>
      {bookmarkState === false ? (
        <i className="bi bi-bookmark-heart" style={{ color: "blue" }}></i>
      ) : (
        <i className="bi bi-bookmark-heart-fill" style={{ color: "blue" }}></i>
      )}
    </button>
  );
}

export default Bookmark;
