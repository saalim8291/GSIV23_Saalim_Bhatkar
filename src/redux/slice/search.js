import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let searchedText = "";

export const fetchSearchedMovie = createAsyncThunk("search", async (title) => {
  searchedText = title;
  const config = {
    method: "get",
    url: `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&query=${title}`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWU4ZGZkMWE5YzA4NzM4NTcyN2IyMDdlODk2OTk4OCIsInN1YiI6IjY0ZGI1ZTBlMzcxMDk3MDBlMjI3NWRmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KeqgpOgORBpP4wIgTOObU5_vKu-02tuMA--mb34vPgo",
    },
  };
  const { data } = await axios(config);
  return data.results;
});

const searchSlice = createSlice({
  name: "search",
  initialState: {
    isLoading: false,
    searchedText: "",
    searchedMovieData: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchedMovie.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSearchedMovie.fulfilled, (state, action) => {
      console.log(action, "state....state");
      state.isLoading = false;
      // state.data = action.payload
      state.searchedText = searchedText;
      state.searchedMovieData = [...action.payload];
    });
    builder.addCase(fetchSearchedMovie.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default searchSlice.reducer;
