import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  infoList: [
    {
      title: "Lorem ipsum dolor sit amet 1",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      url: "https://google.pl",
    },
    {
      title: "Lorem ipsum dolor sit amet 2",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      url: "https://onet.pl",
    },
    {
      title: "Lorem ipsum dolor sit amet 3",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      url: "https://ecosia.org",
    },
  ],
};

export const homeInformationsSlice = createSlice({
  name: "homeInformations",
  initialState: initialState,
  reducers: {},
});

// export const {} = homeInformationsSlice.actions;

export default homeInformationsSlice.reducer;
