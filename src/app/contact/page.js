// components/ContactCard.js
"use client";
import { Divide } from "lucide-react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactCard() {
  return (
   <div className="bg-blue-950 p-2 lg:p-20 items-center justify-center">

    <div className="px-2 text-white mb-10 text-xl lg:text-5xl font-bold">
      <h1>NAZAR GROUP OFFICE(S) IN <span className="text-yellow-500">PAKISTAN</span></h1>
    </div>
    {/* section 1 */}

     <div className="bg-white p-10 rounded-2xl shadow-lg mb-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start ">
        {/* Left Side - Info */}
        <div className="space-y-6 text-white">
          {/* Title */}
          <h2 className="text-2xl font-bold text-blue-950">
            NAZAR JAPAN MOTORS, <span className="text-yellow-500">KARACHI</span>
          </h2>

          {/* Address */}
          <div className="flex items-start gap-3 text-blue-950">
            <FaMapMarkerAlt className="text-yellow-500 mt-1" />
            <p>
              <span className="font-semibold">Pakistan Stock in Karachi</span>
              <br />
              125G Khalid Bin Walid Rd, Block 2 PECHS, Karachi, Sindh 74800
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 text-blue-950">
            <FaPhoneAlt className="text-yellow-500" />
            <a href="tel:+922134774054" className="hover:underline">
              (021) 34774054
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 text-blue-950">
            <FaEnvelope className="text-yellow-500" />
            <a href="mailto:info@nazarjapan.com" className="hover:underline">
              info@nazarjapan.com
            </a>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-2 gap-4 text-sm text-blue-950">
            <div>
              <p className="font-semibold">Ehsanullah</p>
              <p>Sales Manager</p>
              <a href="tel:+923108447067" className="hover:underline">
                +92 310 8447067
              </a>
            </div>
            <div>
              <p className="font-semibold">Shams Khan</p>
              <p>Sales Executive</p>
              <a href="tel:+923108646790" className="hover:underline">
                +92 310 8646790
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Google Map */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.767501647072!2d67.05304867604728!3d24.87178914480281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e8dcb9a6181%3A0x4592db7885d49602!2s125g%20Khalid%20Bin%20Walid%20Rd%2C%20Block%202%20PECHS%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2074800%2C%20Pakistan!5e0!3m2!1sen!2s!4v1730183803511!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>

    {/* section 2 */}

    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start ">
        {/* Left Side - Info */}
        <div className="space-y-6 text-white">
          {/* Title */}
          <h2 className="text-2xl font-bold text-blue-950">
            NAZAR JAPAN MOTORS, <span className="text-yellow-500">LAHORE</span>
          </h2>

          {/* Address */}
          <div className="flex items-start gap-3 text-blue-950">
            <FaMapMarkerAlt className="text-yellow-500 mt-1" />
            <p>
              <span className="font-semibold">Pakistan Stock in Lahore</span>
              <br />
              32 main Jail Rd, Mozang Chungi, Lahore, Punjab 54000
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 text-blue-950">
            <FaPhoneAlt className="text-yellow-500" />
            <a href="tel:+922134774054" className="hover:underline">
              (042) 37426300
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 text-blue-950">
            <FaEnvelope className="text-yellow-500" />
            <a href="mailto:info@nazarjapan.com" className="hover:underline">
              info@nazarjapan.com
            </a>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-2 gap-4 text-sm text-blue-950">
            <div>
              <p className="font-semibold">Ali Shah</p>
              <p>Sales Manager</p>
              <a href="tel:+923108447067" className="hover:underline">
                +92 311 8000136
              </a>
            </div>
            <div>
              <p className="font-semibold">Muhammad Khalid</p>
              <p>Sales Executive</p>
              <a href="tel:+923108646790" className="hover:underline">
                +92 322 1400100
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Google Map */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13600.976634037757!2d74.3197932!3d31.5449133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905002e421169%3A0xeb407abd6e784434!2sNazar%20Japan%20Motors!5e0!3m2!1sen!2s!4v1731398237778!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>

    {/* section 3 */}

    <div className="bg-white p-6 rounded-2xl shadow-lg pt-5 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start ">
        {/* Left Side - Info */}
        <div className="space-y-6 text-white">
          {/* Title */}
          <h2 className="text-2xl font-bold text-blue-950">
            NAZAR JAPAN MOTORS, <span className="text-yellow-500">KARACHI</span>
          </h2>

          {/* Address */}
          <div className="flex items-start gap-3 text-blue-950">
            <FaMapMarkerAlt className="text-yellow-500 mt-1" />
            <p>
              <span className="font-semibold">Pakistan Stock in Karachi</span>
              <br />
              Sector 8-B Gulzar E Hijri Scheme 33, Near Maymar Mor, Main Super Highway, Karachi
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 text-blue-950">
            <FaPhoneAlt className="text-yellow-500" />
            <a href="tel:+922134774054" className="hover:underline">
              +92 309 9386705
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 text-blue-950">
            <FaEnvelope className="text-yellow-500" />
            <a href="mailto:info@nazarjapan.com" className="hover:underline">
              info@nazarjapan.com
            </a>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-2 gap-4 text-sm text-blue-950">
            <div>
              <p className="font-semibold">Ali Shah</p>
              <p>Sales Manager</p>
              <a href="tel:+923108447067" className="hover:underline">
                +92 309 9386705
              </a>
            </div>
            <div>
              <p className="font-semibold">Abdul Kahar</p>
              <p>Sales Executive</p>
              <a href="tel:+923108646790" className="hover:underline">
                +92 313 7573080
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Google Map */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.3372250224784!2d67.1318589!3d24.988654699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b98a692072f%3A0x3961d11f1b7b6030!2sNazar%20Japan%20Motors!5e0!3m2!1sen!2s!4v1746771530112!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
   </div>
  );
}
