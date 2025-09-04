"use client";
import { useState, useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGasPump,
  faLocationDot,
  faCogs,
  faRoad,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import { FaThLarge, FaList } from "react-icons/fa";
import { fetchCars } from "../redux/slices/carListingsSlice"; // ✅ import thunk

const CarCards = () => {
  const dispatch = useDispatch();
  const { cars, loading, error } = useSelector((state) => state.carListings);

  const [sortOrder, setSortOrder] = useState("ASC");
  const [Branch, setBranch] = useState("Branch");
  const [view, setView] = useState("grid");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  // ✅ Fetch cars from API when component mounts
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  // ✅ Sort cars (frontend sorting)
  const sortedCars = [...cars].sort((a, b) =>
    sortOrder === "ASC" ? a.year - b.year : b.year - a.year
  );

  // Calculate cars to display
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = sortedCars.slice(indexOfFirstCar, indexOfLastCar);

  // Total pages
  const totalPages = Math.ceil(sortedCars.length / carsPerPage);

  if (loading) {
    return <p className="text-center py-10 text-lg">Loading cars...</p>;
  }

  if (error) {
    return (
      <p className="text-center py-10 text-lg text-red-500">
        Failed to load cars: {error}
      </p>
    );
  }

  return (
    <>
      {/* Branches selection Area */}
      <div className="block sm:hidden container-fluid w-full flex gap-2 py-5 bg-yellow-400 ">
        <h1 className="p-3 font-semibold text-blue-950 px-5 ">Branches:</h1>
        <select
          value={Branch}
          onChange={(e) => setBranch(e.target.value)}
          className="border rounded-md px-15 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white "
        >
          <option className="text-sm lg:text-2xl" value="Khalid Bin Waleed">
            Branches
          </option>
          <option className="text-sm lg:text-2xl" value="Jailroad">
            Jailroad
          </option>
        </select>
      </div>

      {/* desktop view with heading */}
      <div className="w-full px-2 pt-6 py-4 flex flex-col md:flex-row items-center justify-between bg-yellow-400 lg:bg-white">
        <div className="hidden md:block">
          <h2 className="text-blue-950 text-4xl font-light pb-2">
            REFRESH YOUR DRIVE
          </h2>
          <h1 className="text-4xl font-bold text-blue-950">
            FIND YOUR PERFECT CAR TODAY
          </h1>
        </div>

        {/* Right Side - Sort & Icons */}
        <div className="flex items-center gap-3 mt-3 md:mt-0 flex-nowrap">
          <span className="p-2 font-semibold text-blue-950 whitespace-nowrap flex-shrink-0">
            Sort by:
          </span>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white "
          >
            <option value="ASC">ASC</option>
            <option value="DESC">DESC</option>
          </select>

          <button
            className={`p-2 rounded-md border ${view === "grid"
                ? "bg-yellow-400 border-black"
                : "border-black"
              }`}
            onClick={() => setView("grid")}
          >
            <FaThLarge />
          </button>

          <button
            className={`p-2 rounded-md border ${view === "list"
                ? "bg-yellow-400 border-black"
                : "border-black"
              }`}
            onClick={() => setView("list")}
          >
            <FaList />
          </button>
        </div>
      </div>

      {/* cards display for cars */}
      <div
        className={`${view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
            : "grid grid-cols-1 sm:grid-cols-2 gap-6   "
          } p-2 lg:p-0 bg-yellow-400 lg:bg-white w-full lg:mt-5`}
      >
        {currentCars.map((car) => (
          <div
            key={car.id}
            className={`border border-gray-200 rounded-xl overflow-hidden bg-white shadow-md transition hover:shadow-lg ${view === "list" ? "flex flex-row" : "flex flex-col"
              }`}
          >
            {/* Car Image */}
            <div
              className={`relative ${view === "list"
                  ? "w-3/4 h-[200px]" // image takes 1/3 width in list view
                  : "w-full h-[280px] sm:h-[220px] md:h-[160px]" // full width in grid view
                }`}
            >
              <Image
                src={car.image}
                alt={`${car.brand} ${car.model} ${car.year}`}
                fill
                className="object-cover"
              />
            </div>

            {/* Car Details */}
            <div
              className={`p-4 flex flex-col flex-grow ${view === "list" ? "w-2/3" : ""
                }`}
            >
              <h3 className="text-base md:text-base font-semibold text-gray-800">
                {car.brand?.toUpperCase()} / {car.model?.toUpperCase()}
              </h3>
              <p className="text-blue-900 font-bold text-xs sm:text-sm">
                Model {car.year}
              </p>

              <div className="mt-3 space-y-2 text-xs sm:text-xs">
                <div className="flex items-center gap-2 text-gray-700">
                  <FontAwesomeIcon icon={faCogs} className="w-4 h-4 text-yellow-500" />
                  <span>{car.package || "XL Package"}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FontAwesomeIcon icon={faGasPump} className="w-4 h-4 text-yellow-500" />
                  <span>{car.fuelType}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-4 h-4 text-yellow-500"
                  />
                  <span>{car.location || "KARACHI (Khalid Bin Walid)"}</span>
                </div>
              </div>

              <hr className="my-3 border-t border-yellow-400" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-xs sm:text-xs text-gray-700 gap-3">
                <div className="flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                  <FontAwesomeIcon icon={faCogs} className="w-4 h-4 text-yellow-500" />
                  <span>{car.engineSize} CC</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                  <FontAwesomeIcon icon={faRoad} className="w-4 h-4 text-yellow-500" />
                  <span>{car.mileage?.toLocaleString()} KM</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <FontAwesomeIcon icon={faGears} className="w-4 h-4 text-yellow-500" />
                  <span>{car.transmission}</span>
                </div>
              </div>
            </div>

            {/* ✅ Buttons only in GRID view */}
            {view === "grid" && (
              <div className="flex p-1 gap-3">
                <button className="w-full py-2 text-xs sm:text-base xl:text-xs bg-blue-950 text-white font-light rounded-full hover:bg-blue-900 transition-colors">
                  View Details
                </button>
                <button className="w-full py-2 text-xs sm:text-base xl:text-xs bg-blue-950 text-white font-light rounded-full hover:bg-blue-900 transition-colors">
                  Quick View
                </button>
              </div>
            )}
          </div>

        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 py-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`w-10 h-10 flex items-center justify-center rounded-full ${currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-yellow-400 text-white hover:bg-yellow-500"
            }`}
        >
          «
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${currentPage === index + 1
                ? "bg-yellow-400 text-white"
                : "bg-yellow-400 text-white hover:bg-yellow-500"
              }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`w-10 h-10 flex items-center justify-center rounded-full ${currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-yellow-400 text-white hover:bg-yellow-500"
            }`}
        >
          »
        </button>
      </div>
    </>
  );
};

export default CarCards;
