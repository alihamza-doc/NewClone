"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:bg-blue-950  text-blue-950 lg:text-white p-4 bg-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-blue-950 lg:text-white">
            <Link href="/">
              <Image
                src="/nazarLogo.webp" // 👈 put your logo inside public/logo.png
                alt="Nazar Japan Motors"
                width={250}
                height={70}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="hover:text-yellow-400 transition-colors  font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-yellow-400 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/faqs"
              className="hover:text-yellow-400 transition-colors font-medium"
            >
              FAQ's
            </Link>
            <Link
              href="/blog"
              className="hover:text-yellow-400 transition-colors  font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:text-yellow-400 transition-colors font-medium"
            >
              Contact Us
            </Link>
            <Link
              href="/login"
              className="hover:text-yellow-400 transition-colors font-medium"
            >
              Log In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-950 lg:text-white hover:text-yellow-400 focus:outline-none text-2xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-950">
          <div className="px-4 py-3 space-y-2 flex flex-col  text-white">
            <Link
              href="/"
              className=" hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/faqs"
              className="hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ&apos;s
            </Link>
            <Link
              href="/blog"
              className="hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/review"
              className="hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/login"
              className="hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Log In 
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
