import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signIn, signOut } from "next-auth/react";
import axios from "axios";

const initialState = {
  user: null,
  authenticated: false,
  loading: false,
  error: false,
};

export const autoSignIn = createAsyncThunk(
  "auth/autoSignIn",
  async ({ router }, { dispatch }) => {
    try {
      const user = await axios.get("/api/user/user");

      if (user) {
        return {
          email: user.data.user.email,
          profileImageUrl: user.data.user.profileImageUrl,
        };
      }
    } catch (error) {}
  }
);
export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ userData, router }, { dispatch, rejectWithValue }) => {
    try {
      const user = await axios.post("/api/auth/signup", userData);
      await signIn("credentials", {
        email: user.data.user.email,
        password: userData.password,
        redirect: false,
      }).then((res) => {
        if (res.error) {
          throw new Error(res.error);
        }
      });

      router.push("/");
      return {
        email: user.data.user.email,
        profileImageUrl: user.data.user.profileImageUrl,
      };
    } catch (e) {
      return rejectWithValue("incorrect email or password");
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ userData, router }, { dispatch, rejectWithValue }) => {
    try {
      const result = await signIn("credentials", {
        email: userData.email,
        password: userData.password,
        redirect: false,
      });

      if (result.error) {
        throw error;
      }
      const user = await axios.get("/api/user/user");

      router.push("/");
      return {
        email: user.data.user.email,
        profileImageUrl: user.data.user.profileImageUrl,
      };
    } catch (e) {
      return rejectWithValue("incorrect email or password");
    }
  }
);

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOutUser: (state) => {
      state.user = null;
      state.authenticated = false;
      signOut();
    },
  },
  extraReducers: {
    [signUp.pending]: (state) => {
      state.loading = true;
    },
    [signUp.fulfilled]: (state, action) => {
      state.loading = false;
      state.authenticated = true;
      state.user = action.payload;
      state.error = "";
    },
    [signUp.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.authenticated = true;
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [autoSignIn.pending]: (state) => {
      state.loading = true;
      state.error;
    },
    [autoSignIn.fulfilled]: (state, action) => {
      state.authenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.error;
    },
    [autoSignIn.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { signOutUser } = authReducer.actions;

export default authReducer.reducer;
