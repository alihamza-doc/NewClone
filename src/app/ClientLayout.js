"use client";

import Sidebar from "../components/Sidebar";
import Filter from "../components/CarFilter";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // Normalize path (remove trailing slash if present, but keep "/" for home)
  const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

  // ✅ Sidebar will show only on these pages
  const showSidebar = ["/","/faqs","/contact"];

  // ✅ Filter will show only on these pages
  const showFilter = ["/"];

  const shouldShowSidebar = showSidebar.includes(cleanPath);
  const shouldShowFilter = showFilter.includes(cleanPath);

  return (
    <div className="flex">
      {shouldShowSidebar && <Sidebar />}
      <main className="flex-1">{children}</main>
      {shouldShowFilter && <Filter />}
    </div>
  );
}
