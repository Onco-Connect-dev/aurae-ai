import React from "react";
import "./searchBox.css";
import searchIcon from "../../public/search-icon.png";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}  
      />
      <img src={searchIcon} alt="Search" className="ico" />
    </div>
  );
};

export default SearchBox;
