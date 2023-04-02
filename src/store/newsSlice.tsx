import { createSlice } from "@reduxjs/toolkit";

export interface ArticlesCount {
  arcticleCount: number;
}

const initialState: ArticlesCount = {
    arcticleCount: 0,
};

export const articleCountSlice = createSlice({
  name: "countState",
  initialState,
  reducers: {
    setArticlesCount: (newsState, action) => {
        newsState.arcticleCount = action.payload.length;
    },
  },
});

export const { setArticlesCount } = articleCountSlice.actions;
export default articleCountSlice.reducer;
