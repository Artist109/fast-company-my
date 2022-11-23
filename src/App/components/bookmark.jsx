import React from "react";

function Bookmark(props) {
  console.log("Bookmark", props);
  return (
    <button>
      <i className="bi bi-bookmark-heart" style={{ color: "blue" }}></i>
    </button>
  );
}

export default Bookmark;
