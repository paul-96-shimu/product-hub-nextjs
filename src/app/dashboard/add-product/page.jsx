"use client";
import AddProductForm from "./AddProductFrom";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Add New Product</h1>
      <AddProductForm />
    </div>
  );
}
