import dbConnect from "@/lib/dbConnect";

export async function POST(request) {
  const data = await request.json();
  try {
    const db = await dbConnect();
    const result = await db.collection("products").insertOne({
      ...data,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({
        success: true,
        product: { ...data, _id: result.insertedId },
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
