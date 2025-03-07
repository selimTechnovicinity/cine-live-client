"use client";
import { useParams } from "next/navigation";
import { useState } from "react";

export type TResetPasswordData = {
  password: string;
  confirmPassword: string;
};

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();

    const { token } = useParams();
    console.log(token);
    const formData = {
      password: newPassword,
      confirmPassword: confirmPassword,
    };
    console.log(formData);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
        <form className="mt-4" onSubmit={handleReset}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 mt-2 border rounded-md"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-2 mt-2 border rounded-md"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button className="w-full p-2 mt-4 bg-blue-600 cursor-pointer text-white rounded-md">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
