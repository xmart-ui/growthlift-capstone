import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import TransactionTable from "../components/TransactionTable";
import api from "../services/api";

export default function Dashboard() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [transactions, setTransactions] = useState([]);

  const fetchExpenses = async () => {
    try {
      const res = await api.get("/expenses");
      setTransactions(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const editExpense = (expense) => {
    navigate("/add-expense", {
      state: expense,
    });
  };

  const deleteExpense = async (id) => {
    try {
      await api.delete(`/expenses/${id}`);
      fetchExpenses();
    } catch (error) {
      console.error(error);
    }
  };

  const totalExpenses = transactions.reduce(
    (total, item) => total + Number(item.amount),
    0
  );

  const summaryCards = [
    {
      label: "Total Expenses",
      value: `Rs. ${totalExpenses.toLocaleString()}`,
      color: "text-red-500",
      icon: "💸",
    },
    {
      label: "Total Entries",
      value: transactions.length,
      color: "text-blue-500",
      icon: "📊",
    },
  ];

  const filteredTransactions = transactions.filter((tx) => {
    const matchesSearch = tx.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || tx.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen space-y-8 rounded-3xl bg-slate-50 p-4 dark:bg-slate-900 dark:text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-2xl">

        <div className="relative z-10 max-w-2xl">
          <p className="text-sm font-medium text-blue-100">
            Welcome back 👋
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Manage Your Money Smarter
          </h1>

          <p className="mt-4 text-blue-100">
            Track spending, monitor trends and stay in control of your finances.
          </p>

          <Button
            variant="secondary"
            className="mt-6 bg-white text-blue-700 hover:bg-slate-100"
            onClick={() => navigate("/add-expense")}
          >
            + Add Expense
          </Button>
        </div>

        <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-white/10 blur-2xl"></div>

        <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-blue-300/20 blur-3xl"></div>

      </section>

      {/* Summary Cards */}

      <section className="grid gap-6 md:grid-cols-2">

        {summaryCards.map((card) => (

          <Card key={card.label} hover>

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {card.label}
                </p>

                <p
                  className={`mt-2 text-3xl font-bold ${card.color}`}
                >
                  {card.value}
                </p>

              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl">
                {card.icon}
              </div>

            </div>

          </Card>

        ))}

      </section>

      {/* Transactions */}

      <Card className="shadow-xl">

        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <h2 className="text-2xl font-bold dark:text-white">
            Recent Transactions
          </h2>

          <div className="flex flex-col gap-3 sm:flex-row">

            <Input
              placeholder="Search expenses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="sm:w-60"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option value="all">All Categories</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Shopping">Shopping</option>
              <option value="Bills">Bills</option>
            </select>

          </div>

        </div>

        <TransactionTable
          transactions={filteredTransactions}
          onAddClick={() => navigate("/add-expense")}
          onDelete={deleteExpense}
          onEdit={editExpense}
        />

      </Card>

    </main>
  );
}