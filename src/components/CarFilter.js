"use client";

import { useDispatch, useSelector } from "react-redux";
import { setFilter, resetFilters } from "../redux/slices/carsSlice";

export default function CarFilter({ showOnMobile = false }) {
  const dispatch = useDispatch();
  const {
    makers,
    bodyTypes,
    transmissions,
    colors,
    branches,
    fuelTypes,
    steering,
    filters,
  } = useSelector((state) => state.cars);

  const handleChange = (key, value) => {
    dispatch(setFilter({ key, value }));
  };

  return (
<div className={`${showOnMobile ? "block" : "hidden lg:block"}  mt-2 w-[230px] bg-white backdrop-blur-md    z-10`}>
     
     <div className="bg-blue-950 text-white text-center w-full py-4 px-4  mb-6">
      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-6">
        {/* Makers */}
        <select
          className="p-4 bg-white/90 rounded-xl border border-gray-300 text-gray-800 
          shadow-md focus:ring-4 focus:ring-yellow-400 focus:outline-none hover:shadow-lg transition"
          value={filters.maker}
          onChange={(e) => handleChange("maker", e.target.value)}
        >
          <option value="">Makers</option>
          {makers.map((maker) => (
            <option key={maker} value={maker}>
              {maker}
            </option>
          ))}
        </select>

        {/* Body Type */}
        <select
          className="p-4 bg-white/90 rounded-xl border border-gray-300 text-gray-800 
          shadow-md focus:ring-4 focus:ring-yellow-400 focus:outline-none hover:shadow-lg transition"
          value={filters.bodyType}
          onChange={(e) => handleChange("bodyType", e.target.value)}
        >
          <option value="">Body Type</option>
          {bodyTypes.map((body) => (
            <option key={body} value={body}>
              {body}
            </option>
          ))}
        </select>

        {/* Transmission */}
        <select
          className="p-4 bg-white/90 rounded-xl border border-gray-300 text-gray-800 
          shadow-md focus:ring-4 focus:ring-yellow-400 focus:outline-none hover:shadow-lg transition"
          value={filters.transmission}
          onChange={(e) => handleChange("transmission", e.target.value)}
        >
          <option value="">Transmission</option>
          {transmissions.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        {/* Branches */}
        <select
          className="p-4 bg-white/90 rounded-xl border border-gray-300 text-gray-800 
          shadow-md focus:ring-4 focus:ring-yellow-400 focus:outline-none hover:shadow-lg transition"
          value={filters.branch}
          onChange={(e) => handleChange("branch", e.target.value)}
        >
          <option value="">Branches</option>
          {branches.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        {/* Fuel Type */}
        <select
          className="p-4 bg-white/90 rounded-xl border border-gray-300 text-gray-800 
          shadow-md focus:ring-4 focus:ring-yellow-400 focus:outline-none hover:shadow-lg transition"
          value={filters.fuelType}
          onChange={(e) => handleChange("fuelType", e.target.value)}
        >
          <option value="">Fuel Type</option>
          {fuelTypes.map((fuel) => (
            <option key={fuel} value={fuel}>
              {fuel}
            </option>
          ))}
        </select>

        {/* Steering */}
        <select
          className="p-4 bg-white/90 rounded-xl border border-gray-300 text-gray-800 
          shadow-md focus:ring-4 focus:ring-yellow-400 focus:outline-none hover:shadow-lg transition"
          value={filters.steering}
          onChange={(e) => handleChange("steering", e.target.value)}
        >
          <option value="">Steering</option>
          {steering.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        {/* Exterior Color */}
        <select
          className="p-4 bg-white/90 rounded-xl border border-gray-300 text-gray-800 
          shadow-md focus:ring-4 focus:ring-yellow-400 focus:outline-none hover:shadow-lg transition"
          value={filters.extColor}
          onChange={(e) => handleChange("extColor", e.target.value)}
        >
          <option value="">Exterior Color</option>
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* Interior Color */}
        <select
          className="p-4 bg-white/90 rounded-xl border border-gray-300 text-gray-800 
          shadow-md focus:ring-4 focus:ring-yellow-400 focus:outline-none hover:shadow-lg transition"
          value={filters.intColor}
          onChange={(e) => handleChange("intColor", e.target.value)}
        >
          <option value="">Interior Color</option>
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-8 justify-center">
        <button className="bg-yellow-400 hover:bg-yellow-500 px-8 py-3 rounded-xl text-black font-semibold shadow-lg transition transform hover:scale-105 text-center">
          Search
        </button>
        
      </div>
      </div>
    </div>
  );
}
