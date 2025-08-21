"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id));
        setProduct(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p className="p-6">Loading or Product not found...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover rounded mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="font-bold text-xl mb-4">${product.price}</p>
      </div>
    </div>
  );
}
