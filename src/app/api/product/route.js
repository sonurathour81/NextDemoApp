import { NextResponse } from "next/server";
import connectDB from "@/util/connectdb";
import ProductModel from "@/util/models/product";

connectDB();

export async function GET(request) {
  const data = await ProductModel.find();
  return NextResponse.json(data, { status: "201" });
}

export async function POST(request) {
  let data = await request.json();

  if (
    !data.title ||
    !data.brand ||
    !data.category ||
    !data.price ||
    !data.stock
  ) {
    return NextResponse.json(
      {
        message: "title, brand, category, price, stock are required params",
        success: false,
      },
      { status: "400" }
    );
  }

  const doc = new ProductModel({
    ...data,
  });
  await doc.save();

  return NextResponse.json(
    { result: doc, message: "User added successfully", success: true },
    { status: "201" }
  );
}
