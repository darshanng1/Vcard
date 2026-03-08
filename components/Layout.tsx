import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="app-container flex flex-col min-h-screen relative overflow-hidden">

      <main className="flex-grow">
        <Outlet />
      </main>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-4 bottom-24 z-40 bg-slate-800 text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center"
      >
        ↑
      </button>

    </div>
  );
};

export default Layout;