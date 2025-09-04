// store/slices/carListingsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ✅ Async Thunk
export const fetchCars = createAsyncThunk(
  "carListings/fetchCars",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:5000/cars", {
        headers: { "X-Api-Key": "YOUR_API_KEY" },
      });
      if (!res.ok) throw new Error("Failed to fetch cars");
      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// ✅ Slice
const carListingsSlice = createSlice({
  name: "carListings",
  initialState: {
    cars: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default carListingsSlice.reducer;
