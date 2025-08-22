// src/components/Footer.js
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaPinterestP, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1b2351] text-white py-10 relative">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/footer_logo.webp"
            alt="Nazar Group Logo"
            className="w-32 mb-4"
          />
          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/921234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 left-5 bg-green-500 p-3 rounded-full shadow-lg"
          >
            <FaWhatsapp className="text-white text-2xl" />
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-400 font-bold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            {[
              "Home",
              "About us",
              "FAQ's",
              "Terms & Condition",
              "Privacy Policy",
              "Support",
              "Reviews",
              "Blog",
              "Contact us",
            ].map((link, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-yellow-400 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Info */}
        <div>
          <h3 className="text-yellow-400 font-bold mb-4">SOCIAL NETWORK</h3>
          <div className="flex space-x-4 mb-6">
            <FaFacebookF className="cursor-pointer hover:text-yellow-400" />
            <FaInstagram className="cursor-pointer hover:text-yellow-400" />
            <FaTiktok className="cursor-pointer hover:text-yellow-400" />
            <FaYoutube className="cursor-pointer hover:text-yellow-400" />
            <FaPinterestP className="cursor-pointer hover:text-yellow-400" />
          </div>

          {/* Opening Hours */}
          <div className="bg-white text-[#1b2351] rounded-lg p-3 mb-4 text-center">
            <h4 className="text-yellow-500 font-bold">OPENING HOURS</h4>
            <p>10:00 AM - 09:00 PM</p>
          </div>

          {/* Need Help */}
          <div className="border border-white rounded-lg p-3 text-center">
            <h4 className="text-yellow-400 font-bold">NEED HELP</h4>
            <p>📞 021-34550040</p>
            <p>✉️ info@nazarjapan.com</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <a
        href="#"
        className="fixed bottom-5 right-5 bg-yellow-400 p-3 rounded shadow-lg"
      >
        ⬆
      </a>
    </footer>
  );
}
