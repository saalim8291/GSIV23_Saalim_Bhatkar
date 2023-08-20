import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { fetchUpcomingMovies } from "../../redux/slice/movies";
import { useDispatch, useSelector } from "react-redux";
import Search from "../../components/Search";
import "./MovieList.css";

const MovieList = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);
  const searched = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetchUpcomingMovies(page));
  }, [page]);

  return (
    <>
      <Search />

      <div className="list-container">
        {!searched.searchedText &&
          movies.data.map((movie, index) => <Card key={index} movie={movie} />)}
        {!searched.searchedText &&
          !movies.isLoading &&
          movies.data.length === 0 && (
            <div
              style={{
                textAlign: "center",
              }}
            >
              No Data found
            </div>
          )}

        {searched.searchedText &&
          searched.searchedMovieData.length > 0 &&
          searched.searchedMovieData.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        {!searched.isLoading &&
          searched.searchedText &&
          searched.searchedMovieData.length === 0 && (
            <div
              style={{
                textAlign: "center",
              }}
            >
              Movie not found
            </div>
          )}
      </div>

      {(movies.isLoading || searched.isLoading) && (
        <div
          style={{
            textAlign: "center",
          }}
        >
          loading...
        </div>
      )}

      {movies.data.length > 0 && !searched.searchedText && (
        <button
        className="show-more-btn"
          onClick={() => setPage((prev) => prev + 1)}
        >
          show more
        </button>
      )}
    </>
  );
};

export default MovieList;
