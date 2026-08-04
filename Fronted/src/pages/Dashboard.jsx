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
    console.log(error);
  }
};

const editExpense = (expense) => {
  navigate("/add-expense", {
    state: expense,
  });
};

useEffect(() => {
  fetchExpenses();
}, []);

const deleteExpense = async (id) => {
  try {
    await api.delete(`/expenses/${id}`);
    fetchExpenses();
  } catch (error) {
    console.log(error);
  }
};

const totalExpenses = transactions.reduce(
  (total, item) => total + Number(item.amount),
  0
);

const summaryCards = [
  {
    label: "Total Expenses",
    value: `Rs. ${totalExpenses}`,
    color: "text-red-600",
    icon: "💸",
  },
  {
    label: "Total Entries",
    value: transactions.length,
    color: "text-blue-600",
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
    
    <div className="space-y-8">

      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600 to-brand-700 p-6 text-white shadow-lg lg:p-10">
        <div className="relative z-10 max-w-2xl">
          <p className="text-sm font-medium text-brand-100">Welcome back 👋</p>
          <h1 className="mt-2 font-heading text-3xl font-bold lg:text-4xl">
            Manage Your Money Smarter
          </h1>
          <p className="mt-3 text-brand-100">
            Track spending, monitor trends, and stay in control of your finances.
          </p>
          <Button
            variant="secondary"
            className="mt-6 bg-white hover:bg-brand-50"
            onClick={() => navigate("/add-expense")}
          >
            + Add Expense
          </Button>
        </div>
        <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10" />
      </section>

    
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {summaryCards.map((card) => (
          <Card key={card.label} hover>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500">{card.label}</p>
                <p className={`mt-2 font-heading text-2xl font-bold ${card.color}`}>
                  {card.value}
                </p>
              </div>
              <span className="text-2xl">{card.icon}</span>
            </div>
          </Card>
        ))}
      </section>

     
      <Card>
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-heading text-xl font-semibold text-slate-900">
            Recent Transactions
          </h2>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              placeholder="Search expenses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="sm:w-56"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15"
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
    </div>
  );
}