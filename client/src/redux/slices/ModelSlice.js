//External Lib Import
import { createSlice } from "@reduxjs/toolkit";

const ModelSlice = createSlice({
  name: "Model",
  initialState: {
    ModelLists: [],
    ModelDropDown: [],
    TotalModel: 0,
    ModelDetails: {
      ModelName: "",
      ModelDescription: "",
      ModelStatus: true,
    },
  },
  reducers: {
    SetModelLists(state, action) {
      state.ModelLists = action.payload;
    },
    SetTotalModel(state, action) {
      state.TotalModel = action.payload;
    },
    SetModelDropDown(state, action) {
      state.ModelDropDown = action.payload;
    },
    SetModelDetails(state, action) {
      state.ModelDetails = action.payload;
    },
    ResetModelDetails(state, action) {
      Object.keys(state.ModelDetails).map((i) => {
        return i === "ModelStatus"
          ? (state.ModelDetails[i] = true)
          : (state.ModelDetails[i] = "");
      });
    },
  },
});

export const {
  SetModelLists,
  SetTotalModel,
  SetModelDropDown,
  SetModelDetails,
  ResetModelDetails,
} = ModelSlice.actions;
export default ModelSlice.reducer;
