"use client";

import Sidebar from "../components/Sidebar";
import Filter from "../components/CarFilter";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // Normalize path (remove trailing slash if present)
  const cleanPath = pathname.replace(/\/$/, "");

  // List of routes where Sidebar & Filter should NOT appear
  const hideSidebarAndFilter = ["/about", "/contact", "/privacy-policy", "/terms", "/our-view", "/our-process","/faqs", "/blog", "/sign-in", "/sign-up"];

  const shouldHide = hideSidebarAndFilter.includes(cleanPath);

  return (
    <div className="flex">
      {!shouldHide && <Sidebar />}
      <main className="flex-1">{children}</main>
      {!shouldHide && <Filter />}
    </div>
  );
}
