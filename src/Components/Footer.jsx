import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">BooksStore</h2>
          <p className="text-sm">
            Your one-stop shop for the best products. Quality and affordability guaranteed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-400">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-400">Products</Link>
            </li>
            <li>
              <Link href="/dashboard/add-product" className="hover:text-blue-400">Add Product</Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-blue-400">Login</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p>Email: support@productstore.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center border-t border-gray-700 mt-6 pt-4 text-sm">
        © {new Date().getFullYear()} ProductStore. All rights reserved.
      </div>
    </footer>
  );
}
