import "./../styles/globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import TopBanner from "../components/TopBanner";
import { Providers } from "./provider.js";

import { Inter } from "next/font/google"; 

// ✅ Load Inter font (weight 500, you can add more weights if needed)
const inter = Inter({
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata = {
  title: "Nazar Japan Motors",
  description: "Japanese Cars Dealer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          <TopBanner />
          <Navbar />
          <div className="flex">
            <Sidebar />
            <main className="flex-1">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
