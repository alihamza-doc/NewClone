// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./slices/carsSlice"; // Your existing slice
import carListingsReducer from "./slices/carListingsSlice"; // The new slice

export const store = configureStore({
  reducer: {
    cars: carsReducer, // Your existing slice for filtering
    carListings: carListingsReducer, // The new slice for displaying car listings
  },
});