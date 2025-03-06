"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    // Call API to register user
    router.push("/dashboard"); // Redirect after registration
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form className="mt-4" onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-2 mt-2 border rounded-md"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 mt-2 border rounded-md"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 mt-2 border rounded-md"
            value={formData.password}
            onChange={handleChange}
          />
          <button className="w-full p-2 mt-4 bg-blue-600 text-white rounded-md">
            Register
          </button>
        </form>
        <div className="mt-2 text-center">
          <Link href="/login" className="text-sm text-blue-600">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
