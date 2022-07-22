import { configureStore } from "@reduxjs/toolkit";
import labelsReducer from "./labels/labelsSlice";
import userReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    labels: labelsReducer,
    user: userReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
