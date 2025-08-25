"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaTimes } from "react-icons/fa"; // ✅ Icons
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
                <Image
                  src="/nazarLogo.webp"
                  alt="Nazar Japan Motors"
                  width={180}
                  height={60}
                  priority
                />
              </Link>
            </div>

            {/* Mobile Search Icon */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="text-blue-950 lg:text-white text-sm gap-2 hover:text-yellow-400"
              >
                <FaSearch />
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-blue-950 lg:text-white hover:text-yellow-400 focus:outline-none text-2xl"
              >
                {isOpen ? "✖" : "☰"}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-yellow-400 transition-colors font-medium">Home</Link>
              <Link href="/about" className="hover:text-yellow-400 transition-colors font-medium">About</Link>
              <Link href="/faqs" className="hover:text-yellow-400 transition-colors font-medium">FAQ&apos;s</Link>
              <Link href="/blog" className="hover:text-yellow-400 transition-colors font-medium">Blog</Link>
              <Link href="/contact" className="hover:text-yellow-400 transition-colors font-medium">Contact Us</Link>
              <Link href="/login" className="hover:text-yellow-400 transition-colors font-medium">Log In</Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-blue-950">
            <div className="px-4 py-3 space-y-2 flex flex-col text-white">
              <Link href="/" className="hover:text-yellow-400 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="hover:text-yellow-400 transition-colors" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/faqs" className="hover:text-yellow-400 transition-colors" onClick={() => setIsOpen(false)}>FAQ&apos;s</Link>
              <Link href="/blog" className="hover:text-yellow-400 transition-colors" onClick={() => setIsOpen(false)}>Blog</Link>
              <Link href="/review" className="hover:text-yellow-400 transition-colors" onClick={() => setIsOpen(false)}>Reviews</Link>
              <Link href="/login" className="hover:text-yellow-400 transition-colors" onClick={() => setIsOpen(false)}>Log In</Link>
            </div>
          </div>
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
