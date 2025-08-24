"use client";
import React from "react";
import CarFilter from "../components/CarFilter.js";
import CarListings from "../components/CarListings.js";
import CarBrands from "../components/CarBrands";
import ShopByType from "../components/ShopByType.js";
import Image from "next/image";
import { Mail, Phone } from "lucide-react"; // icons

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center ">
      <CarFilter />

      <CarListings />

      <ShopByType />

      <CarBrands />

      {/* banner of quality */}

      <div className="bg-blue-950 text-white p-5 lg:p-20 mt-5 w-[100%]">
        <h1 className="text-white text-xl lg:text-5xl font-bold">WHY CHOOSE</h1>
        <h1 className="text-yellow-400 lg:text-5xl font-bold">
          NAZAR JAPAN MOTORS?
        </h1>
        <p className="text-white text-sm lg:text-xl">
          Driven by Trust, Powered by Quality.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10 ">
          {/* Card 1 */}
          <div className="bg-white p-2 py-6 rounded-sm text-blue-950 flex items-center">
            <div className="w-[20%] flex justify-center ">
              <img src="/1.png" alt="certificate" className="w-25 h-18" />
            </div>

            <div className="w-[80%] pl-3">
              <p className="font-semibold text-2xl ">100% Genuine Japanese Cars</p>
              <p className="text-xl">
                Direct imports with original auction reports
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-2 py-6 rounded-sm text-blue-950 flex items-center">
            <div className="w-[20%] flex justify-center">
              <img src="/2.png" alt="star" className="w-25 h-18" />
            </div>
            <div className="w-[80%] pl-3">
              <p className="font-semibold text-2xl">Best Prices</p>
              <p className="text-xl">Affordable rates on all models</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-2 py-6 rounded-sm text-blue-950 flex items-center">
            <div className="w-[20%] flex justify-center">
              <img src="/3.png" alt="fuel" className="w-25 h-18" />
            </div>
            <div className="w-[80%] pl-3">
              <p className="font-semibold text-2xl">Latest Models & Hybrid Options</p>
              <p className="text-xl">Fuel-efficient cars available</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-2 py-6 rounded-sm text-blue-950 flex items-center">
            <div className="w-[20%] flex justify-center">
              <img src="/4.png" alt="delivery" className="w-25 h-18" />
            </div>
            <div className="w-[80%] pl-3">
              <p className="font-semibold text-2xl">Nationwide Delivery</p>
              <p className="text-xl">
                Karachi, Lahore, Islamabad, and across Pakistan
              </p>
            </div>
          </div>

          {/* Card 5 */}
          {/* Card 5 */}
          {/* Card 5 */}
<div className="bg-white p-2 py-6 rounded-sm text-blue-950 flex items-center w-full sm:w-full lg:w-50%">
  <div className="w-[20%] flex justify-center">
    <img src="/5.png" alt="users" className="w-25 h-18" />
  </div>
  <div className="w-[80%] pl-3">
    <p className="font-semibold text-2xl">Trusted by 1000+ Customers</p>
    <p className="text-xl">
      Excellent reviews on Facebook, Instagram, and YouTube
    </p>
  </div>
</div>

        </div>

        <button className="bg-yellow-400 text-white text-2xl  px-6 py-2 rounded-lg mt-10 hover:bg-yellow-500">
          Contact us
        </button>
      </div>

      {/* more description */}

      <div className=" text-white  mt-5 w-[100%] py-10 ">
        <h1 className="text-blue-950 text-xl lg:text-5xl font-bold">
          FIND YOUR PERFECT
        </h1>
        <h1 className="text-yellow-300 text-xl lg:text-5xl text-2xl font-bold">
         JAPANESE CAR
        </h1>
        <p className="text-blue-950 text-xl py-5">
          We offer a wide selection of imported cars in Pakistan, including:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10">
          {/* Card 1 */}
          <div className="bg-blue-950  p-2 rounded-sm text-white flex items-center">
            <div className="w-[20%] flex justify-center">
              <img src="/toyota.png" alt="certificate" className="w-18 h-20" />
            </div>

            <div className="w-[80%] pl-3">
              <p className="font-semibold text-2xl">Toyota Cars</p>
              <p className="text-xl">Passo, Prius, Aqua, Yaris, Raize</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-950 p-2 rounded-sm text-white flex items-center">
            <div className="w-[20%] flex justify-center">
              <img src="/honda.png" alt="fuel" className="w-18 h-15" />
            </div>
            <div className="w-[80%] pl-3">
              <p className="font-semibold text-2xl">Honda Cars</p>
              <p className="text-xl">N box , N one , N WGN</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-yellow-400 p-2 rounded-sm text-blue-950 flex items-center">
            <div className="w-[20%] flex justify-center">
              <img src="/nissan.png" alt="star" className="w-18 h-15" />
            </div>
            <div className="w-[80%] pl-3">
              <p className="font-semibold text-2xl">Nissan Cars</p>
              <p className="text-xl">Note, Roox, Clipper, Dayz</p>
            </div>
          </div>
          

          {/* Card 4 */}
          <div className="bg-yellow-400 p-2 rounded-sm text-blue-950 flex items-center">
            <div className="w-[20%] flex justify-center">
              <img src="/suzuki.png" alt="delivery" className="w-18 h-15" />
            </div>
            <div className="w-[80%] pl-3">
              <p className="font-semibold text-2xl">Suzuki Cars</p>
              <p className="text-xl">Alto, Jimny, Wagon R, Every Van</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-blue-950 w-[50%] p-2 rounded-sm text-white flex items-center  w-full sm:w-full lg:w-50%">
            <div className="w-[20%] flex justify-center">
              <img src="/daihatsu.png" alt="users" className="w-18 h-15" />
            </div>
            <div className="w-[80%] pl-3">
              <p className="font-semibold text-2xl">Daihatsu Cars</p>
              <p className="text-xl">Boon, Tanto , Hijet , Mira Tocot</p>
            </div>
          </div>
        </div>

        
      </div>

      {/* next banner */}

      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[580px] mt-5 ">
        {/* Background Image */}
        <Image src="/bannerImg.png" alt="Cars" fill className="object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-950/70 z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex items-center h-full px-6 md:px-20">
          <div className="text-white">
            <h2 className="text-yellow-400 font-sm text-xl md:text-5xl pt-10">
              CONTACT US
            </h2>
            <h1 className="text-2xl md:text-5xl font-sm leading-snug">
              BUY YOUR DREAM CAR 
            </h1>
            <h1 className="text-2xl md:text-5xl font-sm leading-snug">TODAY!</h1>

            <div className="mt-6 space-y-3">
              <div>
                <p className="text-yellow-400 font-semibold lg:text-3xl pt-6 ">CALL US:</p>
                <p className="lg:text-3xl">021-34550040</p>
              </div>
              <div>
                <p className="text-yellow-400 font-semibold lg:text-3xl pt-8">EMAIL:</p>
                <p className="lg:text-3xl">info@nazarjapan.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* last descriptions  */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto text-gray-800">
          {/* Heading */}
          <h1 className="text-2xl md:text-2xl font-bold text-blue-900 mb-4">
            Buy Japanese Used Cars in Pakistan – Best Prices & Quality
          </h1>
          <p className="mb-10">
            Nazar Japan Motors, your trusted destination for Japanese used cars
            in Pakistan. We import high-quality{" "}
            <span className="font-semibold">
              Toyota, Honda, Suzuki, Nissan, Daihatsu, Mitsubishi,
            </span>{" "}
            and <span className="font-semibold">Subaru</span> cars directly from
            Japan, ensuring verified auction sheets and the best deals.
          </p>

          {/* Why Choose */}
          <h2 className="text-xl font-bold text-blue-900 mb-4">
            Why Choose Nazar Japan Motors?
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-10">
            <li>
              <span className="font-semibold">100% Genuine Japanese Cars</span>{" "}
              – Direct imports with original auction reports
            </li>
            <li>
              <span className="font-semibold">Best Prices</span> – Affordable
              rates on all models
            </li>
            <li>
              <span className="font-semibold">
                Latest Models & Hybrid Options
              </span>{" "}
              – Fuel-efficient cars available
            </li>
            <li>
              <span className="font-semibold">Nationwide Delivery</span> –
              Karachi, Lahore, Islamabad, and across Pakistan
            </li>
            <li>
              <span className="font-semibold">Trusted by 1000+ Customers</span>{" "}
              – Excellent reviews on Facebook, Instagram, and YouTube
            </li>
          </ul>

          {/* Car List */}
          <h2 className="text-xl font-bold text-blue-900 mb-4">
            Find Your Perfect Japanese Car
          </h2>
          <p className="mb-4">
            We offer a wide selection of imported cars in Pakistan, including:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-10">
            <li>
              <span className="font-semibold">Toyota Cars</span> – Passo, Prius,
              Aqua, Yaris, Raize
            </li>
            <li>
              <span className="font-semibold">Nissan Cars</span> – Note, Roox,
              Clipper, Dayz
            </li>
            <li>
              <span className="font-semibold">Honda Cars</span> – N Box, N One,
              N WGN
            </li>
            <li>
              <span className="font-semibold">Suzuki Cars</span> – Alto, Jimny,
              Wagon R, Every
            </li>
            <li>
              <span className="font-semibold">Daihatsu Cars</span> – Boon,
              Tanto, Hijet, Mira Tocot
            </li>
          </ul>

          {/* Contact */}
          <h2 className="text-xl font-bold text-blue-900 mb-4">
            Contact Us – Buy Your Dream Car Today!
          </h2>
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-yellow-500" />
              Call Us: +92-21-34550040
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-yellow-500" />
              Email: info@nazarjapan.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
