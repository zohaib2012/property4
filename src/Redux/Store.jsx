import { configureStore } from "@reduxjs/toolkit";
import { CommonApi } from "./CommonApi";

const store = configureStore({
  reducer: {
    [CommonApi.reducerPath]: CommonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CommonApi.middleware),
});
export default store;
