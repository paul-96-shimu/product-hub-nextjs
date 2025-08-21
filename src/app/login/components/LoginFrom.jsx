
"use client";

import { useSession, signIn, signOut } from "next-auth/react"

import React, { useRef } from 'react'
  
export default function LoginFrom() {

    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      await signIn("credentials",
         { email, password, redirect: true, callbackUrl: "/products" });
    };

  return (
    <div>
       <form onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md flex flex-col gap-3 w-full max-w-sm"
      >
        <input
          type="email" name='email'
          placeholder="Email"
        
          className="px-3 py-2 border rounded"
          required
        />
        <input
          type="password" name='password'
          placeholder="Password"
         
          className="px-3 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  )
}
