import axios from "axios";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const config = {
        method: "get",
        url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWU4ZGZkMWE5YzA4NzM4NTcyN2IyMDdlODk2OTk4OCIsInN1YiI6IjY0ZGI1ZTBlMzcxMDk3MDBlMjI3NWRmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KeqgpOgORBpP4wIgTOObU5_vKu-02tuMA--mb34vPgo",
        },
      };
      const { data } = await axios(config);
      setMovie(data);

      return data.results;
    };

    getMovieDetails();
  }, []);

  return (
    <div style={{ padding: "20px 30px", lineHeight: 1.5 }}>
      <h2>{movie?.title}</h2>
      <div>Rating: {movie?.vote_average}</div>
      <div>Year of release: {movie?.release_date.split("-")[0]}</div>
      <div>
        Length: {Math.floor(movie?.runtime / 60)}h :
        {Math.floor(movie?.runtime % 60)}m
      </div>
      <div>Director: {movie?.director ? movie.director : "N/A"}</div>
      <div>Cast: {movie?.cast ? movie.cast : "N/A"}</div>
    </div>
  );
};

export default Details;
