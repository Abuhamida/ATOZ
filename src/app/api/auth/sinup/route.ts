// import { supabaseRouteHandler } from "@/dbconfig/dbconfig";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  try {
    const body = await request.json();
    const {
      firstname,
      lastname,
      username,
      phone,
      email,
      password,
      confirmPassword,
      role,
    } = body;
    console.log(body);
    if (password !== confirmPassword) {
      return new Response(
        JSON.stringify({
          error: "Password and Confirm Password does not match",
        })
      );
    }
    const name = `${firstname} ${lastname}`;
    await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username,
          name: name,
          phone: phone,
          role: role,
        },
        emailRedirectTo: `${requestUrl.origin}/auth/callback`,
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }));
  }
  
  return new Response(JSON.stringify({ message: "success" }));

  // return NextResponse.redirect(requestUrl.origin, {
  //   status: 301,
  // },);
}
