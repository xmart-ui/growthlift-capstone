import { useEffect, useState } from "react";

export default function Navbar({ onMenuClick }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const userName = user?.name || "User";

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login";
};


  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-4 backdrop-blur-md lg:px-8">

      {/* Left Side */}
      <div className="flex items-center gap-3">

        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>


        <h2 className="font-heading text-lg font-semibold text-slate-900 lg:hidden">
          Dashboard
        </h2>

      </div>


      {/* Right Side */}
      <div className="flex items-center gap-4">


        {/* User Info */}
        <div className="hidden text-right sm:block">

          <p className="text-sm font-medium text-slate-900">
            {userName}
          </p>

          <p className="text-xs text-slate-500">
            Personal Account
          </p>

        </div>


        {/* Avatar */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
          {userName.charAt(0).toUpperCase()}
        </div>

        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
        >
          Logout
        </button>


      </div>

    </header>
  );
}