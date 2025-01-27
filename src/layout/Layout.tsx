import { Outlet } from "react-router-dom";

import { Sidebar } from "./Sidebar";

export const Layout = () => {
  return (
    <>
      <div className="h-screen overflow-hidden bg-white lg:flex flex-row hidden">
        <Sidebar />
        <main className="grow overflow-y-auto text-primary font-inter">
          <Outlet />
        </main>
      </div>

      {/* Small screen fallback */}
      <div className="lg:hidden flex h-screen w-full items-center justify-center">
        <p className="text-2xl text-primary font-inter">
          Please use a bigger screen size
        </p>
      </div>
    </>
  );
};
