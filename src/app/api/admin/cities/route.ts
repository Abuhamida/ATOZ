import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
const supabase = createServerComponentClient({ cookies });

export async function POST(req: Request) {
  const body = await req.json();
  const { id, name } = body.newCity;
  const CountryName = body.CountryName;
  try {
    // Check if a country with the same name already exists
    const { data: existingCountry } = await supabase
      .from("cites")
      .select()
      .match({ name: name });

    const existingCountry_true = (existingCountry?.length ?? 0) > 0;
    if (existingCountry_true) {
      return Response.json(
        {
          message: "A city with the same name already exists",
        },
        { status: 400 }
      );
    }
    const { data, error } = await supabase
      .from("cites")
      .insert([
        {
          id: id,
          name: name,
          CountryName: CountryName,
        },
      ])
      .select();
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
  return Response.json(
    {
      message: "city add successfully",
      CountryName: CountryName,
      id: id,
      name: name,
    },
    { status: 200 }
  );
}

export async function PUT(req: Request) {
  const body = await req.json();
  const { id, name } = body;
  try {

    const { data: existingCountry } = await supabase
      .from("cites")
      .select()
      .match({ name: name });

    const existingCountry_true = (existingCountry?.length ?? 0) > 0;
    if (existingCountry_true) {
      return Response.json(
        {
          message: "A city with the same name already exists",
        },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("cites")
      .update({ name: name })
      .match({ id: id });
    return Response.json(
      {
        message: "city updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "error while updating city", error },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const { id, name } = body;
  try {
    // Check if a country with the same name already exists
    const { data: existingCountry } = await supabase
      .from("cites")
      .select()
      .match({ name: name });
    const existingCountry_true = (existingCountry?.length ?? 0) > 0;
    if (existingCountry_true) {
      const { data, error } = await supabase
        .from("cites")
        .delete()
        .match({ id: id });
      return Response.json(
        {
          message: "city deleted successfully",
        },
        { status: 200 }
      );
    } else {
      return Response.json(
        {
          message: "city does not exist",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
