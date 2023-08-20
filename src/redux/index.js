import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slice/movies";
import searchReducer from "./slice/search";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    search: searchReducer,
  },
});
