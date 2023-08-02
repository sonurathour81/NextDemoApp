import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  let dbData = user;
  let filterData = dbData?.filter((val) => val.id == content.params.id);

  let isData = filterData.length > 0;
  let obj = {
    result: isData ? filterData[0] : "No Data Found",
    success: isData,
  };

  return NextResponse.json(obj, {
    status: "200",
  });
}

export async function PUT(request, content) {
  let data = await request.json();
  data.id = content.params.id;

  if (!content.params.id || !data.name || !data.email || !data.age) {
    return NextResponse.json(
      { message: "Required params is missing", success: false },
      { status: "400" }
    );
  }

  return NextResponse.json({ result: data, success: true }, { status: "201" });
}

export async function DELETE(request, content) {
  if (!content.params.id) {
    return NextResponse.json(
      { message: "Required params is missing", success: false },
      { status: "400" }
    );
  }

  return NextResponse.json(
    { result: "Delete Successfully", success: true },
    { status: "201" }
  );
}
