import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request) {
  let dbData = user;
  return NextResponse.json(dbData, { status: "201" });
}

export async function POST(request) {
  let data = await request.json();

  if (!data.name || !data.email || !data.age) {
    return NextResponse.json(
      { message: "Required params is missing", success: false },
      { status: "400" }
    );
  }

  return NextResponse.json(
    { message: "User added successfully", success: true },
    { status: "201" }
  );
}
