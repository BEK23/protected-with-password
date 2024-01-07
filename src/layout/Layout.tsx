import { Outlet } from "react-router-dom";
import { Header } from "../components/header.tsx";

export default function Layout() {
  return (
    <>
      <Header />

      <div className="w-full h-dvh flex items-center justify-center text-7xl md:text-8xl lg:text-9xl font-bold text-center px-4 transition-all">
        <Outlet />
      </div>
    </>
  );
}
