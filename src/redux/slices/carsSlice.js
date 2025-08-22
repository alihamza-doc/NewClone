import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  makers: ["Toyota", "Honda", "Nissan", "Suzuki", "Mazda"],
  bodyTypes: ["Hatchback", "Mini Van", "SUV", "Sedan", "Truck", "Van"],
  transmissions: ["Automatic", "Manual"],
  colors: ["White", "Black", "Silver", "Blue", "Red"],
  branches: ["Lahore", "Karachi", "Islamabad"],
  fuelTypes: ["Petrol", "Diesel", "Hybrid", "Electric"],
  steering: ["Left", "Right"],

  filters: {
    maker: "",
    model: "",
    bodyType: "",
    transmission: "",
    branch: "",
    fuelType: "",
    steering: "",
    extColor: "",
    intColor: "",
  },
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.filters[key] = value;
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const { setFilter, resetFilters } = carsSlice.actions;
export default carsSlice.reducer;
