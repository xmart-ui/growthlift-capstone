export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-4 text-center text-sm text-slate-500 lg:px-8">
      © {new Date().getFullYear()} Smart Expense Tracker. All rights reserved.
    </footer>
  );
}