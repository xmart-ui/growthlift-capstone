import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function AddExpense() {
  const navigate = useNavigate();

  const [expense, setExpense] = useState({
    title: "",
    category: "Food",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(expense);

    navigate("/dashboard");
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