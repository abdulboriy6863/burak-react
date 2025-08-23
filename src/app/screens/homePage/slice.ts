import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";
import { create } from "domain";

const initialState: HomePageState = {
  popularDishes: [],
  newDishes: [],
  topUsers: [],
};

const homePageSilce = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setPopularDishes: (state, action) => {
      state.popularDishes = action.payload;
    },
    setNewDishes: (state, action) => {
      state.newDishes = action.payload;
    },
    setTopUsers: (state, action) => {
      state.topUsers = action.payload;
    },
  },
});
export const { setPopularDishes, setNewDishes, setTopUsers } =
  homePageSilce.actions;

const HomePageReducer = homePageSilce.reducer;
export default HomePageReducer;
