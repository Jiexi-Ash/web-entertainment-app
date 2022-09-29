import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  allShows: [],
  movies: [],
  series: [],
  bookmarkedShows: [],
  loading: false,
};

const showSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    setShows(state, action) {
      state.allShows = action.payload;
    },

    setMovies(state, action) {
      
      state.movies = action.payload;
    },
    setSeries(state, action) {
      
      state.series = action.payload;
    },
    setBookmarked(state, action) {
      state.bookmarkedShows = action.payload;
    },
  },
});

export const { setShows, setMovies, setSeries, setBookmarked } =
  showSlice.actions;

export default showSlice.reducer;
