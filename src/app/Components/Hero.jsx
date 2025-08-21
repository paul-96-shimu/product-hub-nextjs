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










 <div className="max-w-6xl mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Product 1 */}
      <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
        <img
          src="https://i.ibb.co.com/MyNNk4Dk/alcj.jpg"
          alt="Book 1"
          className="w-full h-40 object-cover rounded mb-2"
        />
        <h3 className="font-semibold mb-1">The Alchemist</h3>
        <p className="text-gray-600 mb-2">A novel about following your dreams.</p>
        <p className="font-bold mb-2">$15</p>
        <a
          href="/products/1"
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Details
        </a>
      </div>
      {/* Product 2 */}
      <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
        <img
          src="https://i.ibb.co.com/2BJCbB4/atomic.jpg"
          alt="Book 2"
          className="w-full h-40 object-cover rounded mb-2"
        />
        <h3 className="font-semibold mb-1">Atomic Habits</h3>
        <p className="text-gray-600 mb-2">A guide to building better habits.</p>
        <p className="font-bold mb-2">$20</p>
        <a
          href="/products/2"
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Details
        </a>
      </div>
      {/* Product 3 */}
      <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
        <img
          src="https://i.ibb.co.com/hF4q4L3Y/rich.jpg"
          alt="Book 3"
          className="w-full h-40 object-cover rounded mb-2"
        />
        <h3 className="font-semibold mb-1">Rich Dad Poor Dad</h3>
        <p className="text-gray-600 mb-2">Financial education for everyone.</p>
        <p className="font-bold mb-2">$18</p>
        <a
          href="/products/3"
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Details
        </a>
      </div>
      {/* Product 4 */}
      <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
        <img
          src="https://i.ibb.co.com/JNkTnjN/7habits.jpg"
          alt="Book 4"
          className="w-full h-40 object-cover rounded mb-2"
        />
        <h3 className="font-semibold mb-1">The 7 Habits of Highly Effective People</h3>
        <p className="text-gray-600 mb-2">Classic guide to personal and professional success.</p>
        <p className="font-bold mb-2">$22</p>
        <a
          href="/products/4"
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Details
        </a>
      </div>
    </div>
  </div>










    </section>




  );
}
