import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allShows: [],
  movies: [],
  series: [],
  bookmarkedShows: [],
  loading: false,
  error: null,
};

export const bookmarkedShows = createAsyncThunk(
  "shows/bookmarkedShows",
  async ({}, { dispatch, rejectWithValue }) => {
    try {
      const shows = await axios.get("/api/shows/getBookmarked");

      return shows.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const bookmarkShow = createAsyncThunk(
  "shows/bookmarkShow",
  async ({ showID }, { dispatch, rejectWithValue }) => {
    try {
      const show = await axios.patch("/api/shows/bookmark", {
        showID: showID,
      });

      return show.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

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
    updateBookmarked(state, action) {
      const showIndex = state.bookmarkedShows.findIndex(
        (show) => show._id === action.payload
      );

      state.bookmarkedShows.splice(showIndex, 1);
    },
  },
  extraReducers: {
    [bookmarkedShows.pending]: (state, action) => {},
    [bookmarkedShows.fulfilled]: (state, action) => {
      state.bookmarkedShows = action.payload;
      state.loading = false;
    },
    [bookmarkedShows.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [bookmarkShow.pending]: (state, action) => {},
    [bookmarkShow.fulfilled]: (state, action) => {
      const showIndex = state.allShows.findIndex(
        (show) => show._id === action.payload._id
      );

      state.allShows[showIndex] = action.payload;

      const bookmarkedShowIndex = state.bookmarkedShows.findIndex(
        (show) => show._id === action.payload._id
      );

      if (bookmarkedShowIndex !== -1) {
        state.bookmarkedShows.splice(bookmarkedShowIndex, 1);
      }
    },
  },
});

export const {
  setShows,
  setMovies,
  setSeries,
  setBookmarked,
  updateBookmarked,
} = showSlice.actions;

export default showSlice.reducer;
