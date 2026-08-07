export default function Footer() {
  return (
    <footer
      className="
        border-t border-slate-200
        bg-white/80
        px-6 py-5
        text-center
        backdrop-blur-md
        transition-colors duration-300

        dark:border-slate-700
        dark:bg-slate-900/80
      "
    >
      <p className="text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          Smart Expense Tracker
        </span>
        . All rights reserved.
      </p>

      <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
        Built with React • Node.js • Express • MongoDB
      </p>
    </footer>
  );
}