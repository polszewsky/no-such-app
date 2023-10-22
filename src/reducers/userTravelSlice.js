import { createSlice } from "@reduxjs/toolkit";

const userTravelSlice = createSlice({
  name: "userTravel",
  initialState: {
    todayTravels: [],
  },
  reducers: {
    addUserTodayTravel: (state, action) => {
      state.todayTravels = [...state.todayTravels, action.payload];
    },
  },
});

export const { addUserTodayTravel } = userTravelSlice.actions;

export default userTravelSlice.reducer;
