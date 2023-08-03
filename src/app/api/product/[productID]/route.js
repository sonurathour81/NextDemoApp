import { NextResponse } from "next/server";
import connectDB from "@/util/connectdb";
import ProductModel from "@/util/models/product";

connectDB();

export async function GET(request, content) {
  try {
    let data = await ProductModel.findById(content.params.productID);
    return NextResponse.json(data, {
      status: "200",
    });
  } catch (e) {
    return NextResponse.json("product not found", {
      status: "400",
    });
  }
}

export async function PUT(request, content) {
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

  let res = await ProductModel.findOneAndUpdate(
    { _id: content.params.productID },
    data
  );
  return NextResponse.json(
    { result: res, message: "Product update successfully", success: true },
    { status: "201" }
  );
}

export async function DELETE(request, content) {
  let res = await ProductModel.deleteOne({ _id: content.params.productID });

  if (!res.deletedCount) {
    return NextResponse.json(
      { message: "Product id not exist!", success: false },
      { status: "400" }
    );
  }

  return NextResponse.json(
    { result: "Delete Successfully", success: true },
    { status: "201" }
  );
}
