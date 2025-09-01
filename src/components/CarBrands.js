// components/ShopByType.js
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ShopByType = () => {
  const vehicleBrands = [
    { name: 'toyota', href: '#', image: '/toyota.png'},
    { name: 'nissan', href: '#', image: '/nissan.png' },
    { name: 'honda', href: '#', image: '/honda.png' },
    { name: 'Mitsubishi', href: '#', image: '/mitsubi.png' },
    { name: 'saburu', href: '#', image: '/suburu.png' },
    { name: 'mazda', href: '#', image: '/mazda.png' },
    { name: 'suzuki', href: '#', image: '/suzuki.png' },
    { name: 'daihatsu', href: '#', image: '/daihatsu.png' },
  ];

  return (
    <div className="bg-yellow-400 py-6 my-7">
      <div className="container mx-auto px-10">
        <h2 className="flex text-xl lg:text-6xl font-bold mb-6 border-b-2 border-blue-900 pb-5 text-blue-900">
  CHOOSE BY<span className="text-white px-2">MAKE/MODEL</span>
</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {vehicleBrands.map((type) => (
            <Link
              key={type.name}
              href={type.href}
              className="bg-white rounded-lg shadow-md p-4 px-6 flex flex-col items-center justify-center text-center  transition-colors duration-200"
            >
              {/* Responsive image container */}
              <div className="w-20 h-16 sm:w-24 sm:h-20 md:w-38 md:h-30 mb-2 mt-2 relative">
                <Image
                  src={type.image}
                  alt={type.name}
                  fill
                  className="object-contain"
                />
              </div>
              {/* <span className="text-blue-900 font-medium text-sm sm:text-base">
                {type.name}
              </span> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByType;
