import React from "react";
import "./SearchBox.css";

const SearchBox = (props) => {
  return (
    <div className="content-input">
      <input
        placeholder="Search Movie...."
        value={props.value}
        onChange={(e) => props.setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
