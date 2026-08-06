import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar({ onMenuClick }) {
  const { darkMode, setDarkMode } = useTheme();

  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user?.name || "User";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 dark:border-slate-700 dark:bg-slate-900">

      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
        >
          <Menu size={22} />
        </button>

        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Dashboard
        </h2>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 sm:gap-4">

        <div className="hidden md:block text-right">
          <p className="text-sm font-medium text-slate-900 dark:text-white">
            {userName}
          </p>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            Personal Account
          </p>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-lg border border-slate-300 p-2 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
          {userName.charAt(0).toUpperCase()}
        </div>

        <button
          onClick={handleLogout}
          className="hidden sm:block rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
}