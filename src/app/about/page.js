import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function AboutPage() {
  return (
    <div className={montserrat.className}>
      <section className="relative min-h-screen">
        {/* Background image (full screen without cutting) */}
        <div className="absolute inset-0 bg-[url('/AboutUs1.png')] bg-contain bg-no-repeat bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950   to-transparent"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Left column with readable text over image */}
            <div className="p-0 md:p-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-yellow-400 mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                ABOUT
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                NAZAR JAPAN
              </h2>
              <p className="font-normal text-white/95 text-xl leading-relaxed mb-4 drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)] max-w-prose">
                Nazar Japan is your premier destination for superior used
                Japanese cars, tires, and electronics. Since our inception in
                1999, we have proudly operated from the bustling city of Kobe,
                Japan, serving as a cornerstone in the export industry of
                top-quality Japanese goods.
              </p>
              <button className="inline-block text-white font-bold px-12 py-3 rounded-md border border-white/80 drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)] border-yellow-500 transition-colors">
                CONTACT NOW
              </button>
            </div>

            {/* Right column (reserved for future content) */}
            <div></div>
          </div>
        </div>
      </section>

      <div className="bg-yellow-400 lg:bg-white">
        {/* about us 1st details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 py-8 md:py-12 lg:py-16">
          <div className="px-4 md:px-8 lg:px-12">
            <h3 className="text-blue-950 text-xl md:text-2xl font-semibold">
              COMMITMENT TO QUALITY
            </h3>

            {/* mobile image */}
            <div className="py-6 block lg:hidden">
              <img
                src="/aboutus2.png"
                alt=""
                className="rounded-full w-60 h-60 mx-auto"
              />
            </div>

            <p className="py-4 text-gray-700">
              At Nazar Japan, our dedication to excellence is the core of
              everything we do. From sourcing only the highest-quality products
              from Japan’s most reputable manufacturers to delivering
              exceptional service, we ensure that every item meets the highest
              standards. This unwavering commitment has solidified our position
              as a leader in the global procurement and distribution of Japanese
              automobiles and goods.
            </p>

            <button className="border border-blue-950 rounded px-4 py-2 text-white bg-blue-950">
              CONTACT US
            </button>
          </div>

          {/* only visible on big screens */}
          <div className="px-4 md:px-8 lg:px-12 hidden lg:block">
            <img
              src="/aboutus2.png"
              alt=""
              className="rounded-full lg:w-80 lg:h-80 mx-auto"
            />
          </div>
        </div>

        {/* about us 2nd details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 py-8 md:py-12 lg:py-16">
          {/* left image for large screens */}
          <div className="px-4 md:px-8 lg:px-12 hidden lg:block">
            <img
              src="/aboutus3.png"
              alt=""
              className="rounded-full lg:w-80 lg:h-80 mx-auto"
            />
          </div>

          {/* right text */}
          <div className="px-4 md:px-8 lg:px-12">
            <h3 className="text-blue-950 text-xl md:text-2xl font-semibold">
              PRODUCT RANGE AND SELECTION
            </h3>

            {/* mobile image */}
            <div className="py-6 block lg:hidden">
              <img
                src="/aboutus3.png"
                alt=""
                className="rounded-full w-60 h-60 mx-auto"
              />
            </div>

            <p className="py-4 text-gray-700">
              We offer a diverse range of products, from the legendary
              reliability of Lexus sedans to the power of Subaru performance
              vehicles and the innovation of Hitachi appliances. Each product is
              carefully vetted to ensure it aligns with the discerning standards
              we uphold, guaranteeing our customers receive only the finest
              offerings Japan has to offer.
            </p>

            <button className="border border-blue-950 rounded px-4 py-2 text-white bg-blue-950">
              CONTACT US
            </button>
          </div>
        </div>

        {/* about us 3rd details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 py-8 md:py-12 lg:py-16">
          <div className="px-4 md:px-8 lg:px-12">
            <h3 className="text-blue-950 text-xl md:text-2xl font-semibold">
              DOMESTIC NETWORK
            </h3>

            {/* mobile image */}
            <div className="py-6 block lg:hidden">
              <img
                src="/aboutus4.png"
                alt=""
                className="rounded-full w-60 h-60 mx-auto"
              />
            </div>

            <p className="py-4 text-gray-700">
              Our roots within Japan are deep, boasting multiple yards
              strategically positioned across the nation. These yards serve as
              hubs for our meticulously inspected, high-quality inventory.
            </p>

            <button className="border border-blue-950 rounded px-4 py-2 text-white bg-blue-950">
              CONTACT US
            </button>
          </div>

          {/* only visible on big screens */}
          <div className="px-4 md:px-8 lg:px-12 hidden lg:block">
            <img
              src="/aboutus4.png"
              alt=""
              className="rounded-full lg:w-80 lg:h-80 mx-auto"
            />
          </div>
        </div>

        {/* about us 4th details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 py-8 md:py-12 lg:py-16">
          {/* left image for large screens */}
          <div className="px-4 md:px-8 lg:px-12 hidden lg:block">
            <img
              src="/aboutus5.png"
              alt=""
              className="rounded-full lg:w-80 lg:h-80 mx-auto"
            />
          </div>

          {/* right text */}
          <div className="px-4 md:px-8 lg:px-12">
            <h3 className="text-blue-950 text-xl md:text-2xl font-semibold">
              PRODUCT RANGE AND SELECTION
            </h3>

            {/* mobile image */}
            <div className="py-6 block lg:hidden">
              <img
                src="/aboutus5.png"
                alt=""
                className="rounded-full w-60 h-60 mx-auto"
              />
            </div>

            <p className="py-4 text-gray-700">
              We offer a diverse range of products, from the legendary
              reliability of Lexus sedans to the power of Subaru performance
              vehicles and the innovation of Hitachi appliances. Each product is
              carefully vetted to ensure it aligns with the discerning standards
              we uphold, guaranteeing our customers receive only the finest
              offerings Japan has to offer.
            </p>

            <button className="border border-blue-950 rounded px-4 py-2 text-white bg-blue-950">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
      {/* last detail area */}

      <div className="bg-gray-200 p-10 m-8 mx-15">
        <h1 className="text-2xl font-bold py-4 text-blue-950">CORE VALUES</h1>
        <div className="flex">
          <img src="/abouticon1.webp" alt="" className="w-18 h-18" />
          <p className="p-4">The company emphasizes trust, quality, and customer satisfaction, making it a cornerstone of the Japanese export industry.</p>

        </div>

        <h1 className="text-2xl font-bold py-4 text-blue-950">OUR MISSION</h1>
        <div className="flex">
          <img src="/abouticon2.webp" alt="" className="w-18 h-18" />
          <p className="p-4">The mission of Nazar Japan Motors is: 
            To offer affordable, efficient, and economical vehicles at competitive prices while delivering an exceptional customer experience that surpasses expectations. We are committed to serving our customers in friendly, professional, and efficient manner, creating genuine value at every step. Meeting expectations is our business; exceeding them is our purpose.</p>

        </div>

        <h1 className="text-2xl font-bold py-4 text-blue-950">VISION STATEMENT</h1>
        <div className="flex">
          <img src="/abouticon3.webp" alt="" className="w-18 h-18" />
          <p className="p-4">The vision Statement of Nazar Japan Motors is:To ensure every customer is happy and fully satisfied, driving our commitment to excellence. At Nazar Japan Motors, We strive to establish ourselves as the market leader in the Japanese used car industry through exceptional service and unwavering dedication to quality.</p>

        </div>

      </div>
    </div>
  );
}
