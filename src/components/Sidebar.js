"use client";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function Sidebar() {
  const [hoveredMake, setHoveredMake] = useState(null);

  // ✅ Company logos with cars
  const carData = {
    TOYOTA: {
      logo: "/TOYOTA.webp",
      cars: ["Corolla", "Camry", "Land Cruiser", "Yaris"],
    },
    NISSAN: {
      logo: "/NISSAN.webp",
      cars: ["Sunny", "Note", "X-Trail"],
    },
    HONDA: {
      logo: "/HONDA.webp",
      cars: ["Civic", "City", "Vezel"],
    },
    MITSUBISHI: {
      logo: "/MITSUBISHI.webp",
      cars: ["Pajero", "Outlander"],
    },
    SUBARU: {
      logo: "/SUBARU.webp",
      cars: ["Impreza", "Forester"],
    },
    MAZDA: {
      logo: "/MAZDA.webp",
      cars: ["CX-5", "Demio"],
    },
    SUZUKI: {
      logo: "/SUZUKI.webp",
      cars: ["Alto", "Wagon R", "Swift"],
    },
    DAIHATSU: {
      logo: "/DAIHATSU.webp",
      cars: ["Mira", "Move"],
    },
  };

  // ✅ Body Types with icons
  const bodyTypes = [
    { name: "HATCHBACK", img: "/hatchback.webp" },
    { name: "MINI VAN", img: "/minivan.webp" },
    { name: "S WAGON", img: "/station-wagon.webp" },
    { name: "SUV", img: "/SUV.webp" },
    { name: "T WAGON", img: "/t-wagon.webp" },
    { name: "VAN", img: "/van.webp" },
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
              <img src={carData[make].logo} alt={make} className="w-9 h-6" />
              <span>{make}</span>
            </div>
            <FaChevronRight size={14} />

            {/* Hover dropdown */}
            {hoveredMake === make && (
              <ul className="absolute left-full top-0 w-48 bg-white shadow-lg border">
                {carData[make].cars.map((car, i) => (
                  <li
                    key={i}
                    className="px-3 py-2 bg-black text-white hover:bg-yellow-500 hover:text-black cursor-pointer"
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
            <img src={body.img} alt={body.name} className="w-8 h-6" />
            <span>{body.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
