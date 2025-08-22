import "./../styles/globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import TopBanner from "../components/TopBanner";
import { Providers } from "./provider.js"; // ✅ import client wrapper

export const metadata = {
  title: "Nazar Japan Motors",
  description: "Japanese Cars Dealer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TopBanner />
          <Navbar />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-4">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
