import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import homeInformationsReducer from "./reducers/homeInformationsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    homeInformations: homeInformationsReducer,
  },
});
