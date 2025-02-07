export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/mon-compte/:path*"]
}