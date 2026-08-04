import Button from "../components/ui/Button";

const categoryColors = {
  Food: "bg-orange-100 text-orange-700",
  Transport: "bg-blue-100 text-blue-700",
  Shopping: "bg-purple-100 text-purple-700",
  Bills: "bg-rose-100 text-rose-700",
  Other: "bg-slate-100 text-slate-700",
};

export default function TransactionTable({
  transactions = [],
  onAddClick,
  onDelete,
  onEdit,
}) {
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
          Start tracking your spending by adding your first expense.
        </p>

        <Button className="mt-6" onClick={onAddClick}>
          + Add Your First Expense
        </Button>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
            <th className="py-3 pr-4">Title</th>
            <th className="py-3 pr-4">Category</th>
            <th className="py-3 pr-4">Amount</th>
            <th className="py-3 pr-4">Date</th>
            <th className="py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((tx) => (
            <tr
              key={tx._id}
              className="border-b border-slate-100 hover:bg-slate-50"
            >
              <td className="py-4 pr-4 font-medium text-slate-900">
                {tx.title}
              </td>

              <td className="py-4 pr-4">
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                    categoryColors[tx.category] || categoryColors.Other
                  }`}
                >
                  {tx.category}
                </span>
              </td>

              <td className="py-4 pr-4 font-semibold text-rose-600">
                Rs. {Number(tx.amount).toLocaleString()}
              </td>

              <td className="py-4 pr-4 text-slate-500">
                {new Date(tx.date).toLocaleDateString()}
              </td>

              <td className="py-4">
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => onEdit(tx)}
                    className="rounded bg-blue-500 px-3 py-1 text-white transition hover:bg-blue-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(tx._id)}
                    className="rounded bg-red-500 px-3 py-1 text-white transition hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}