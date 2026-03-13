import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserProfile {
  uid?: string;
  email?: string | null;
  firstName?: string;
  lastName?: string;
  gender?: string;
  profileCompleted?: boolean; // Added to track AboutYourself completion
}

interface AuthState {
  user: UserProfile | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserProfile>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;