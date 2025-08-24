import { promises as fs } from "fs";
import path from "path";

export async function POST(request) {
  const data = await request.json();
  const filePath = path.join(process.cwd(), "public", "products.json");

  // Read existing products
  let products = [];
  try {
    const fileData = await fs.readFile(filePath, "utf-8");
    products = JSON.parse(fileData);
  } catch (err) {
    // If file doesn't exist or is empty, start with empty array
    products = [];
  }

  // Add new product
  products.push({ ...data, id: Date.now() });

  // Save updated products
  await fs.writeFile(filePath, JSON.stringify(products, null, 2));

  return new Response(JSON.stringify({ success: true, product: data }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
