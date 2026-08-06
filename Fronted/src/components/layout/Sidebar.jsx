import { NavLink } from "react-router-dom";
import { LayoutDashboard, PlusCircle, Wallet } from "lucide-react";

const links = [
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    to: "/add-expense",
    label: "Add Expense",
    icon: <PlusCircle size={20} />,
  },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col
        border-r border-slate-200
        bg-white
        dark:border-slate-700
        dark:bg-slate-900
        transition-transform duration-300
        lg:static lg:translate-x-0
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center gap-3 border-b border-slate-200 px-6 dark:border-slate-700">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-2xl
            bg-gradient-to-r from-blue-600 to-indigo-600
            text-white shadow-lg"
          >
            <Wallet size={22} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Expense Tracker
            </h2>

            <p className="text-xs text-slate-500">
              Smart Finance
            </p>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 space-y-2 p-4">
          {links.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl px-4 py-3
                text-sm font-medium transition-all duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                    : "text-slate-600 hover:bg-slate-100 hover:dark:bg-slate-800 dark:text-slate-300"
                }`
              }
            >
              {icon}
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-200 p-5 dark:border-slate-700">
          <div className="rounded-xl bg-slate-100 p-3 dark:bg-slate-800">
            <p className="text-xs font-semibold text-slate-700 dark:text-white">
              Expense Tracker
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Version 1.0
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}