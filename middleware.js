import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("admin_token");
  const isAdminPage = request.nextUrl.pathname.startsWith("/admin/dashboard");

  // If trying to access dashboard without token → redirect to login
  if (isAdminPage && !token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // If already logged in and visiting login page → redirect to dashboard
  if (request.nextUrl.pathname === "/admin/login" && token) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard", "/admin/login"],
};