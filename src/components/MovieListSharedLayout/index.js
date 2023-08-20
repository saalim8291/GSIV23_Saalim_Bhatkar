import React from "react";
import { Outlet } from "react-router-dom";
import "./MovieListSharedLayout.css";

const MovieListSharedLayout = () => {
  return (
    <>
      <header>
        <h2>Browser Movies Web App</h2>
      </header>

      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
};

export default MovieListSharedLayout;
