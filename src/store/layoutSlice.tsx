import { createSlice } from "@reduxjs/toolkit";

export interface Layout {
  layoutState: string;
}

const initialLayout: Layout = {
  layoutState: "list",
};

export const layoutSlice = createSlice({
  name: "layoutState",
  initialState: initialLayout,
  reducers: {
    setList: (layoutState) => {
      layoutState.layoutState = "list";
    },
    setGrid: (layoutState) => {
      layoutState.layoutState = "grid";
    },
  },
});

export const { setList, setGrid } = layoutSlice.actions;
export default layoutSlice.reducer;
