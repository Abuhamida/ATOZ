import { supabaseRouteHandler } from '@/dbconfig/dbconfig'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)

  await supabaseRouteHandler.auth.signOut()

  return NextResponse.redirect(`${requestUrl.origin}/`, {
    status: 301,
  })
}