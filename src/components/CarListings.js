// components/CarCards.js
"use client";

import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGasPump,
  faLocationDot,
  faCogs,
  faRoad,
  faGears,
} from "@fortawesome/free-solid-svg-icons";

const CarCards = () => {
  const cars = useSelector((state) => state.carListings.cars);

  return (
    <div className="grid grid-cols-2 w-full sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
      {cars.map((car) => (
        <div
          key={car.id}
          className="flex flex-col w-full border border-gray-200 rounded-xl overflow-hidden bg-white shadow-md transition hover:shadow-lg"
        >
          {/* Car Image */}
          <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px]">
            <Image
              src={car.image}
              alt={`${car.brand} ${car.model} ${car.year}`}
              fill
              className="object-cover"
            />
          </div>

          {/* Car Details */}
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-base md:text-lg font-semibold text-gray-800">
              {car.brand.toUpperCase()} / {car.model.toUpperCase()}
            </h3>
            <p className="text-blue-900 font-bold text-xs sm:text-sm">
              Model {car.year}
            </p>

            {/* Features */}
            <div className="mt-3 space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <FontAwesomeIcon icon={faCogs} className="w-4 h-4 text-yellow-500" />
                <span>{car.package || "XL Package"}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FontAwesomeIcon icon={faGasPump} className="w-4 h-4 text-yellow-500" />
                <span>{car.fuelType}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 text-yellow-500" />
                <span>{car.location || "KARACHI (Khalid Bin Walid)"}</span>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-3 border-t border-yellow-400" />

            {/* Engine & Mileage */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 text-xs sm:text-sm text-gray-700">
              <div className="flex items-center gap-1 sm:gap-2">
                <FontAwesomeIcon icon={faCogs} className="w-4 h-4 text-yellow-500" />
                <span>{car.engineSize} CC</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <FontAwesomeIcon icon={faRoad} className="w-4 h-4 text-yellow-500" />
                <span>{car.mileage.toLocaleString()} KM</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <FontAwesomeIcon icon={faGears} className="w-4 h-4 text-yellow-500" />
                <span>{car.transmission}</span>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="p-4">
            <button className="w-full py-2 text-sm sm:text-base bg-blue-950 text-white font-semibold rounded-full hover:bg-blue-900 transition-colors">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarCards;
