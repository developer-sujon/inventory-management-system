//external import
import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {},
  reducers: {
    setProfile(state, action) {
      state.isLoading = true;
    },
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
