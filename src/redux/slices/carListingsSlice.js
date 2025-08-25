// store/slices/carListingsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: [
    {
      id: 1,
      brand: "TOYOTA",
      model: "VOXY",
      year: 2010,
      fuelType: "Gasoline/Petrol",
      lotNumber: "U 3",
      engineSize: "2,000",
      mileage: 13319,
      engineCode: "1KT",
      transmission: "Automatic",
      image: "https://res.cloudinary.com/doabbpdy1/image/upload/v1755689274/car1_bf2svh.jpg"
    },
    {
      id: 2,
      brand: "TOYOTA",
      model: "BLADE",
      year: 2007,
      fuelType: "Gasoline/Petrol",
      lotNumber: "U 4",
      engineSize: "2,400",
      mileage: 148873,
      engineCode: "1KT",
      transmission: "Automatic",
      image: "https://res.cloudinary.com/doabbpdy1/image/upload/v1755689390/car4_aibnru.jpg"
    },
    {
      id: 3,
      brand: "TOYOTA",
      model: "VOXY",
      year: 2012,
      fuelType: "Gasoline/Petrol",
      lotNumber: "U 6",
      engineSize: "2,000",
      mileage: 183939,
      engineCode: "1KT",
      transmission: "Automatic",
      image: "https://res.cloudinary.com/doabbpdy1/image/upload/v1755689389/car3_fir2pd.jpg"
    },
    {
      id: 4,
      brand: "TOYOTA",
      model: "VOXY",
      year: 2010,
      fuelType: "Gasoline/Petrol",
      lotNumber: "U 3",
      engineSize: "2,000",
      mileage: 13319,
      engineCode: "1KT",
      transmission: "Automatic",
      image: "https://res.cloudinary.com/doabbpdy1/image/upload/v1755689274/car1_bf2svh.jpg"
    },
    {
      id: 5,
      brand: "TOYOTA",
      model: "BLADE",
      year: 2007,
      fuelType: "Gasoline/Petrol",
      lotNumber: "U 4",
      engineSize: "2,400",
      mileage: 148873,
      engineCode: "1KT",
      transmission: "Automatic",
      image: "https://res.cloudinary.com/doabbpdy1/image/upload/v1755689390/car4_aibnru.jpg"
    },
    {
      id: 6,
      brand: "TOYOTA",
      model: "VOXY",
      year: 2012,
      fuelType: "Gasoline/Petrol",
      lotNumber: "U 6",
      engineSize: "2,000",
      mileage: 183939,
      engineCode: "1KT",
      transmission: "Automatic",
      image: "https://res.cloudinary.com/doabbpdy1/image/upload/v1755689389/car3_fir2pd.jpg"
    }
    ,
    {
      id: 7,
      brand: "TOYOTA",
      model: "VOXY",
      year: 2012,
      fuelType: "Gasoline/Petrol",
      lotNumber: "U 6",
      engineSize: "2,000",
      mileage: 183939,
      engineCode: "1KT",
      transmission: "Automatic",
      image: "https://res.cloudinary.com/doabbpdy1/image/upload/v1755689389/car3_fir2pd.jpg"
    }
    
  ],
  loading: false,
  error: null
};

export const carListingsSlice = createSlice({
  name: 'carListings',
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.cars.push(action.payload);
    },
    updateCar: (state, action) => {
      const index = state.cars.findIndex(car => car.id === action.payload.id);
      if (index !== -1) {
        state.cars[index] = action.payload;
      }
    },
    deleteCar: (state, action) => {
      state.cars = state.cars.filter(car => car.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { addCar, updateCar, deleteCar, setLoading, setError } = carListingsSlice.actions;
export default carListingsSlice.reducer;