import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import homeInformationsReducer from "./reducers/homeInformationsSlice";
import userVehiclesReducer from "./reducers/userVehiclesSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    homeInformations: homeInformationsReducer,
    userVehicles: userVehiclesReducer,
  },
});
