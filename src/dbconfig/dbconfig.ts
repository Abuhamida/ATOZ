import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

import { cookies } from "next/headers";

export const supabaseServer = createServerComponentClient({ cookies });
export const supabaseClient = createClientComponentClient();
export const supabaseRouteHandler = createRouteHandlerClient({ cookies });
