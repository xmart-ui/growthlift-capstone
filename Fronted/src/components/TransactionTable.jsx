import Button from "../components/ui/Button";

const categoryColors = {
  Food: "bg-orange-100 text-orange-700",
  Transport: "bg-blue-100 text-blue-700",
  Shopping: "bg-purple-100 text-purple-700",
  Bills: "bg-rose-100 text-rose-700",
  Other: "bg-slate-100 text-slate-700",
};

export default function TransactionTable({ transactions = [], onAddClick }) {
  if (transactions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 px-6 py-16 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-3xl">
          📭
        </div>
        <h3 className="font-heading text-lg font-semibold text-slate-900">
          No expenses yet
        </h3>
        <p className="mt-2 max-w-sm text-sm text-slate-500">
          Start tracking your spending by adding your first expense. Your transactions will appear here.
        </p>
        <Button className="mt-6" onClick={onAddClick}>
          + Add Your First Expense
        </Button>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-500">
            <th className="pb-3 pr-4 font-medium">Title</th>
            <th className="pb-3 pr-4 font-medium">Category</th>
            <th className="pb-3 pr-4 font-medium">Amount</th>
            <th className="pb-3 font-medium">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr
              key={tx.id}
              className="border-b border-slate-50 transition-colors hover:bg-slate-50/80"
            >
              <td className="py-4 pr-4 font-medium text-slate-900">{tx.title}</td>
              <td className="py-4 pr-4">
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${categoryColors[tx.category] || categoryColors.Other}`}
                >
                  {tx.category}
                </span>
              </td>
              <td className="py-4 pr-4 font-semibold text-rose-600">
                - Rs. {tx.amount.toLocaleString()}
              </td>
              <td className="py-4 text-slate-500">{tx.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}