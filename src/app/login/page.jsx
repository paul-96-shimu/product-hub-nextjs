"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const handleSocialLogin = async (provider) => {
    console.log("Social login initiated", provider);
    const res = await signIn(provider, { redirect: false });
    console.log("Social login response:", res);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.ok) {
      router.push("/products"); // ✅ লগইন হলে products এ নিয়ে যাবে
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 p-6 border rounded">
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
        <br />


        <button
          onClick={() => handleSocialLogin("google", { callbackUrl: "/products" })}
          className=" text-black px-4 py-2 rounded hover:bg-red-600 transition btn btn-outline"
        >
          <FcGoogle size={20} />
          Login with Google
        </button>
      </form>
    </div>
  );
}
