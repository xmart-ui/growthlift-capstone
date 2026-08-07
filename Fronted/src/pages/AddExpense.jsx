import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import api from "../services/api";

export default function AddExpense() {
  const navigate = useNavigate();
  const location = useLocation();

  const [expense, setExpense] = useState(
    location.state || {
      title: "",
      category: "Food",
      amount: "",
      date: "",
      description: "",
    }
  );

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (expense._id) {
        await api.put(`/expenses/${expense._id}`, expense);
      } else {
        await api.post("/expenses", expense);
      }

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <main className="flex justify-center p-4">

      <Card className="w-full max-w-2xl rounded-3xl border border-slate-200 p-8 shadow-2xl dark:border-slate-700">

        <div className="mb-8 text-center">

          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-3xl text-white">
            💳
          </div>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            {expense._id ? "Edit Expense" : "Add Expense"}
          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Track every rupee and stay in control.
          </p>

        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <Input
            label="Expense Title"
            name="title"
            value={expense.title}
            onChange={handleChange}
            placeholder="Enter expense title"
          />

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Category
            </label>

            <select
              name="category"
              value={expense.category}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option>Food</option>
              <option>Transport</option>
              <option>Shopping</option>
              <option>Bills</option>
              <option>Other</option>
            </select>

          </div>

          <Input
            label="Amount"
            type="number"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
            placeholder="Enter amount"
          />

          <Input
            label="Date"
            type="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
          />

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Description
            </label>

            <textarea
              name="description"
              value={expense.description}
              onChange={handleChange}
              rows="4"
              placeholder="Optional description..."
              className="w-full rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

          </div>

          <Button className="w-full rounded-xl py-3">
            {expense._id ? "Update Expense" : "Add Expense"}
          </Button>

        </form>

      </Card>

    </main>
  );
}