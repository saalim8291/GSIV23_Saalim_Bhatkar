import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ movie }) => {
  console.log(movie, "mv");
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`details/${movie.id}`)}>
      <img
        style={{ width: "100%", height: 200, marginBottom: 5 }}
        src={movie.poster_path}
      />
      <div style={{ padding: "10px 20px" }}>
        <div style={{ fontWeight: "bold", marginBottom: 5 }}>{movie.title}</div>
        <span
          style={{
            display: "inline-block",
            background: "skyblue",
            // color: "",
            padding: 7,
            borderRadius: 10,
            marginBottom: 5,
          }}
        >
          Rating: {movie.vote_average}
        </span>
        <div>{movie.overview}</div>
      </div>
    </div>
  );
};

export default Card;
