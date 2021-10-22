import { configureStore } from "@reduxjs/toolkit";
import labelsReducer from "./labels/labelsSlice";

const store = configureStore({
  reducer: {
    labels: labelsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
