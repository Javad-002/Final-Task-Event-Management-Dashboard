import { NextRequest, NextResponse } from "next/server";

export const middleware = async (requset: NextRequest) => {
  const token = requset.cookies.get("token");
  if (requset.nextUrl.pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", requset.url));
  }
  if (requset.nextUrl.pathname.startsWith("/login") && token) {
    return NextResponse.redirect(new URL("/dashboard", requset.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher:["/dashboard/:path","/dashboard","/login"]
};
