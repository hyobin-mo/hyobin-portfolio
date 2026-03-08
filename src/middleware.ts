import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get("admin-session");
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;

  if (!sessionCookie || sessionCookie.value !== sessionSecret) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/((?!login).*)"],
};
