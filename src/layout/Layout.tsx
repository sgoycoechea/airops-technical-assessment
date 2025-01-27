import { Outlet } from "react-router-dom";

import { Sidebar } from "./Sidebar";

export const Layout = () => {
  return (
    <div className="h-screen overflow-hidden bg-white flex flex-row">
      <Sidebar />
      <main className="grow overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};
