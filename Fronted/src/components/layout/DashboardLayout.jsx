import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100 transition-colors duration-300 dark:bg-slate-950">

      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex min-h-screen flex-1 flex-col">

        <Navbar
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="flex-1 bg-slate-100 p-4 transition-colors duration-300 dark:bg-slate-950 lg:p-8">
          <Outlet />
        </main>

        <Footer />

      </div>

    </div>
  );
}