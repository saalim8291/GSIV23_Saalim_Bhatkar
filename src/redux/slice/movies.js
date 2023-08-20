import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUpcomingMovies = createAsyncThunk(
  "fetchUpcomingMovies",
  async (page) => {
    const config = {
      method: "get",
      url: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWU4ZGZkMWE5YzA4NzM4NTcyN2IyMDdlODk2OTk4OCIsInN1YiI6IjY0ZGI1ZTBlMzcxMDk3MDBlMjI3NWRmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KeqgpOgORBpP4wIgTOObU5_vKu-02tuMA--mb34vPgo",
      },
    };
    const { data } = await axios(config);
    return data.results;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUpcomingMovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
      console.log(state.data, "state");
      state.isLoading = false;
      // state.data = action.payload
      state.data.push(...action.payload);
    });
    builder.addCase(fetchUpcomingMovies.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default movieSlice.reducer;
