// import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import FooterNavigation from "./components/layout/FooterNavigation";

export default function Root() {
  return (
    <main className="h-svh overflow-y-auto relative">
      <Outlet />
      <FooterNavigation />
    </main>
  );
}
