export default function Input({
  label,
  id,
  error,
  icon,
  className = "",
  ...props
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
            {icon}
          </span>
        )}

        <input
          id={id}
          className={`
            w-full rounded-xl
            border border-slate-200
            bg-white
            px-4 py-3
            text-sm text-slate-800
            placeholder:text-slate-400
            shadow-sm
            transition-all duration-300

            focus:border-blue-500
            focus:outline-none
            focus:ring-4 focus:ring-blue-500/20

            dark:border-slate-700
            dark:bg-slate-800
            dark:text-white
            dark:placeholder:text-slate-500
            dark:focus:border-blue-400
            dark:focus:ring-blue-400/20

            ${icon ? "pl-10" : ""}
            ${
              error
                ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                : ""
            }

            ${className}
          `}
          {...props}
        />
      </div>

      {error && (
        <p className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}