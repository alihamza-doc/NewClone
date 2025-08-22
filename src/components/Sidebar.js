"use client";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function Sidebar() {
  const [hoveredMake, setHoveredMake] = useState(null);

  // ✅ Company logos with cars
  const carData = {
    TOYOTA: {
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.png",
      cars: ["Corolla", "Camry", "Land Cruiser", "Yaris"],
    },
    NISSAN: {
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Nissan_logo.png",
      cars: ["Sunny", "Note", "X-Trail"],
    },
    HONDA: {
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda-logo.png",
      cars: ["Civic", "City", "Vezel"],
    },
    MITSUBISHI: {
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Mitsubishi_logo.png",
      cars: ["Pajero", "Outlander"],
    },
    SUBARU: {
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Subaru_logo.png",
      cars: ["Impreza", "Forester"],
    },
    MAZDA: {
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Mazda_logo.png",
      cars: ["CX-5", "Demio"],
    },
    SUZUKI: {
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/71/Suzuki_logo.png",
      cars: ["Alto", "Wagon R", "Swift"],
    },
    DAIHATSU: {
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Daihatsu_logo.png",
      cars: ["Mira", "Move"],
    },
  };

  // ✅ Body Types with icons
  const bodyTypes = [
    { name: "HATCHBACK", img: "https://img.icons8.com/color/48/hatchback.png" },
    { name: "MINI VAN", img: "https://img.icons8.com/color/48/minivan.png" },
    { name: "S WAGON", img: "https://img.icons8.com/color/48/station-wagon.png" },
    { name: "SUV", img: "https://img.icons8.com/color/48/suv.png" },
    { name: "T WAGON", img: "https://img.icons8.com/color/48/trailer.png" },
    { name: "VAN", img: "https://img.icons8.com/color/48/van.png" },
  ];

  return (
    // ⬇️ only show on lg+ screens
    <div className="hidden lg:block w-50 bg-white border-white my-2 mx-2 rounded z-50">
      {/* Make / Model */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-4 py-2">
        Make/Model
      </div>
      <ul>
        {Object.keys(carData).map((make, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center px-4 py-2 bg-white text-black hover:bg-black hover:text-white relative cursor-pointer"
            onMouseEnter={() => setHoveredMake(make)}
            onMouseLeave={() => setHoveredMake(null)}
          >
            <div className="flex items-center gap-2">
              <img src={carData[make].logo} alt={make} className="w-6 h-6" />
              <span>{make}</span>
            </div>
            <FaChevronRight size={14} />

            {/* Hover dropdown */}
            {hoveredMake === make && (
              <ul className="absolute left-full top-0 w-48 bg-white shadow-lg border">
                {carData[make].cars.map((car, i) => (
                  <li
                    key={i}
                    className="px-3 py-2 bg-white text-black hover:bg-black hover:text-white cursor-pointer"
                  >
                    {car}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Body Types */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-4 py-2 mt-4">
        Body Types
      </div>
      <ul>
        {bodyTypes.map((body, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 px-4 py-2 border-b hover:bg-gray-100 cursor-pointer"
          >
            <img src={body.img} alt={body.name} className="w-6 h-6" />
            <span>{body.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
