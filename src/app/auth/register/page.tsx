"use client";
import { useState } from "react";
import { useRegisterMutation } from "@/store/api/authApi";

export default function RegisterPage() {
  const [register, { isLoading }] = useRegisterMutation();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors

    const userData = {
      fullName: form.fullName,
      email: form.email,
      password: form.password,
    };

    console.log("Sending data:", userData);

    try {
      const result = await register(userData).unwrap();
      console.log("Success:", result);
      // Redirect to login or dashboard
    } catch (error: any) {
      console.error("Error:", error);
      if (error.data?.errors) {
        setErrors(error.data.errors);
        console.error("Validation errors:", error.data.errors);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <h2 className="text-xl font-bold text-center">Register</h2>

        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName}</p>
        )}
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 rounded"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />

        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Register"}
        </button>
      </form>
    </div>
  );
}
