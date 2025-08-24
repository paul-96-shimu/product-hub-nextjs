"use client";

import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.ok) {
      await Swal.fire({
        title: 'Login Successful!',
        text: 'You are now logged in.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      router.push("/products"); 
    } else {
      Swal.fire({
        title: 'Login Failed',
        text: 'Invalid credentials',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 p-6 border rounded w-full max-w-sm">
        <h2 className="text-2xl font-bold">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Login
        </button>

        <div className="text-center my-2">or</div>

        {/* Google Login */}
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="flex items-center justify-center border px-4 py-2 rounded w-full hover:bg-gray-100 transition"
        >
          <FcGoogle size={20} className="mr-2" />
          Login with Google
        </button>
      </form>
    </div>
  );
}
