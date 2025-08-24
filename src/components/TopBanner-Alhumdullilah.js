"use client";

import { 
  FaFacebookF, 
  FaInstagram, 
  FaTiktok, 
  FaYoutube, 
  FaPinterestP, 
  FaPhone, 
  FaEnvelope, 
  FaClock 
} from "react-icons/fa";

export default function TopBanner() {
  return (
    <div className="hidden lg:flex w-full bg-white text-blue-950 px-6 py-3 items-center justify-between text-sm shadow">
      
      {/* Left Side - Contact Info */}
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-1  text-sm">
          <FaPhone /> +92 300 1234567
        </span>
        <span className="flex items-center gap-1 px-7 text-sm">
          <FaEnvelope /> info@example.com
        </span>
        <span className="flex items-center gap-1 text-sm">
          <FaClock /> Mon - Sat: 9am - 6pm
        </span>
      </div>

      {/* Right Side - Social Media Icons */}
      <div className="flex items-center gap-4">
        <a href="#" className="hover:scale-110 transition">
          <FaFacebookF className="text-blue-600 text-lg" />
        </a>
        <a href="#" className="hover:scale-110 transition">
          <FaInstagram className="text-pink-500 text-lg" />
        </a>
        <a href="#" className="hover:scale-110 transition">
          <FaTiktok className="text-black bg-white rounded-full text-lg" />
        </a>
        <a href="#" className="hover:scale-110 transition">
          <FaYoutube className="text-red-600 text-lg" />
        </a>
        <a href="#" className="hover:scale-110 transition">
          <FaPinterestP className="text-red-500 text-lg" />
        </a>
      </div>
    </div>
  );
}
