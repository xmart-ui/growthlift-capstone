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
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <Card className="w-full max-w-md p-8">

        <h1 className="mb-2 text-center text-3xl font-bold">
          Welcome Back
        </h1>

        <p className="mb-6 text-center text-slate-500">
          Login to your Expense Tracker
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

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

          <Button 
          className="w-full">
            Login
          </Button>

        </form>

        <p 
        className="mt-6 text-center text-sm">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline"
          >
            Register
          </Link>
        </p>

      </Card>
    </main>
  );
}