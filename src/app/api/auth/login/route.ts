import { supabaseRouteHandler } from "@/dbconfig/dbconfig";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const body = await request.json();
  const { email, password } = body;

  try {
    await supabaseRouteHandler.auth.signInWithPassword({
      email,
      password,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }));
  }

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  });
}
