export default function Card({ children, className = "", hover = false }) {
  return (
    <div
      className={`rounded-2xl border border-slate-100 bg-white p-6 shadow-[var(--shadow-card)]
         ${hover ? "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]" : ""} ${className}`}
    >
      {children}
    </div>
  );
}