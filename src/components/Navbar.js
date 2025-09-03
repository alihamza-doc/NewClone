"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaTimes, FaChevronDown } from "react-icons/fa"; // ✅ Icons
import Filter from "../components/CarFilterForMob.js"; // ✅ your Filter component

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // ✅ Filter state

  return (
    <>
      <nav className="lg:bg-blue-950 text-blue-950 lg:text-white p-4 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 text-blue-950 lg:text-white">
              <Link href="/">
                {/* Mobile Logo */}
                <Image
                  src="/LogoMobile.png"
                  alt="Nazar Japan Motors"
                  width={200}
                  height={40}
                  priority
                  className="md:hidden"
                />
                {/* Desktop Logo */}
                <Image
                  src="/nazarLogo.webp"
                  alt="Nazar Japan Motors"
                  width={300}
                  height={60}
                  priority
                  className="hidden md:block"
                />
              </Link>
            </div>

            {/* Mobile Search Icon */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="text-blue-950 lg:text-white gap-3 hover:text-yellow-400 text-sm"
              >
                <FaSearch />
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-blue-950 lg:text-white hover:text-yellow-400 focus:outline-none text-3xl"
              >
                {isOpen ? "✖" : "☰"}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-yellow-400 transition-colors font-normal">Home</Link>
              
                             {/* About Dropdown */}
               <div className="relative group">
                 <div className="flex items-center space-x-1 hover:text-yellow-400 transition-colors font-normal">
                   <Link href="/about" className="hover:text-yellow-400 transition-colors font-normal">
                     About
                   </Link>
                   <FaChevronDown className="text-sm" />
                 </div>
                 {/* Dropdown Menu */}
                 <div className="absolute top-full left-0 mt-2  w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                   <div className="py-">
                     <Link href="/about" className="block px-4 py-3 bg-blue-950 hover:text-yellow-400 transition-colors text-sm">
                       Our View
                     </Link>
                     <Link href="/our-process" className="block px-4 py-3 bg-blue-950 hover:text-yellow-400 transition-colors text-sm">
                       Our Process
                     </Link>
                   </div>
                 </div>
               </div>
              
              <Link href="/faqs" className="hover:text-yellow-400 transition-colors font-normal">FAQ&apos;s</Link>
              <Link href="/blog" className="hover:text-yellow-400 transition-colors font-normal">Blog</Link>
              <Link href="/contact" className="hover:text-yellow-400 transition-colors font-normal">Contact Us</Link>
              <Link href="/sign-in" className="hover:text-yellow-400 transition-colors font-normal">Log In</Link>
            </div>
          </div>
        </div>

      {/* Mobile Menu Slide-in Panel */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-4/5 bg-blue-950 shadow-lg transform transition-transform duration-300 z-50 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="px-4 py-3 space-y-2 flex flex-col text-white h-full">
          
          <Link href="/" className="hover:text-yellow-400 transition-colors py-2" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-yellow-400 transition-colors py-2" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/about" className="hover:text-yellow-400 transition-colors py-2 pl-4" onClick={() => setIsOpen(false)}>Our View</Link>
          <Link href="/our-process" className="hover:text-yellow-400 transition-colors py-2 pl-4" onClick={() => setIsOpen(false)}>Our Process</Link>
          <Link href="/faqs" className="hover:text-yellow-400 transition-colors py-2" onClick={() => setIsOpen(false)}>FAQ&apos;s</Link>
          <Link href="/blog" className="hover:text-yellow-400 transition-colors py-2" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/contact" className="hover:text-yellow-400 transition-colors py-2" onClick={() => setIsOpen(false)}>Contant Us</Link>
          <Link href="/sign-in" className="hover:text-yellow-400 transition-colors py-2" onClick={() => setIsOpen(false)}>Log In</Link>
        </div>
      </div>

      {/* Overlay for mobile menu - auto-close on click */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      </nav>

      {/* ✅ Mobile Left Slide-in Filter Panel */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-4/5 overflow-y-auto shadow-lg transform transition-transform duration-300 z-50 
        ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ backgroundColor: 'rgba(32,38,88, 0.80)' }}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsFilterOpen(false)} className="text-2xl text-white hover:text-red-500">
            <FaTimes />
          </button>
        </div>

        {/* ✅ Filter Component (mobile variant) */}
        <div className="p-4">
          <Filter showOnMobile={true} />
        </div>
      </div>

      {/* ✅ Overlay when filter is open */}
      {isFilterOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsFilterOpen(false)}
        />
      )}
    </>
  );
}
