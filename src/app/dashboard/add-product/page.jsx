import AddProductForm from "./AddProductFrom";

export default function AddProductPage() {
  // এখানে চেক করবে ইউজার লগইন করা কিনা
  const isLoggedIn = true; // এখানে পরে তোমার authentication logic বসাবে

  if (!isLoggedIn) {
    return (
      <div className="p-6 text-center">
        <p className="mb-4">You must be logged in to add a product.</p>
        <a
          href="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go to Login
        </a>
      </div>
    );
  }

  // ইউজার লগইন থাকলে AddProductForm দেখাবে
  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Add New Product</h1>
      <AddProductForm />
    </div>
  );
}
