import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    geners: {},
  },
  reducers: {
    getApiConfiguration(state, action) {
      state.url = action.payload;
    },

    getGenres() {
      state.geners = action.payload;
    },
  },
});

export default homeSlice.reducer;
export const { getApiConfiguration, getGenres } = homeSlice.actions;
