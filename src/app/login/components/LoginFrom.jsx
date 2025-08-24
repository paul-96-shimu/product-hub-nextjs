"use client";

import { signIn } from "next-auth/react";
import React from "react";

export default function LoginForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/products",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="px-3 py-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="px-3 py-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          > 
          </button>


           <div className="mt-4 text-center">
          <p className="mb-2 text-gray-600">Or login with</p>
          <button
            onClick={() => signIn("google", { callbackUrl: "/products" })}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Login with Google
          </button>
        </div>
        </form>

        {/* Google Login Button */}
       
      </div>
    </div>
  );
}
