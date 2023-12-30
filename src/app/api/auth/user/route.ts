import { NextResponse } from "next/server";
import { supabaseServer } from "@/dbconfig/dbconfig";

export async function GET(req: Request) {
  let data;
  try {
    const result = await supabaseServer.from("profile").select("*").single();
    data = result.data.role;
  } catch (err) {
    return NextResponse.json(
      { Message: "Error occurred while fetching the data", err },
      { status: 500 }
    );
  }
  return NextResponse.json(
    { Message: "User data fetched successfully", data},
    { status: 200 }
  );
}
