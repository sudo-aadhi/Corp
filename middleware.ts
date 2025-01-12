import { betterFetch } from "@better-fetch/fetch";
import { Session } from "inspector";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const authRoutes = ["/sign-in", "/sign-up"];
const passwordRoutes = ["/reset-password"];
const emailVerifiedRoutes = ["/email-verified"];

export default async function authMiddleware(req: NextRequest) {
  const pathName = req.nextUrl.pathname;
  const queryParams = req.nextUrl.searchParams;
  if (pathName === "/") {
    return NextResponse.next();
  }
  if (
    pathName.startsWith("/_next/static") ||
    pathName.startsWith("/_next/image") ||
    pathName.startsWith("/api/auth/") ||
    /\.(png|svg|jpeg|webp|jpg|heif)$/.test(pathName)
  ) {
    return NextResponse.next();
  }
  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: process.env.BETTER_AUTH_URL,
      headers: {
        cookie: req.headers.get("cookie") || "",
      },
    },
  );

  const isAuthRoute = authRoutes.includes(pathName);
  const isPasswordRoute = passwordRoutes.includes(pathName);
  const isEmailVerifiedRoute = emailVerifiedRoutes.includes(pathName);

  if (!session) {
    if (isAuthRoute) {
      return NextResponse.next();
    }
    if (isPasswordRoute) {
      const hasToken = queryParams.has("token");
      const hasError = queryParams.has("error");
      if (hasToken || hasError) {
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  if (isAuthRoute || isPasswordRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (isEmailVerifiedRoute) {
    const isValid = queryParams.has("is_valid");
    if (isValid) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api/auth|^/$|_next/static|_next/image|.*\\.(?:png|svg|jpeg|webp|jpg|heif)$).*)",
  ],
};
