import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from "./pages/MovieList";
import MovieListSharedLayout from "./components/MovieListSharedLayout";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieListSharedLayout />}>
            <Route index element={<MovieList />} />
            <Route path="details/:id" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
