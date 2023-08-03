import { NextResponse } from "next/server";
import connectDB from "@/util/connectdb";
import ProductModel from "@/util/models/product";
connectDB();
export async function POST(request) {
  let data = await request.json();
  let errStatus = false;

  data.length > 0 &&
    data.map((val, idx) => {
      if (
        !val.title ||
        !val.brand ||
        !val.category ||
        !val.price ||
        !val.stock
      ) {
        errStatus = true;
      }
    });

  if (errStatus) {
    return NextResponse.json(
      {
        message: "title, brand, category, price, stock are required params",
        success: false,
      },
      { status: "400" }
    );
  }

  const options = { ordered: true };

  const result = await ProductModel.insertMany(data, options);

  return NextResponse.json(
    { result: result, message: "User added successfully", success: true },
    { status: "201" }
  );
}
