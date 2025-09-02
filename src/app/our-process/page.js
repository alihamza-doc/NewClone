import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Page({ children }) {
  return (
    <main className={`${montserrat.className} min-h-screen bg-blue-950 lg:bg-white`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-15">
        <div className="p-5 lg:p-10 flex flex-col justify-center items-start">
          {/* left div */}

          <h1 className=" text-4xl lg:text-6xl font-bold  lg:mb-4 text-white lg:text-blue-950">
            <span className="text-yellow-500">JAPAN</span>
            <br />
            AUCTION
          </h1>

          <div className="flex  lg:flex-row gap-1 lg:gap-4 lg:mb-6 ">
            <img src="/1.webp" alt="" className="w-15 h-22  lg:w-30 lg:h-40 mt-4" />
            <p className="text-sm lg:text-xl mt-2 font-bold pt-6 lg:pt-3 text-white lg:text-black" >Best Cars are selected in Japan
              Auction for our valued
              customers.</p>
          </div>
        </div>

        <div >
          {/* right div */}
          <img src="/our-process1.webp" alt=""
            className="pt-1 lg:pt-15" />
        </div>

      </div>
      {/* map image */}
      <div>
        <img src="/map-view.webp" alt="" />
      </div>
      {/*second section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:pt-15">
        <div className="p-5 lg:p-10 flex flex-col justify-center items-start ">
          {/* left div */}
          <div className="rounded-4xl overflow-hidden">
            <img src="/our-process2.webp" alt=""
              className="pt-1 lg:pt-1 hidden lg:block " />
          </div>
        </div>

        <div className="p-5 lg:p-10 flex flex-col justify-center items-start">
          {/* right div */}



          <h1 className=" text-4xl lg:text-6xl font-bold  lg:mb-4 lg:mt-8 text-white lg:text-blue-950">
            <span className="text-yellow-500">AUTO</span>
            <br />
            INSPECTION
          </h1>

          <div className="flex  lg:flex-row gap-1 lg:gap-4 lg:mb-6 ">
            <img src="/2.webp" alt="" className="w-15 h-22  lg:w-30 lg:h-40 mt-4" />
            <p className="text-sm lg:text-xl mt-2 font-bold pt-6 lg:pt-5 lg:p-5 text-white lg:text-black " >Auto Inspection is Performed to meet Quality Standards before shipping to vehicle destination County.</p>
          </div>

          <div>
            <img src="/our-process2.webp" alt="" className="block lg:hidden rounded my-5" />
          </div>
        </div>

      </div>
      {/* third section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:pt-15">
        <div className="p-5 lg:p-10 flex flex-col justify-center items-start">
          {/* left div */}

          <h1 className=" text-4xl lg:text-6xl font-bold  lg:mb-4 text-blue-950">
            <span className="text-yellow-500 px-2 lg:px-8">IN TRANSIT</span>
            <br />

          </h1>

          <div className="flex  lg:flex-row gap-1 lg:gap-4 lg:mb-4 lg:p-6 ">
            <img src="/3.webp" alt="" className="w-15 h-22  lg:w-30 lg:h-40 mt-4" />
            <p className="text-sm lg:text-xl mt-2 font-bold pt-6 lg:pt-6 text-white lg:text-black" >We use best available shipping services for Vehicles transportation.</p>
          </div>
        </div>

        <div className="rounded lg:rounded-3xl overflow-hidden mx-3 lg:mx-10">
          {/* right div */}
          <img src="/our-process3.webp" alt=""
            className="w-100 h-50 lg:w-150 lg:h-100" />
        </div>

      </div>

      {/*fourth section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:pt-15">
        <div className="p-5 lg:p-10 flex flex-col justify-center items-start overflow-hidden rounded-4xl">
          {/* left div */}
          <img src="/our-process4.webp" alt=""
            className="pt-1 lg:pt-1  hidden lg:block" />

        </div>

        <div className="p-5 lg:p-10 flex flex-col justify-center items-start">
          {/* right div */}



          <h1 className=" text-4xl lg:text-6xl font-bold  lg:mb-4 lg:mt-8 text-blue-950">
            <span className="text-yellow-500">AT PORT</span>
            <br />

          </h1>

          <div className="flex  lg:flex-row gap-1 lg:gap-4 lg:mb-6 ">
            <img src="/4.webp" alt="" className="w-15 h-22  lg:w-30 lg:h-40 mt-4" />
            <p className="text-sm lg:text-xl mt-2 font-bold pt-6 lg:pt-5 lg:p-5 text-white lg:text-black" >At the destination port the Vehicles are Unloaded from ship and transported to the Showroom. </p>
          </div>

          <div>
            <img src="/our-process2.webp" alt="" className="block lg:hidden rounded my-5" />
          </div>
        </div>

      </div>

      {/* fifth section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:pt-15">
        <div className="p-5 lg:p-10 flex flex-col justify-center items-start">
          {/* left div */}

          <h1 className=" text-3xl lg:text-5xl font-bold  lg:mb-4 text-blue-950">
            <span className="text-yellow-500 lg:px-8 px-2">IN SHOWROOM</span>
            <br />

          </h1>

          <div className="flex  lg:flex-row gap-1 lg:gap-4 lg:mb-4 lg:p-6 ">
            <img src="/5.webp" alt="" className="w-15 h-22  lg:w-30 lg:h-40 mt-4" />
            <p className="text-sm lg:text-xl mt-2 font-bold pt-6 lg:pt-6 text-white lg:text-black" >Our Valued customers receive the best quality Vehicle from our sales team.</p>
          </div>
        </div>

        <div className="">
          {/* right div */}
          <img src="/our-process5.webp" alt=""
            className="pt-1 lg:p-10 rounded p-5" />
        </div>

      </div>
    </main>
  );
}