import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
const supabase = createServerComponentClient({ cookies });

export async function POST(req: Request) {
  const body = await req.json();
  const { country_id, country_name } = body;
  try {
    // Check if a country with the same name already exists
    const { data: existingCountry } = await supabase
      .from("countries")
      .select()
      .match({ name: country_name });

      const existingCountry_true = (existingCountry?.length ?? 0) > 0;
      if (existingCountry_true) {
        return Response.json(
          {
            message: "A country with the same name already exists",
          },
          { status: 400 }
        );
      }
      const { data, error } = await supabase
        .from("countries")
        .insert([
          {
            id: country_id,
            name: country_name,
          },
        ])
        .select();
    } catch (error) {
      return Response.json({ message: error }, { status: 500 });
    }
   
  return Response.json(
    { message: "Country created successfully" },
    { status: 200 }
  );
}

export async function PUT(req: Request) {
  const body = await req.json();
  const { country_id, country_name } = body;
  try {
    const { data, error } = await supabase
      .from("countries")
      .update({ name: country_name })
      .match({ id: country_id });
    return Response.json(
      {
        message: "Country updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "error while updateing country", error },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const { country_id, country_name } = body;
  try {
    // Check if a country with the same name already exists
    const { data: existingCountry } = await supabase.from("countries").select();
    const existingCountry_true =
      existingCountry?.find((country) => country.name === country_name).name ===
      country_name;
    if (existingCountry_true) {
      const { data, error } = await supabase
        .from("countries")
        .delete()
        .match({ id: country_id });
      return Response.json(
        {
          message: "Country deleted successfully",
        },
        { status: 200 }
      );
    } else {
      return Response.json(
        {
          message: "Country does not exist",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
