//External Lib Import
import { createSlice } from "@reduxjs/toolkit";

const SettingSlice = createSlice({
  name: "Setting",
  initialState: {
    Loader: false,
  },

  reducer: {
    SetLoader(state, action) {
      state.Loader = action.payload;
    },
    RemoveLoader(state, action) {
      state.Loader = action.payload;
    },
  },
});

export const { SetLoader, RemoveLoader, SetMode, SetLang } =
  SettingSlice.actions;
export default SettingSlice.reducer;
