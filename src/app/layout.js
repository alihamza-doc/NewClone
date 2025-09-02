import "./../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopBanner from "../components/TopBanner";
import { Providers } from "./provider.js";
import { Inter } from "next/font/google";
import ClientLayout from "./ClientLayout"; // ✅ wrapper for Sidebar/Filter

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
          <ClientLayout>{children}</ClientLayout>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
