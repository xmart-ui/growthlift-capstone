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
   
  }
};

  return (
    <Card className="mx-auto max-w-xl p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Add Expense
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <Input
          label="Expense Title"
          name="title"
          value={expense.title}
          onChange={handleChange}
          placeholder="Enter expense title"
        />

        <div>
          <label className="mb-2 block text-sm font-medium">
            Category
          </label>

          <select
            name="category"
            value={expense.category}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
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

        <Button className="w-full">
          Add Expense
        </Button>
      </form>
    </Card>
  );
}