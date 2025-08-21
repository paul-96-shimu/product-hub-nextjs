import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Discover Amazing Products <br /> at <span className="text-blue-600">ProductStore</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Explore a wide range of high-quality products at the best prices. 
            Login now to manage and add your own products easily.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/products"
              className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Browse Products
            </Link>
            <Link
              href="/login"
              className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-5 py-3 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/Fq5L31Q8/books.jpg"
            alt="Product Store Banner"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
