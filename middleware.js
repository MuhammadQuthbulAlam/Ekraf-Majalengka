import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = await getToken({ req: request });
  const pathname = request.nextUrl.pathname;

  if (!token && pathname.startsWith("/Dashboard")) {
    return NextResponse.redirect(new URL("/Login", request.url));
  }
  if (token) {
    if (pathname.startsWith("/Login")) {
      return NextResponse.redirect(new URL("/Dashboard", request.url));
    }
  }

  console.log(token);
}

export const config = {
  matcher: ["/Login", "/Dashboard/:path*"],
};
