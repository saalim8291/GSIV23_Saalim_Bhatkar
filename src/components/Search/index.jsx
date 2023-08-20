import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchedMovie } from "../../redux/slice/search";
import "./Search.css"

const Search = () => {
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    dispatch(fetchSearchedMovie(e.target.value));
  };

  return (
    <div
    className="search"
    >
      <input
        placeholder="Search..."
        // style={{ width: 250, height: "100%", position: "absolute", right: 30, padding: "0 5px", borderRadius: 8 }}
        type="text"
        // value={search}
        onChange={searchHandler}
      />
    </div>
  );
};

export default Search;
