import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import api from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", form);

    
      localStorage.setItem("token", res.data.token);

    
      localStorage.setItem("user", JSON.stringify(res.data.user));



      navigate("/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

return (
  <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-4 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">

    <Card className="w-full max-w-md rounded-3xl border border-slate-200 p-8 shadow-2xl dark:border-slate-700">

      <div className="mb-8 text-center">

        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-3xl text-white shadow-lg">
          💰
        </div>

        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Welcome Back
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Login to continue managing your expenses.
        </p>

      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        <Input
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        <Button className="w-full rounded-xl py-3">
          Login
        </Button>

      </form>

      <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-blue-600 hover:underline"
        >
          Register
        </Link>
      </p>

    </Card>

  </main>
);
}