import Button from "../components/ui/Button";

const categoryColors = {
  Food:
    "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
  Transport:
    "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
  Shopping:
    "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
  Bills:
    "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
  Other:
    "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
};

export default function TransactionTable({
  transactions = [],
  onAddClick,
  onDelete,
  onEdit,
}) {
  if (transactions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-8 py-16 text-center dark:border-slate-700 dark:bg-slate-800/40">

        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl dark:bg-blue-500/20">
          📭
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          No Expenses Yet
        </h3>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Start tracking your expenses by adding your first expense.
        </p>

        <Button
          className="mt-6"
          onClick={onAddClick}
        >
          + Add Expense
        </Button>

      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">

      <table className="min-w-full text-left">

        <thead>

          <tr className="border-b border-slate-200 bg-slate-100 text-xs uppercase tracking-wider text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">

            <th className="px-6 py-4">Title</th>

            <th className="px-6 py-4">Category</th>

            <th className="px-6 py-4">Amount</th>

            <th className="px-6 py-4">Date</th>

            <th className="px-6 py-4 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {transactions.map((tx) => (

            <tr
              key={tx._id}
              className="border-b border-slate-100 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/60"
            >

              <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white">
                {tx.title}
              </td>

              <td className="px-6 py-5">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    categoryColors[tx.category] ||
                    categoryColors.Other
                  }`}
                >
                  {tx.category}
                </span>

              </td>

              <td className="px-6 py-5 font-bold text-red-500">
                Rs. {Number(tx.amount).toLocaleString()}
              </td>

              <td className="px-6 py-5 text-slate-500 dark:text-slate-400">
                {new Date(tx.date).toLocaleDateString()}
              </td>

              <td className="px-6 py-5">

                <div className="flex justify-center gap-3">

                  <button
                    onClick={() => 
                      onEdit(tx)}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:scale-105 hover:bg-blue-700"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => 
                      onDelete(tx._id)}
                    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:scale-105 hover:bg-red-700"
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