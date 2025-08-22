// components/ShopByType.js
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ShopByType = () => {
  const vehicleTypes = [
    { name: "Sedan", href: "#", image: "/sedan.png" },
    { name: "SUV", href: "#", image: "/suv.png" },
    { name: "Hatchback", href: "#", image: "/hatchback.png" },
    { name: "Mini Van", href: "#", image: "/minivan.png" },
    { name: "Van", href: "#", image: "/van.png" },
    { name: "Truck", href: "#", image: "/truck.png" },
    { name: "Wagon", href: "#", image: "/vagan.png" },
    { name: "Bus", href: "#", image: "/bus.png" },
  ];

  return (
    <div className=" py-8 my-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-2xl sm:text-2xl md:text-5xl font-bold text-blue-900 mb-6 border-b-2 border-blue-900 pb-2">
          SHOP BY TYPE
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 w-100% gap-6 sm:gap-8">
          {vehicleTypes.map((type) => (
            <Link
              key={type.name}
              href={type.href}
              className="bg-white rounded-xl shadow-lg p-15 flex flex-col items-center justify-center text-center hover:bg-yellow-500 transition-colors duration-200"
            >
              {/* Image wrapper */}
              <div className="relative w-20 h-20 sm:w-20 sm:h-16 md:w-30 md:h-30 lg:w-50 lg:h-24 mb-3 p-10">
                <Image
                  src={type.image}
                  alt={type.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Name */}
              <span className="text-blue-900 font-medium text-xs sm:text-sm md:text-base">
                {type.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByType;
