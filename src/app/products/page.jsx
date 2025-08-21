"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <img src={product.image} alt={product.title} className="mb-2" />
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="font-bold mb-4">${product.price}</p>
            <Link
              href={`/products/${product.id}`}
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
