"use client";

import Link from "next/link";
import React, { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import Swal from "sweetalert2";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo - Left */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          >
            BookstStore
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-8 text-lg font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-blue-500 dark:hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-blue-500 dark:hover:text-blue-400"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/add-product"
                className="hover:text-blue-500 dark:hover:text-blue-400"
              >
                Add Product
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="bg-gray-600 text-white px-3 py-1 rounded-md hover:bg-gray-700 transition"
          >
            Login
          </Link>
          
          <button
            onClick={() => {
              Swal.fire({
                title: 'Logged out!',
                text: 'You have been logged out successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
              }).then(() => {
                signOut({ callbackUrl: '/login' });
              });
            }}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-3">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li>
              <Link
                href="/"
                className="block hover:text-blue-500 dark:hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block hover:text-blue-500 dark:hover:text-blue-400"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/add-product"
                className="block hover:text-blue-500 dark:hover:text-blue-400"
              >
                Add Product
              </Link>
            </li>
          </ul>

          {/* Auth Buttons for Mobile */}
          <div className="flex flex-col gap-3 mt-4">
            <Link
              href="/login"
              className="bg-gray-600 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition text-center"
            >
              Login
            </Link>
           
            <button
              onClick={() => {
                Swal.fire({
                  title: 'Logged out!',
                  text: 'You have been logged out successfully.',
                  icon: 'success',
                  confirmButtonText: 'OK'
                }).then(() => {
                  signOut({ callbackUrl: '/login' });
                });
              }}
              className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition text-center"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
