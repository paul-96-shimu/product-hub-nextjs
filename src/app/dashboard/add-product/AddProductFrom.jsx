"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function AddProductPage() {
  return <AddProductForm />;
}

function AddProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price, image }),
    });

    if (res.ok) {
      Swal.fire({
        title: 'Success!',
        text: 'Product added successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      setName("");
      setDescription("");
      setPrice("");
      setImage("");
    }
  };

  return (
    <form
      className="bg-white p-6 rounded shadow-md max-w-md mx-auto flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-3 py-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="px-3 py-2 border rounded"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="px-3 py-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="px-3 py-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add Product
      </button>
    </form>
  );
}
