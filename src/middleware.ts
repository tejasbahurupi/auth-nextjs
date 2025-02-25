import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || "";

  const isPublicPath =
    path === "/login" || path === "/signup" || path === "/verifyemail";

  // Redirect logic for logged-in users trying to access public pages
  if (token && isPublicPath) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }

  // Redirect logic for non-logged in users trying to access protected pages
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  // Allow the request to continue if no conditions are met
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/profile",
    "/profile/:id",
    "/login",
    "/signup",
    "/verifyemail",
  ],
};
